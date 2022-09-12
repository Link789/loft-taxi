import React from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux"

import {SendAuthData} from "../../../redux/actions"
import {PAGES, serverActionAuth, serverActionSaveDataCard} from "../../../config/Const"
import MapImg from "../../../img/map_loginPage.svg"
import LogoImg from "../../../img/logo_loginPage.png"
import './Login.css'


function LoginPage(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        props.SendAuthData({email, password})
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        switch (name) {
            case 'userName':
                return setEmail(value)
            case 'password':
                return setPassword(value)
            default:
                return
        }
    }

    return (
        <div id='mainContainer_withoutHeader'>
            <div id='leftContainer'>
                <img src={LogoImg} alt="Логотип"/>
            </div>
            <div id='rightContainer'
                 style={{backgroundImage: `url(${MapImg})`}}>
                <form id='loginForm' >
                    <div className='formHeader'>Войти</div>
                    <div className="container">
                        <label htmlFor="userName"><b>Имя пользователя *</b></label>
                        <input type="text"
                               //placeholder="Имя пользователя *"
                               name="userName"
                               required
                               onChange={handleChange}
                               value={email}
                        />
                        <label htmlFor="password"><b>Пароль *</b></label>
                        <input type="password"
                               //placeholder="Пароль *"
                               name="password"
                               required
                               onChange={handleChange}
                               value={password}
                        />
                        <button id='login' type="submit" onClick={handleSubmit}>Войти</button>
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

const mapDispatchToProps = {
    SendAuthData
}
const mapStateToProps = state => {
    return {isLoggedIn: state.authContext.isLoggedIn}
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
