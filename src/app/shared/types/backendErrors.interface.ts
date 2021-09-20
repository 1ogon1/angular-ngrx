export interface BackendErrorsInterface {
    errors: BackendErrorItemInterface[]
    message: string
}

export interface BackendErrorItemInterface {
    type: string
    messages: string[]
}