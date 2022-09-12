import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {connect} from "react-redux"

import HomePage from "../components/pages/Home/Home"
import ProfilePage from "../components/pages/Profile/Profile"
import MapPage from "../components/pages/Map/Map"
import LoginPage from "../components/pages/Login/Login"
import RegistrationPage from "../components/pages/Registration/Registration"
import {PAGES} from "../config/Const"
import './App.css'

function App(props) {
    return (
        <div className="App" data-testid="app-element">
            <BrowserRouter>
                <Routes>
                    <Route exact path={PAGES.PROFILE} element={
                        props.isLoggedIn ?
                            <ProfilePage/>
                            :
                            <Navigate replace to={PAGES.HOME}/>
                    }/>
                    <Route exact path={PAGES.MAP} element={
                        props.isLoggedIn ?
                            <MapPage/>
                            :
                            <Navigate replace to={PAGES.HOME}/>
                    }/>
                    <Route exact path={PAGES.LOGIN} element={
                        props.isLoggedIn ?
                            <Navigate replace to={PAGES.MAP}/>
                            :
                            <LoginPage/>
                    }/>
                    <Route exact path={PAGES.REGISTRATION} element={
                        props.isLoggedIn ?
                            <Navigate replace to={PAGES.LOGIN}/>
                            :
                            <RegistrationPage/>
                    }/>
                    <Route exact path={PAGES.HOME} element={<HomePage/>}/>
                    <Route exact path="/exit" element={<Navigate replace to={PAGES.HOME}/>}/>
                    <Route exact path="/" element={<Navigate replace to={PAGES.HOME}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = state => {
    return {isLoggedIn: state.authContext.isLoggedIn}
}
export default connect(mapStateToProps, null)(App)

