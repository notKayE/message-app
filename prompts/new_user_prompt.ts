import { CurrentUser, User, UserBase } from "../types";
import { add_to_userbase, create_user } from "../userfunctions";
import { check_prompt, main_prompt } from "./main_prompt";

export function new_user_prompt(userbase: UserBase, currentUser: CurrentUser): void {
    const username: string = check_prompt("Username: ", false)
    const password: string = check_prompt("Password: ", true)

    const user: User = create_user(username, password)
    add_to_userbase(user, userbase)
    
    main_prompt(userbase, currentUser)
}