import React from 'react';
import Header from "../../Header/Header";
import BackgroundImg from "../../../img/LoftTaxi.svg";

function HomePage() {
    return (
        <div>
            <Header/>
            <div id="mainContainer" style={{backgroundImage: `url(${BackgroundImg})`, color: "white"}}>
                <h1>HomePage</h1>
            </div>
        </div>
    )
}

export default HomePage;