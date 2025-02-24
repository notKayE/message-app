import { message_create, message_send } from "../messages/messages_functions";
import { currentUser, User, UserBase } from "../types";
import { add_to_userbase, create_user, create_userbase, find_user, is_in_userbase } from "../userfunctions";
import { logged_in_prompt } from "./logged_in_prompt";
import { check_prompt, login_prompt } from "./login_prompt";

const userbase: UserBase = create_userbase()
const currentuser: currentUser = []

const joakim: User = create_user("joakim", "123")
const ivan: User = create_user("ivan", "234")
const elis: User = create_user("elis", "345")

add_to_userbase(elis, userbase)
add_to_userbase(joakim, userbase)
add_to_userbase(ivan, userbase)


export function send_message_prompt(userbase: UserBase, currentUser: currentUser): void {
    let recipent = check_prompt("Recipent: ")

    while(!is_in_userbase(recipent, userbase)) {
        console.log("Unknown user, try again")
        recipent = check_prompt("Recipent: ")
    }

    const body = check_prompt("Message: ")
    const message = message_create(currentUser[0], body)
    
    message_send(find_user(recipent, userbase)!, message)
    logged_in_prompt(userbase, currentUser)
}

export function read_message_prompt(currentUser: currentUser): void {
    const length = currentuser[0].message_queue[1] - currentuser[0].message_queue[0]
    console.log(`You have ${length} messages`)
}
