import React from 'react';
import {Link} from "react-router-dom";

import {PAGES} from "../../config/Const";
import NavMenu from "../NavMenu/NavMenu";
import LogoImg from "../../img/logo.svg";
import './Header.css';


function Header(){
  return(
    <div id='header'>
        <Link to={PAGES.HOME}>
            <img src={LogoImg} alt="Логотип"/>
        </Link>

        <NavMenu/>
    </div>
  )
}

export default Header;