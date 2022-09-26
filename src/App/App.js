import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {useSelector} from "react-redux"

import ProfilePage from "../components/pages/Profile/Profile"
import MapPage from "../components/pages/Map/Map"
import LoginPage from "../components/pages/Login/Login"
import RegistrationPage from "../components/pages/Registration/Registration"
import {selectIsLoggedIn} from "../redux/selectors"
import {PAGES} from "../config/consts"
import './App.css'


export default function App() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <div className="App" data-testid="app-element">
            <BrowserRouter>
                <Routes>
                    <Route exact path={PAGES.PROFILE} element={
                        isLoggedIn ? <ProfilePage/> : <Navigate replace to={PAGES.LOGIN}/>
                    }/>
                    <Route exact path={PAGES.MAP} element={
                        isLoggedIn ? <MapPage/> : <Navigate replace to={PAGES.LOGIN}/>
                    }/>
                    <Route exact path={PAGES.LOGIN} element={
                        isLoggedIn ? <Navigate replace to={PAGES.MAP}/> : <LoginPage/>
                    }/>
                    <Route exact path={PAGES.REGISTRATION} element={
                        isLoggedIn ? <Navigate replace to={PAGES.LOGIN}/> : <RegistrationPage/>
                    }/>
                    <Route exact path="/exit" element={<Navigate replace to={PAGES.LOGIN}/>}/>
                    <Route exact path="/" element={<Navigate replace to={PAGES.LOGIN}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


