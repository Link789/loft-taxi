import {configureStore} from "@reduxjs/toolkit"
import {rootReducer} from "./reducers/rootReducer"
import {authenticate, registration, saveCard} from "./middlewaries"

/*const authMiddleware = applyMiddleware(authenticate)
const regMiddleware = applyMiddleware(registration)
const saveDataCardMiddleware = applyMiddleware(saveCard)*/
export const store = configureStore({
    reducer:rootReducer,
    middleware:[authenticate, registration, saveCard],
    devTools:[window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]
})

