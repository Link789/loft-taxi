import React, {Component} from 'react';

import LoginPage from "../Login/Login.jsx"

import MapImg from "../../../img/map_loginPage.svg"
import LogoImg from "../../../img/logo_loginPage.png"
import '../Login/Login.css'
import './Registration.css'

class RegistrationPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
            isRegistration: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({isRegistration: true})
    }

    handleClick(event) {
        this.setState({isLogin: true})
    }

    render() {
        switch (true) {
            case this.state.isRegistration:
                return <LoginPage/> //<Header page="map"/>
            case this.state.isLogin:
                return <LoginPage/>
            default:
                return (
                    <div id='mainContainer'>
                        <div id='leftContainer'>
                            <img src={LogoImg} alt="Логотип"/>
                        </div>
                        <div
                            id='rightContainer'
                            style={{backgroundImage: `url(${MapImg})`}}
                        >
                            <form id='loginForm' onSubmit={this.handleSubmit}>
                                <div className='formHeader'>Регистрация</div>

                                <div className="container">
                                    <label htmlFor="email"><b>Адрес электронной почты *</b></label>
                                    <input
                                        type="text"
                                        placeholder="Адрес электронной почты *"
                                        name="email"
                                        required
                                    />
                                    <div className='personalData'>
                                        <div>
                                            <label htmlFor="firstName"><b>Имя *</b></label>
                                            <input
                                                type="text"
                                                placeholder="Имя *"
                                                name="firstName"
                                                required
                                            />
                                        </div>
                                        <div className='lastName'>
                                            <label htmlFor="lastName"><b>Фамилия *</b></label>
                                            <input
                                                type="text"
                                                placeholder="Фамилия *"
                                                name="lastName"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <label htmlFor="password"><b>Пароль *</b></label>
                                    <input
                                        type="password"
                                        placeholder="Пароль *"
                                        name="password"
                                        required
                                    />
                                    <button id='login' type="submit">Зарегистрироваться</button>
                                </div>
                                <div className="psw" onClick={this.handleClick}>
                                    <span>Уже зарегистрирован?  <a href="#">Войти</a></span>
                                </div>
                            </form>
                        </div>
                    </div>
                )
        }
    }
}

export default RegistrationPage