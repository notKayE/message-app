import { currentUser, UserBase } from "../types";
import { logged_in_prompt } from "./logged_in_prompt";
import { check_prompt } from "./main_prompt";

export function change_password_prompt(userbase: UserBase, currentUser: currentUser): void {
    const old_password: string = check_prompt("Enter current password: ", false)

    if (old_password === currentUser[0].password) {
        const new_password: string = check_prompt("Enter new password: ", true)
        currentUser[0].password = new_password
    } else {
        console.log("\nWrong password\n")
    }

    logged_in_prompt(userbase, currentUser)
}