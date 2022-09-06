import React, {Component} from 'react';

import NavMenu from "../NavMenu/NavMenu";
import LogoImg from "../../img/logo.svg";
import './Header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        /*this.state = {page: this.props.page}
        this.handleClick = this.handleClick.bind(this);*/
    }

    /*static propTypes = {
        page: PropTypes.string
    }*/

    /*handleClick(event) {
        const currentPage = event.target.attributes[1].value
        this.setState({page: currentPage})
    }*/

    /*getPageLayout = (page, withoutHeader) => {
        if (withoutHeader)
            return <div>{page}</div>
        return (
            <div>
                {this.header()}
                <div className='backgroundColorPage'>
                    {page}
                </div>
            </div>
        )
    }*/

    header = () => {
        return (
            <div id='header'>
                <img src={LogoImg} alt="Логотип"/>
                <NavMenu/>
            </div>
        )
    }

    render() {
        return this.header()
        /*if (!this.state.page)
            return null;

        switch (this.state.page) {
            case 'profile':
                return this.getPageLayout(<ProfilePage/>)
            case 'map':
                return this.getPageLayout(<MapPage/>)
            case 'exit':
                return this.getPageLayout(<LoginPage/>, true)
            default:
                return this.getPageLayout(<div>null</div>)
        }*/
    }
}

export default Header;