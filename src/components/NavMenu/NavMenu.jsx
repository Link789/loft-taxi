import React, {useCallback} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"

import {PAGES} from "../../config/consts"
import './NavMenu.css'
import {logOut} from "../../redux/actions"
import {selectIsLoggedIn} from "../../redux/selectors";

export default function NavMenu() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const dispatch = useDispatch()
    const {pathname} = useLocation()

    const onLogOut = useCallback(() => dispatch(logOut()), [dispatch])
    const getClass = useCallback((page) => pathname === page ? 'itemMenu active' : 'itemMenu', [pathname])
    const privateLinks = useCallback((isLoggedIn) => {
        return isLoggedIn &&
            <div onClick={onLogOut}>
                <Link to="/exit" className='itemMenu'>Выход</Link>
            </div>
    }, [isLoggedIn])

    return (
        <div className='navMenu'>
            <Link
                to={PAGES.MAP}
                className={getClass(PAGES.MAP)}>
                Карта
            </Link>
            <Link
                to={PAGES.PROFILE}
                className={getClass(PAGES.PROFILE)}>
                Профиль
            </Link>
            {
                privateLinks(isLoggedIn)
            }
        </div>
    )
}
