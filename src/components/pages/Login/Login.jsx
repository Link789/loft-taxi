import React, {useContext} from 'react';

import {Context} from "../../../Context.js";
import Header from "../../Header/Header.jsx";
import RegistrationPage from "../Registration/Registration.jsx";

import MapImg from "../../../img/map_loginPage.svg";
import LogoImg from "../../../img/logo_loginPage.png";
import './Login.css';

export default function LoginPage(props) {
    const [isRegistration, setIsRegistration] = React.useState(false)
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const {logIn, isLoggedIn} = useContext(Context)

    const handleSubmit = (event) => {
        event.preventDefault()
        logIn(login,  password)
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        if (name==="userName")
            setLogin(value)
        if (name==="password")
            setPassword(value)
    }

    const handleClick = () => {
        setIsRegistration(true)
    }

    switch (true) {
        case isRegistration: return <RegistrationPage/>
        case isLoggedIn: return <Header page="map"/>
        default:
            return (
                <div id='mainContainer'>
                    <div id='leftContainer'>
                        <img src={LogoImg} alt="Логотип"/>
                    </div>
                    <div id='rightContainer'
                         style={{backgroundImage: `url(${MapImg})`}}>
                        <form id='loginForm'
                              onSubmit={handleSubmit}>
                            <div className='formHeader'>Войти</div>

                            <div className="container">
                                <label htmlFor="userName"><b>Имя пользователя *</b></label>
                                <input type="text"
                                       placeholder="Имя пользователя *"
                                       name="userName"
                                       required
                                       onChange={handleChange}
                                />
                                <label htmlFor="password"><b>Пароль *</b></label>
                                <input type="password"
                                       placeholder="Пароль *"
                                       name="password"
                                       required
                                       onChange={handleChange}
                                />
                                <button id='login' type="submit">Войти</button>
                            </div>
                            <div className="psw" onClick={handleClick}>
                                <span>
                                    Новый пользователь?  <a href="#">Зарегистрируйтесь</a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            )
    }
}
