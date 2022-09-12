import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {connect} from "react-redux";

import {PAGES} from "../../config/Const"
import './NavMenu.css'
import {LogOut} from "../../redux/actions";


function NavMenu(props) {
    const location = useLocation()
    return (
        <div className='navMenu'>
            <Link
                to={PAGES.MAP}
                className={location.pathname === PAGES.MAP ? 'itemMenu active' : 'itemMenu'}>
                Карта
            </Link>
            <Link
                to={PAGES.PROFILE}
                className={location.pathname === PAGES.PROFILE ? 'itemMenu active' : 'itemMenu'}>
                Профиль
            </Link>
            {
                !props.isLoggedIn &&
                <>
                    <Link to={PAGES.LOGIN} className='itemMenu'>Вход</Link>
                    <Link to={PAGES.REGISTRATION} className='itemMenu'>Регистрация</Link>
                </>
            }
            {
                props.isLoggedIn &&
                <div onClick={props.LogOut}>
                    <Link to="/exit" className='itemMenu'>Выход</Link>
                </div>
            }
        </div>
    )
}

const mapDispatchToProps = {
    LogOut
}
const mapStateToProps = state => {
    return {isLoggedIn: state.authContext.isLoggedIn}
}
export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
