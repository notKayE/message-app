import { main_prompt } from "./prompts/main_prompt"
import { CurrentUser, UserBase } from "./types"
import { main_userbase } from "./userbase/userbase"

// Runs the entire message-app

function program() {
    const userbase: UserBase = main_userbase;
    const currentUser: CurrentUser = []

    main_prompt(userbase, currentUser)
}

program()
