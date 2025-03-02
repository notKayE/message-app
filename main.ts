import { login_prompt } from "./prompts/login_prompt"
import { currentUser, User, UserBase } from "./types"
import { main_userbase } from "./userbase/userbase"
import { add_to_userbase, create_user, create_userbase } from "./userfunctions"


function program() {
    const userbase: UserBase = main_userbase;
    const currentUser: currentUser = []

    login_prompt(userbase, currentUser)
}

program()
