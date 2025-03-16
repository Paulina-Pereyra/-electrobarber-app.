const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path'); // Asegúrate de incluir 'path'
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'), // Genera los archivos en la carpeta 'build'
        filename: 'bundle.js', // Nombre del archivo JavaScript empaquetado
        publicPath: '/-electrobarber.github.io/' // Cambia esto al nombre de tu repositorio de GitHub
    },
    plugins: [
        new Dotenv({
            safe: true,
            systemvars: true
        })
    ]
});
