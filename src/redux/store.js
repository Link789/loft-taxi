import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import {rootReducer} from "./reducers/rootReducer"
import {rootSaga} from "./sagas/rootSaga"


const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const createAppStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()],
        middleware
    })
    sagaMiddleware.run(rootSaga)
    return store
}
