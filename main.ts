import { main_prompt } from "./prompts/main_prompt"
import { currentUser, User, UserBase } from "./types"
import { main_userbase } from "./userbase/userbase"
import { add_to_userbase, create_user, create_userbase } from "./userfunctions"


function program() {
    const userbase: UserBase = main_userbase;
    const currentUser: currentUser = []

    main_prompt(userbase, currentUser)
}

program()
