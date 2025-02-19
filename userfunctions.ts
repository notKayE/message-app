import { User, UserBase } from "./types";

export function create_user(name: string, password: string): User {
    return { name, password, messages: [], friends: [] }
}

export function create_userbase(): UserBase {
    return []
}

export function is_in_userbase(username: string, userbase: UserBase): boolean {
    for (let i = 0; i < userbase.length; i++) {
        if (username === userbase[i].name) {
            return true
        } else {}
    }

    return false
}

export function add_to_userbase(user: User, userbase: UserBase): void {
    if(!is_in_userbase(user.name, userbase)) {
        userbase.push(user)
    } else {
        console.log("Username already in use")
    }
}