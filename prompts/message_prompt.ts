import { message_create, message_read_and_dequeue, message_send } from "../messages/messages_functions";
import { CurrentUser, Message, User, UserBase } from "../types";
import { find_user, is_in_userbase } from "../userfunctions";
import { logged_in_prompt } from "./logged_in_prompt";
import { check_prompt } from "./main_prompt";

export function choose_message_action(userbase: UserBase, currentUser: CurrentUser): void {
    console.log("Choose action")
    console.log("[S] - Send message")
    console.log("[R] - Read message")
    console.log("[B] - Go back")
    const action: string = check_prompt("", true)

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

function send_message_prompt(userbase: UserBase, currentUser: CurrentUser): void {
    let recipent: string = check_prompt("Recipent: ", false)

    while(!is_in_userbase(recipent, userbase)) {
        console.log("\nUnknown user, try again")
        recipent = check_prompt("Recipent: ", false)
    }

    const body: string = check_prompt("Message: ", true)
    const message: Message = message_create(currentUser[0], body)
    
    message_send(find_user(recipent, userbase)!, currentUser[0], message)
    choose_message_action(userbase, currentUser)
}

function read_message_prompt(userbase: UserBase, currentUser: CurrentUser): void {
    message_read_and_dequeue(currentUser[0])
    choose_message_action(userbase, currentUser)
}
