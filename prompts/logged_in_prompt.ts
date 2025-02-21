import { currentUser, UserBase } from "../types";
import { check_prompt, login_prompt } from "./login_prompt";


export function logged_in_prompt(userbase: UserBase, currentUser: currentUser): void {
    console.log("choose action")
    console.log("[X] - sign out")
    const action = check_prompt("")
    if (action === "X") {
        login_prompt(userbase, currentUser)
    } else {
        console.log("unknown command")
        logged_in_prompt(userbase, currentUser)
    }
}