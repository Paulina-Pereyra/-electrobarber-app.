const getState = ({ getStore, getActions, setStore }) => {
    const storedAuth = JSON.parse(localStorage.getItem('isAuthenticated')) || false;
    const storedUser = JSON.parse(localStorage.getItem('user')) || null;

    return {
        store: {
            isAuthenticated: storedAuth,
            user: storedUser,
        },
        actions: {
            login: (user) => {
                setStore(prevState => ({
                    ...prevState,
                    isAuthenticated: true,
                    user: user
                }));
                localStorage.setItem('isAuthenticated', JSON.stringify(true));
                localStorage.setItem('user', JSON.stringify(user));
            },
			logout: () => {
				setStore(prevState => ({
					...prevState,
					isAuthenticated: false,
					user: null,
				}));
				localStorage.removeItem("isAuthenticated");
				localStorage.removeItem("user");
			}
        }
    };
};

export default getState;  
