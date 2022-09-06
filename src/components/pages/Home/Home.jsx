import React, {Component} from 'react';
import Header from "../../Header/Header";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <div id="mainContainer" style={{backgroundColor:"white", color:"black"}}>
                    <h1>HomePage</h1>
                </div>
            </div>
        )
    }
}

export default HomePage;