import React, {Component} from 'react';
import Header from "../../Header/Header";

class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <div id="mainContainer" style={{backgroundColor:"white", color:"black"}}>
                    <h1>Страница Профиля</h1>
                </div>

            </div>
        )
    }
}

export default ProfilePage;