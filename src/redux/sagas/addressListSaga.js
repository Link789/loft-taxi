import {call, put, takeEvery} from 'redux-saga/effects'
import {fetchAddressList, fetchAddressListFailure, saveAddressList} from "../actions"
import {fetchGet} from "../../api"
import {SERVER} from "../../config/consts"

export function* getAddressListSaga() {
    yield takeEvery(fetchAddressList.type, handlerGetAddressList)
}

function* handlerGetAddressList(action) {
    try {
        const result = yield call(fetchGet, SERVER.ADDRESS)
        yield put(saveAddressList(result))
    } catch (error) {
        yield put(fetchAddressListFailure({error}))
    }
}
