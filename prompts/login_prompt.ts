import { currentUser, UserBase } from "../types"
import { find_user, is_in_userbase } from "../userfunctions"
import * as readlineSync from 'readline-sync'; // importerad modul, kanske kräver npm i readline-sync i terminalen, läser användarinput
import { logged_in_prompt } from "./logged_in_prompt";

export function login_prompt(userbase: UserBase, currentUser: currentUser): void {
    console.log('--------------------------------')
    console.log('Welcome to the messaging app! \n')
    console.log(`Choose a user: joakim, ivan or elis`)
    console.log("*All passwords are 123*\n")
    console.log("Login menu")
    const username = check_prompt("Username: ")
    if (!is_in_userbase(username, userbase)) {
        console.log("User not registered") 
        login_prompt(userbase, currentUser)
    } else {
        check_password(username, userbase, currentUser)
        logged_in_prompt(userbase, currentUser)
    }
}

export function check_prompt(prompt_string: string): string {
    let prompt_type: string | null = readlineSync.question(prompt_string)
    while (typeof prompt_type !== "string") {
        console.log("Please enter a valid string")
        prompt_type = prompt(prompt_string)
    }
    console.log("")
    return prompt_type
}

function check_password(username: string, userbase: UserBase, currentUser: currentUser): void {
    const password = check_prompt("Password: ")
        if (password === find_user(username, userbase)?.password) {
            console.log("Successful login, welcome " + username + "\n")
            currentUser[0] = find_user(username, userbase)!
        } else {
            console.log("Wrong password, try again \n")
            check_password(username, userbase, currentUser)
        }
}