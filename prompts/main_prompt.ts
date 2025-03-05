import { CurrentUser, UserBase } from "../types"
import { find_user, is_in_userbase } from "../userfunctions"
import * as readlineSync from 'readline-sync'; // importerad modul, kanske kräver npm i readline-sync i terminalen, läser användarinput
import { logged_in_prompt } from "./logged_in_prompt";
import { new_user_prompt } from "./new_user_prompt";

export function main_prompt(userbase: UserBase, currentUser: CurrentUser): void {
    console.log('--------------------------------')
    console.log('Welcome to the messaging app! \n')
    
    console.log('Choose action')
    console.log('[R] - Register user')
    console.log('[L] - Login')

    const action: string = check_prompt('', true)
    
    if (action === 'R') {
        new_user_prompt(userbase, currentUser)
    } else if (action === 'L') {
        login_prompt(userbase, currentUser)
    } else {
        console.log("Unknown command")
        main_prompt(userbase, currentUser)
    }

}

function login_prompt(userbase: UserBase, currentUser: CurrentUser): void {
    console.log(`Choose a user: joakim, ivan or elis`)
    console.log("*All passwords are 123*\n")
    
    console.log("Login menu")
    let username: string = check_prompt("Username: ", false)

    while (!is_in_userbase(username, userbase)) {
        console.log("\nUser not registered\n") 
        username = check_prompt("Username: ", false)
    } 

    check_password(username, userbase, currentUser)
    logged_in_prompt(userbase, currentUser)
}

export function check_prompt(prompt_string: string, newline: boolean): string {
    const prompt_type: string = readlineSync.question(prompt_string)
    
    if (newline) {
        console.log("")
    }

    return prompt_type
}

function check_password(username: string, userbase: UserBase, currentUser: CurrentUser): void {
    const password: string = check_prompt("Password: ", true)
        if (password === find_user(username, userbase)?.password) {
            console.log("Successful login, welcome " + username + "\n")
            currentUser.push(find_user(username, userbase)!)
        } else {
            console.log("Wrong password, try again \n")
            check_password(username, userbase, currentUser)
        }
}