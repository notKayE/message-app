import { CurrentUser, UserBase } from "../types";
import { friends_prompts } from "./friends_prompt";
import { check_prompt, main_prompt } from "./main_prompt";
import { choose_message_action } from "./message_prompt";
import { privacy_settings_prompt } from "./privacy_prompt";

// Prompt menu when logged in.
export function logged_in_prompt(userbase: UserBase, currentUser: CurrentUser): void {
    console.log("Choose action")
    console.log("[X] - Sign out")
    console.log("[M] - Messages")
    console.log("[F] - Friends")
    console.log("[P] - Privacy settings")
    const action: string = check_prompt("", true)
    if (action === "X") {
        currentUser.pop()
        main_prompt(userbase, currentUser)
    } else if (action === "M") {
        choose_message_action(userbase, currentUser)
    } else if (action === "F") {
        friends_prompts(userbase, currentUser)
    } else if (action === "P") {
        privacy_settings_prompt(userbase, currentUser)
    } else {
        console.log("Unknown command")
        logged_in_prompt(userbase, currentUser)
    }
}