type Location = {
    id: number
    country: string
    postalCode: number
    city: string
    lagitude: number
    longitude: number
}

export type UserFetchResponse = {
    id: number
    username: string
    firstName: string
    lastName: string
    email: string
    isValid: boolean
    isAdmin: boolean
    lastConnectionDate: string
    creationDate: string
    speciality: {
        specialityName: string
    }
    locations: Location[]
}