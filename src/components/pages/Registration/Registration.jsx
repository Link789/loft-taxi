import React, {useCallback} from 'react'
import {useDispatch} from "react-redux"
import {Link} from "react-router-dom"

import MapImg from "../../../img/map_loginPage.svg"
import LogoImg from "../../../img/logo_loginPage.png"
import '../Login/Login.css'
import './Registration.css'
import {PAGES} from "../../../config/consts"
import {sendRegData} from "../../../redux/actions"


export default function RegistrationPage() {
    const dispatch = useDispatch()
    const [regData, setRegData] = React.useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        dispatch(sendRegData(regData))
    }, [regData])

    const handleChange = useCallback((event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        inputName == 'name' && setRegData({...regData, name: inputValue})
        inputName == 'password' && setRegData({...regData, password: inputValue})
        inputName == 'surname' && setRegData({...regData, surname: inputValue})
        inputName == 'email' && setRegData({...regData, email: inputValue})
    }, [regData])

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
                            name="email"
                            required
                            onChange={handleChange}
                        />
                        <div className='personalData'>
                            <div>
                                <label htmlFor="name"><b>Имя *</b></label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='lastName'>
                                <label htmlFor="surname"><b>Фамилия *</b></label>
                                <input
                                    type="text"
                                    name="surname"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <label htmlFor="password"><b>Пароль *</b></label>
                        <input
                            type="password"
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