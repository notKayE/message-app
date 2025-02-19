export type User = {
    name: string
    password: string
    messages: Array<string>
    friends: Array<User>
}

export type UserBase = Array<User>
