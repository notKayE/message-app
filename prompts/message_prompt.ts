import { message_create, message_read_and_dequeue, message_send } from "../messages/messages_functions";
import { currentUser, User, UserBase } from "../types";
import { add_to_userbase, create_user, create_userbase, find_user, is_in_userbase } from "../userfunctions";
import { logged_in_prompt } from "./logged_in_prompt";
import { check_prompt, main_prompt } from "./main_prompt";

const userbase: UserBase = create_userbase()
const currentuser: currentUser = []

const joakim: User = create_user("joakim", "123")
const ivan: User = create_user("ivan", "234")
const elis: User = create_user("elis", "345")

add_to_userbase(elis, userbase)
add_to_userbase(joakim, userbase)
add_to_userbase(ivan, userbase)

export function choose_message_action(userbase: UserBase, currentUser: currentUser): void {
    console.log("Choose action")
    console.log("[S] - send message")
    console.log("[R] - read message")
    console.log("[B] - go back")
    const action = check_prompt("", true)

    if (action === "S") {
        send_message_prompt(userbase, currentUser)
    } else if (action === "R") {
        read_message_prompt(userbase, currentUser)
    } else if (action === "B") {
        logged_in_prompt(userbase, currentUser)
    } else {
        console.log("Unknown command")
        choose_message_action(userbase, currentUser)
    }
}

function send_message_prompt(userbase: UserBase, currentUser: currentUser): void {
    let recipent = check_prompt("Recipent: ", false)

    while(!is_in_userbase(recipent, userbase)) {
        console.log("\nUnknown user, try again")
        recipent = check_prompt("Recipent: ", false)
    }

    const body = check_prompt("Message: ", true)
    const message = message_create(currentUser[0], body)
    
    message_send(find_user(recipent, userbase)!, currentUser[0], message)
    choose_message_action(userbase, currentUser)
}

function read_message_prompt(userbase: UserBase, currentUser: currentUser): void {
    message_read_and_dequeue(currentUser[0])
    choose_message_action(userbase, currentUser)
}
