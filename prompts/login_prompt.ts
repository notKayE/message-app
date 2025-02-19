import { UserBase } from "../types"
import { is_in_userbase } from "../userfunctions"

export function login_prompt(userbase: UserBase): void {
    console.log(" Login ")
    const username = check_prompt("Username: ")
    if (!is_in_userbase(username, userbase)) {
        console.log("User not registered") 
        login_prompt(userbase)
    } else {
        const password = check_prompt("Password: ")
        
    }
}

function check_prompt(prompt_string: string): string {
    let prompt_type = prompt(prompt_string)
    while (typeof prompt_type !== "string") {
        prompt_type = prompt(prompt_string)
    }
    return prompt_type
}