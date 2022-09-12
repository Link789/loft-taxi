import React from 'react';
import {connect} from "react-redux";
import {Link, useLocation} from "react-router-dom";

import MapImg from "../../../img/map_loginPage.svg"
import LogoImg from "../../../img/logo_loginPage.png"
import '../Login/Login.css'
import './Registration.css'
import {PAGES} from "../../../config/Const";
import {SendRegData} from "../../../redux/actions";

function RegistrationPage(props) {
    const [regData, setRegData] = React.useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        props.SendRegData(regData);
    }

    const handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        switch (inputName) {
            case 'name':
                return setRegData({...regData, name: inputValue})
            case 'password':
                return setRegData({...regData, password: inputValue})
            case 'email':
                return setRegData({...regData, email: inputValue})
            case 'surname':
                return setRegData({...regData, surname: inputValue})
            default:
                return
        }
    }

    return (
        <div id='mainContainer_withoutHeader'>
            <div id='leftContainer'>
                <img src={LogoImg} alt="Логотип"/>
            </div>
            <div
                id='rightContainer'
                style={{backgroundImage: `url(${MapImg})`}}
            >
                <form id='loginForm' onSubmit={handleSubmit}>
                    <div className='formHeader'>Регистрация</div>

                    <div className="container">
                        <label htmlFor="email"><b>Адрес электронной почты *</b></label>
                        <input
                            type="text"
                            //placeholder="Адрес электронной почты *"
                            name="email"
                            required
                            onChange={handleChange}
                        />
                        <div className='personalData'>
                            <div>
                                <label htmlFor="name"><b>Имя *</b></label>
                                <input
                                    type="text"
                                    //placeholder="Имя *"
                                    name="name"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='lastName'>
                                <label htmlFor="surname"><b>Фамилия *</b></label>
                                <input
                                    type="text"
                                    //placeholder="Фамилия *"
                                    name="surname"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <label htmlFor="password"><b>Пароль *</b></label>
                        <input
                            type="password"
                            //placeholder="Пароль *"
                            name="password"
                            required
                            onChange={handleChange}
                        />
                        <button id='login' type="submit">Зарегистрироваться</button>
                    </div>
                    <div className="psw">
                        <span>Уже зарегистрирован?
                            <Link to={PAGES.LOGIN}>Войти</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    SendRegData
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.authContext.isLoggedIn
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)