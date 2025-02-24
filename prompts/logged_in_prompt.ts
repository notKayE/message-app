import { currentUser, UserBase } from "../types";
import { friends_prompts } from "./friends_prompt";
import { check_prompt, login_prompt } from "./login_prompt";
import { choose_message_action } from "./message_prompt";


export function logged_in_prompt(userbase: UserBase, currentUser: currentUser): void {
    console.log("choose action")
    console.log("[X] - sign out")
    console.log("[M] - messages")
    console.log("[F] - friends")
    const action = check_prompt("")
    if (action === "X") {
        currentUser.pop()
        login_prompt(userbase, currentUser)
    } else if (action === "M") {
        choose_message_action(userbase, currentUser)
    } else if (action === "F") {
        friends_prompts(userbase, currentUser)
    } else {
        console.log("unknown command")
        logged_in_prompt(userbase, currentUser)
    }
}