import React, {Component} from 'react';
import LogoImg from "../img/logo.svg";
import MapPage from "./pages/Map";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {page: 'map'}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        //console.log(event.target.attributes[1].value);
        this.setState({page: event.target.attributes[1].value})
    }

    getPage = (page) => {
        return (
            <div>
                {this.header()}
                <div style={{backgroundColor: "white"}}>
                    {page}
                </div>
            </div>
        )
    }

    header = () => {
        return (
            <div id='header'>
                <img src={LogoImg} alt="Логотип"/>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    float: "right",
                    color: "white",
                    justifyContent: "center",
                    marginTop: '20px'
                }}>
                    <div className={this.state.page === 'map' ? 'itemMenu active' : 'itemMenu'} name='map'
                         onClick={this.handleClick}>Карта
                    </div>
                    <div className={this.state.page === 'profile' ? 'itemMenu active' : 'itemMenu'} name='profile'
                         onClick={this.handleClick}>Профиль
                    </div>
                    <div className='itemMenu' name='exit' onClick={this.handleClick}>Выйти</div>
                </div>
            </div>
        )
    }

    render() {
        switch (this.state.page) {
            case 'profile':
                return this.getPage(<ProfilePage/>)
            case 'map':
                return this.getPage(<MapPage/>)
            case 'exit':
                return <LoginPage/>
            default:
                return this.getPage(<div>null</div>)
        }
    }
}

export default Header;