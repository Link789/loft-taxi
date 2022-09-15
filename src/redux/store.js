import {applyMiddleware, compose, createStore} from 'redux'
import {rootReducer} from "./reducers/rootReducer"
import {authenticate, registration, saveCard} from "./middlewaries"

export default function createAppStore() {
    const authMiddleware = applyMiddleware(authenticate)
    const regMiddleware = applyMiddleware(registration)
    const saveDataCardMiddleware = applyMiddleware(saveCard)

    const store = createStore(
        rootReducer,
        compose(
            authMiddleware,
            regMiddleware,
            saveDataCardMiddleware,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ),
    )
    return store
}
