import os
from flask import Flask, request, jsonify, redirect, send_from_directory
import mercadopago # type: ignore
from flask_migrate import Migrate
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands

# Configuración del entorno
ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# Configuración de la base de datos
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# Configuración de MercadoPago
mp = mercadopago.MP("YOUR_CLIENT_ID", "YOUR_CLIENT_SECRET")

# Agregar el blueprint de API
app.register_blueprint(api, url_prefix='/api')

# Crear preferencia de pago
@app.route('/api/create_preference', methods=['POST'])
def create_preference():
    try:
        data = request.get_json()  # Datos del carrito

        preference_data = {
            "items": [],
            "back_urls": {
                "success": "http://localhost:3000/payment/success",
                "failure": "http://localhost:3000/payment/failure",
                "pending": "http://localhost:3000/payment/pending"
            },
            "auto_return": "approved"
        }

        # Agregar los productos del carrito a la preferencia
        for producto in data["cart"]:
            preference_data["items"].append({
                "title": producto["nombre"],
                "quantity": producto["cantidad"],
                "unit_price": producto["precio"]
            })

        # Crear la preferencia en MercadoPago
        preference = mp.create_preference(preference_data)

        # Devolver el ID de la preferencia
        return jsonify({
            "preference_id": preference["response"]["id"]
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Manejar el éxito del pago
@app.route('/payment/success')
def payment_success():
    preference_id = request.args.get('preference_id')
    payment_data = mp.payment().search({"preference_id": preference_id})

    if payment_data['response']['status'] == "approved":
        # Lógica para actualizar el estado del pago en la base de datos
        return jsonify({"status": "success", "message": "Pago aprobado"})
    else:
        return redirect("/payment/failure")

# Manejar el fracaso del pago
@app.route('/payment/failure')
def payment_failure():
    return jsonify({"status": "error", "message": "El pago no fue exitoso."})

# Manejar el estado pendiente del pago
@app.route('/payment/pending')
def payment_pending():
    return jsonify({"status": "pending", "message": "El pago está pendiente de confirmación."})

# Cualquier otra ruta
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # Evitar cache
    return response

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
