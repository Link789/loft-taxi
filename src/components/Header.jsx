import React, {Component} from 'react';

import MapPage from "./pages/Map";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";

import LogoImg from "../img/logo.svg";
import '../styles/Header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {page: this.props.page}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({page: event.target.attributes[1].value})
    }

    getPageLayout = (page, withoutHeader) => {
        if (withoutHeader)
            return (
                <div>
                    {page}
                </div>
            )
        return (
            <div>
                {this.header()}
                <div className='backgroundColorPage'>
                    {page}
                </div>
            </div>
        )
    }

    header = () => {
        return (
            <div id='header'>
                <img src={LogoImg} alt="Логотип"/>
                <div className='navMenu'>
                    <div
                        className={this.state.page === 'map' ? 'itemMenu active' : 'itemMenu'}
                        name='map'
                        onClick={this.handleClick}>
                        Карта
                    </div>
                    <div
                        className={this.state.page === 'profile' ? 'itemMenu active' : 'itemMenu'}
                        name='profile'
                        onClick={this.handleClick}>
                        Профиль
                    </div>
                    <div className='itemMenu'
                         name='exit'
                         onClick={this.handleClick}>
                        Выйти
                    </div>
                </div>
            </div>
        )
    }

    render() {
        if (!this.state.page) {
            return null;
        }
        switch (this.state.page) {
            case 'profile':
                return this.getPageLayout(<ProfilePage/>)
            case 'map':
                return this.getPageLayout(<MapPage/>)
            case 'exit':
                return this.getPageLayout(<LoginPage/>, true)
            default:
                return this.getPageLayout(<div>null</div>)
        }
    }
}

export default Header;