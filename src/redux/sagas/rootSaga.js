import { all, fork } from 'redux-saga/effects'
import {authorizationSaga} from "./authorizationSaga"
import {registrationSaga} from "./registrationSaga"
import {getDataCardSaga, sendDataCardSaga} from "./paymentSaga"
import {getAddressListSaga} from "./addressListSaga";
import {getRouteSaga} from "./routeSaga";

export function* rootSaga() {
    yield all([
        fork(authorizationSaga),
        fork(registrationSaga),
        fork(getDataCardSaga),
        fork(sendDataCardSaga),
        fork(getAddressListSaga),
        fork(getRouteSaga)
    ])
}