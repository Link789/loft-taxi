import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {Context} from "../../../Context.js";
import {PAGES} from "../../../config/Const";
import RegistrationPage from "../Registration/Registration.jsx";
import MapPage from "../Map/Map";
import MapImg from "../../../img/map_loginPage.svg";
import LogoImg from "../../../img/logo_loginPage.png";
import './Login.css';
import {LogIn} from "../../../redux/actions";


function LoginPage(props) {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const {logIn, logOut, isLoggedIn} = useContext(Context)

    const handleSubmit = (event) => {
        event.preventDefault()
        //logIn(login, password)
        if (login === "login" && password === "password") {
            props.LogIn();
        }
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        switch (name) {
            case 'userName':
                return setLogin(value)
            case 'password':
                return setPassword(value)
        }

    }


    switch (true) {
        case props.isLoggedIn:
            return <MapPage/>
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
                                <Link to={isLoggedIn ? PAGES.MAP : PAGES.LOGIN}>
                                    <button id='login' type="button" onClick={handleSubmit}>Войти</button>
                                </Link>
                            </div>
                            <div className="psw">
                                <span>
                                    Новый пользователь?  <Link to={PAGES.REGISTRATION}>Зарегистрируйтесь</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            )
    }
}

const mapDispatchToProps = {
    LogIn
}
const mapStateToProps = state => {
    console.log(state)
    return {isLoggedIn:state.authContext.isLoggedIn}
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
