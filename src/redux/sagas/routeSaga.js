import {call, put, takeEvery} from 'redux-saga/effects'
import {fetchRoute, fetchRouteFailure, saveCoordinates} from "../actions"
import {fetchGetRoute} from "../../api"
import {SERVER} from "../../config/consts"

export function* getRouteSaga() {
    yield takeEvery(fetchRoute.type, handlerRouteList)
}

function* handlerRouteList({payload}) {
    try {
        const {addressFrom, addressTo} = payload
        const result = yield call(fetchGetRoute, SERVER.ROUTE, addressFrom, addressTo)
        yield put(saveCoordinates(result))
    } catch (error) {
        yield put(fetchRouteFailure({error}))
    }
}
