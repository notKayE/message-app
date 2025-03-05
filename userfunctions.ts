import { empty } from "./lib/queue_array";
import { message_create_queue } from "./messages/messages_functions";
import { User, UserBase } from "./types";

/**
 * Creates a username from a name and password.
 * @param name 
 * @param password 
 * @returns a new User.
 */
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

// Creates an empty userbase.
export function create_userbase(): UserBase {
    return []
}

/**
 * Finds if a user is in a userbase.
 * @param username - Username to check for.
 * @param userbase - Userbase to search in.
 * @returns true if user is in userbase, false if not.
 */
export function is_in_userbase(username: string, userbase: UserBase): boolean {
    for (let i = 0; i < userbase.length; i++) {
        if (username === userbase[i].name) {
            return true
        } else {}
    }

    return false
}

/**
 * Finds a user and returns it.
 * @param username - The username to be found.
 * @param userbase - The userbase to search in.
 * @returns the found user.
 */
export function find_user(username: string, userbase: UserBase): User | void {
    for (let i = 0; i < userbase.length; i++) {
        if (username === userbase[i].name) {
            return userbase[i]
        } else {}
    }

    console.log("Did not find user\n")
}

/**
 * Adds a user to the userbase.
 * @param user - The user to be added.
 * @param userbase - The userbase to add to.
 */

export function add_to_userbase(user: User, userbase: UserBase): void {
    if(!is_in_userbase(user.name, userbase)) {
        userbase.push(user)
    } else {
        console.log("Username already in use\n")
    }
}