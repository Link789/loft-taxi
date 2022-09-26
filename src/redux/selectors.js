import {createSelector} from "@reduxjs/toolkit"

const selectAuthContext = (store) => store.authContext
const selectOrderContext = (store) => store.orderContext

export const selectIsLoggedIn = createSelector(selectAuthContext, (authContext) => authContext.isLoggedIn)
export const selectToken = createSelector(selectAuthContext, (authContext) => authContext.token)

export const selectProfileContext = (store) => store.profileContext
export const selectCardIsCorrect = createSelector(selectProfileContext, (profileContext) => profileContext.cardIsCorrect)

export const selectAddressList = createSelector(selectOrderContext , (orderContext) => orderContext.addresses)
export const selectCoordinates = createSelector(selectOrderContext , (orderContext) => orderContext.coordinates)