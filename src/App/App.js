import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import {Context} from "../Context";
import {PAGES} from "../config/Const";
import './App.css';
import HomePage from "../components/pages/Home/Home";
import ProfilePage from "../components/pages/Profile/Profile";
import MapPage from "../components/pages/Map/Map";
import LoginPage from "../components/pages/Login/Login";
import RegistrationPage from "../components/pages/Registration/Registration";

const AuthorizationProvider = ({children}) => {
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

export default function App() {
    return (
            <div className="App" data-testid="app-element">
                <BrowserRouter>
                    <Routes>
                        <Route exact path={PAGES.PROFILE} element={<ProfilePage/>}/>
                        <Route exact path={PAGES.MAP} element={<MapPage/>}/>
                        <Route exact path={PAGES.LOGIN} element={<LoginPage/>}/>
                        <Route exact path={PAGES.REGISTRATION} element={<RegistrationPage/>}/>
                        <Route exact path={PAGES.HOME} element={<HomePage/>}/>
                        <Route exact path="/exit" element={<Navigate replace to={PAGES.LOGIN}/>}/>
                        <Route exact path="/" element={<Navigate replace to={PAGES.HOME}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
    );
}

