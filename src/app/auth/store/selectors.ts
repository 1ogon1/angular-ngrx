import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AuthKeys } from "src/app/auth/shared/auth.keys";
import { AuthStateInterface } from "../types/authState.interface";
import { AppStateInterface } from "src/app/shared/types/appState.interface";

export const authFeautureSelector = createFeatureSelector<AppStateInterface, AuthStateInterface>(AuthKeys.StoreModule)

export const isSubmittingSelector = createSelector(
    authFeautureSelector,
    (authState: AuthStateInterface): boolean => authState.isSubmitting
)

export const validationErrorSelector = createSelector(
    authFeautureSelector,
    (authState: AuthStateInterface) => authState.validationErrors
)

export const isLoggedInSelector = createSelector(
    authFeautureSelector,
    (authState: AuthStateInterface) => authState.isLoggedIn
)

export const isAnonimousSelector = createSelector(
    authFeautureSelector,
    (authState: AuthStateInterface) => authState.isLoggedIn == false
)

export const currentUserSelector = createSelector(
    authFeautureSelector,
    (authState: AuthStateInterface) => authState.currentUser
)