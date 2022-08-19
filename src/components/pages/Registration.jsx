import React, {Component} from 'react';
import MapImg from "../../img/map_loginPage.svg";
import LogoImg from "../../img/logo_loginPage.png";
import Header from "../Header";
import LoginPage from "./Login";

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            isLogin: false,
            isRegistration: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({isRegistration: true})
        console.log(this.state.lastName, this.state.password, this.state.isRegistration);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }
    handleClick(event) {
        this.setState({isLogin: true})
    }

    render() {
        if (this.state.isRegistration)
            return <Header/>
        else if (this.state.isLogin)
            return <LoginPage/>
        else
            return (
                <div id='mainContainer'>
                    <div id='leftContainer'>
                        <img src={LogoImg} alt="Логотип"/>
                    </div>
                    <div id='rightContainer' style={{
                        backgroundImage: `url(${MapImg})`
                    }}>
                        <form id='loginForm' onSubmit={this.handleSubmit}>
                            <div className='formHeader'>Регистрация</div>

                            <div className="container">
                                <label htmlFor="email"><b>Адрес электронной почты *</b></label>
                                <input type="text" placeholder="Адрес электронной почты *" name="email"
                                       onChange={this.handleChange} required/>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <div>
                                        <label htmlFor="firstName"><b>Имя *</b></label>
                                        <input type="text" placeholder="Имя *" name="firstName"
                                               onChange={this.handleChange} required/>
                                    </div>
                                    <div style={{marginLeft:'5px'}}>
                                        <label htmlFor="lastName"><b>Фамилия *</b></label>
                                        <input type="text" placeholder="Фамилия *" name="lastName"
                                               onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <label htmlFor="password"><b>Пароль *</b></label>
                                <input type="password" placeholder="Пароль *" name="password"
                                       onChange={this.handleChange}
                                       required/>
                                <button id='login' type="submit">Зарегистрироваться</button>
                            </div>
                            <div className="psw" onClick={this.handleClick}>
                             <span>Уже зарегистрирован?  <a href="#">Войти</a>
                            </span>
                            </div>
                        </form>
                    </div>
                </div>
            )
    }
}

export default RegistrationPage;