import {createSelector} from "@reduxjs/toolkit"

const selectAuthContext = (store) => store.authContext
export const selectIsLoggedIn = createSelector(selectAuthContext, (authContext) => authContext.isLoggedIn)

export const selectProfileContext = (store) => store.profileContext