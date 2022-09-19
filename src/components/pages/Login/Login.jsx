import React, {useCallback, useState} from 'react'
import {Link} from "react-router-dom"
import {useDispatch} from 'react-redux'

import {sendAuthData} from "../../../redux/actions"
import {PAGES} from "../../../config/consts"
import MapImg from "../../../img/map_loginPage.svg"
import LogoImg from "../../../img/logo_loginPage.png"
import './Login.css'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        dispatch(sendAuthData({email, password}))
    },[email,password])

    const handleChange = useCallback((event) => {
        const name = event.target.name
        const value = event.target.value
        name === 'userName' && setEmail(value)
        name === 'password' && setPassword(value)
    }, [email, password])


    return (
        <div id='mainContainer_withoutHeader'>
            <div id='leftContainer'>
                <img src={LogoImg} alt="Логотип"/>
            </div>
            <div id='rightContainer'
                 style={{backgroundImage: `url(${MapImg})`}}>
                <form id='loginForm' onSubmit={handleSubmit}>
                    <div className='formHeader'>Войти</div>
                    <div className="container">
                        <label htmlFor="userName"><b>Имя пользователя *</b></label>
                        <input type="text"
                               name="userName"
                               required
                               onChange={handleChange}
                               value={email}
                        />
                        <label htmlFor="password"><b>Пароль *</b></label>
                        <input type="password"
                               name="password"
                               required
                               onChange={handleChange}
                               value={password}
                        />
                        <button id='login' type="submit">Войти</button>
                    </div>
                    <div className="psw">
                        <span>
                            Новый пользователь?<Link to={PAGES.REGISTRATION}>Зарегистрируйтесь</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
