import React, {Component} from 'react';
import '../../styles/Login.css';
import MapImg from "../../img/map_loginPage.svg";
import LogoImg from "../../img/logo_loginPage.png";
import Header from "../Header";
import RegistrationPage from "./Registration";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            isRegistration: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({isLogin: true})
    }

    handleClick(event) {
        this.setState({isRegistration: true})
    }

    render() {
        if (this.state.isLogin)
            return (
                <Header page="map"/>
            )
        else if (this.state.isRegistration)
            return <RegistrationPage/>
        else
            return (
                <div id='mainContainer'>
                    <div id='leftContainer'>
                        <img src={LogoImg} alt="Логотип"/>
                    </div>
                    <div id='rightContainer'
                         style={{backgroundImage: `url(${MapImg})`}}>
                        <form id='loginForm'
                              onSubmit={this.handleSubmit}>
                            <div className='formHeader'>Войти</div>

                            <div className="container">
                                <label htmlFor="userName"><b>Имя пользователя *</b></label>
                                <input type="text"
                                       placeholder="Имя пользователя *"
                                       name="userName"
                                       required/>
                                <label htmlFor="password"><b>Пароль *</b></label>
                                <input type="password"
                                       placeholder="Пароль *"
                                       name="password"
                                       required/>
                                <button id='login' type="submit">Войти</button>
                            </div>
                            <div className="psw" onClick={this.handleClick}>
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

export default LoginPage;