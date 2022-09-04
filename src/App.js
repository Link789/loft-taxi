import React from 'react'

import {Context} from "./Context";
import LoginPage from "./components/pages/Login/Login";
import './styles/App.css';

export const AuthorizationProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const logIn = (login, password) => {
        if (login === "login" && password === "password") {
            setIsLoggedIn(true)
        }
    }
    const logOut = () => {
        setIsLoggedIn(false)
    }
    const authorizationFunctions = {
        logIn,
        logOut,
        isLoggedIn
    }
    return (
        <Context.Provider value={authorizationFunctions}>
            {children}
        </Context.Provider>
    )
}

function App() {
    return (
        <AuthorizationProvider>
            <div className="App" data-testid="app-element">
                <LoginPage/>
            </div>
        </AuthorizationProvider>
    );
}

export default App;
