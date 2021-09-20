import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "./actions/getCurrentUser.action";
import { loginAction, loginFailrueAction, loginSuccessAction } from "./actions/login.action";
import { registerAction, registerFailureAction, registerSuccessAction } from "./actions/register.action";

const initialState: AuthStateInterface = {
    isLoggedIn: null,
    isLoading: false,
    currentUser: null,
    isSubmitting: false,
    validationErrors: null
}

const authReducer = createReducer(
    initialState,
    on(registerAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),

    on(registerSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isLoggedIn: true,
        isSubmitting: false,
        currentUser: action.currentUser
    })),

    on(registerFailureAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    })),

    on(loginAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),

    on(loginSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isLoggedIn: true,
        isSubmitting: false,
        currentUser: action.currentUser
    })),

    on(loginFailrueAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    })),

    on(getCurrentUserAction, (state): AuthStateInterface => ({
        ...state,
        isLoading: true
    })),

    on(getCurrentUserSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.currentUser
    })),

    on(getCurrentUserFailureAction, (state): AuthStateInterface => ({
        ...state,
        isLoading: false,
        isLoggedIn: false,
        currentUser: null
    }))
)

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}