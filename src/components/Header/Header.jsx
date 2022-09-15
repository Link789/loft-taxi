import React from 'react';

import NavMenu from "../NavMenu/NavMenu";
import LogoImg from "../../img/logo.svg";
import './Header.css';

export default function Header(){
  return(
    <div id='header'>
        <img src={LogoImg} alt="Логотип"/>
        <NavMenu/>
    </div>
  )
}