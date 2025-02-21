import { login_prompt } from "./prompts/login_prompt"
import { currentUser, User, UserBase } from "./types"
import { add_to_userbase, create_user, create_userbase } from "./userfunctions"

function program() {
    const userbase: UserBase = create_userbase()
    const currentUser: currentUser = []

    const joakim: User = create_user("joakim", "123")
    const ivan: User = create_user("ivan", "234")
    const elis: User = create_user("elis", "345")

    add_to_userbase(elis, userbase)
    add_to_userbase(joakim, userbase)
    add_to_userbase(ivan, userbase)

    login_prompt(userbase, currentUser)
}

program()