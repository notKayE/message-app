export type User = {
    name: string
    password: string
    messages: Array<string>
    friends: Array<string>
}

export type UserBase = Array<User>

export type currentUser = Array<User>

