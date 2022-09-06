import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {theme} from "loft-taxi-mui-theme";
import {MuiThemeProvider} from "@material-ui/core/styles";

import App from './App/App';
import './styles/index.css';
import {rootReducers} from "./redux/rootReducers";
import {compose, createStore} from "redux";

const store = createStore(rootReducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
