import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { AuthStateInterface } from "../types/authState.interface";

export const authFeautureSelector = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
    authFeautureSelector,
    (authState: AuthStateInterface): boolean => authState.isSubmitting
);

export const validationErrorSelector = createSelector(
    authFeautureSelector,
    (authState: AuthStateInterface) => authState.validationErrors
)