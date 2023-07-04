import { HttpErrorResponse } from "@angular/common/http"

export type AuthResponse = {
    accessToken: string
    isValid: boolean
    isAdmin: boolean
    refreshToken: string
}

export type AuthentifiedUser = {
    accessToken: string
    email: string
    id: number
    isValid: boolean
    isAdmin: boolean
};

export type DecodedToken = {
    sub: number
    iat: number
    exp: number
    email: string
}

export type LoginParams = {
    email: string
    password: string
    onError?: (error: HttpErrorResponse) => void
    onSuccess?: (response: AuthentifiedUser) => void
}