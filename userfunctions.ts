import { empty } from "./lib/queue_array";
import { message_create_queue } from "./messages/messages_functions";
import { User, UserBase } from "./types";

export function create_user(name: string, password: string): User {
    return {
        name,
        password,
        message_queue: message_create_queue(),
        friends: [],
        friend_request: empty(),
        message_privacy: false
    }
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

export function find_user(username: string, userbase: UserBase): User | void {
    for (let i = 0; i < userbase.length; i++) {
        if (username === userbase[i].name) {
            return userbase[i]
        } else {}
    }

    console.log("Did not find user\n")
}

export function add_to_userbase(user: User, userbase: UserBase): void {
    if(!is_in_userbase(user.name, userbase)) {
        userbase.push(user)
    } else {
        console.log("Username already in use\n")
    }
}