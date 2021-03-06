import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

export interface AuthStateInterface {
    isLoading: boolean
    isSubmitting: boolean
    isLoggedIn: boolean | null
    currentUser: CurrentUserInterface | null
    validationErrors: BackendErrorsInterface | null
}