import { main_prompt } from "./prompts/main_prompt"
import { CurrentUser, UserBase } from "./types"
import { main_userbase } from "./userbase/userbase"
import { add_to_userbase, create_user, create_userbase } from "./userfunctions"

// Runs the entire message-app

function program() {
    const userbase: UserBase = main_userbase;
    const currentUser: CurrentUser = []

    main_prompt(userbase, currentUser)
}

program()
