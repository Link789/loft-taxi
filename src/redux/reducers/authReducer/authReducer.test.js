import {authReducer} from "./authReducer"
import {logIn, logInFailure, logOut, sendAuthData} from "../../actions"

test("authReducer LogIn", () => {
    let state
    state = authReducer(
        {isLoggedIn: false, email: "test", password: "test", token: "", error: ""},
        logIn({isLoggedIn: true, token: "frhgui675e", error: ""})
    )
    expect(state).toEqual({isLoggedIn: true, email: "test", password: "test", token: "frhgui675e", error: ""})
})

test("authReducer LogOut", () => {
    let state
    state = authReducer(
        {isLoggedIn: true, email: "test", password: "test", token: "frhgui675e", error: "test error"},
        logOut()
    )
    expect(state).toEqual({isLoggedIn: false, email: "", password: "", token: "", error: ""})
})

test("authReducer SendAuthData", () => {
    let state
    state = authReducer(
        {isLoggedIn: false, email: "", password: "", token: "", error: ""},
        sendAuthData({email: "test", password: "test"})
    )
    expect(state).toEqual({
        isLoggedIn: false,
        email: "test",
        password: "test",
        token: "",
        error: ""
    })
})

test("authReducer LogInFailure", () => {
    let state
    state = authReducer(
        {isLoggedIn: false, email: "", password: "", token: "", error: ""},
        logInFailure({error: "error"})
    )
    expect(state).toEqual({
        isLoggedIn: false,
        email: "",
        password: "",
        token: "",
        error: "error"
    })
})
