import { message_create, message_read_and_dequeue, message_send } from "../messages/messages_functions";
import { currentUser, User, UserBase } from "../types";
import { add_to_userbase, create_user, create_userbase, find_user, is_in_userbase } from "../userfunctions";
import { logged_in_prompt } from "./logged_in_prompt";
import { check_prompt } from "./main_prompt";

// Prompt menu for messages.
export function choose_message_action(userbase: UserBase, currentUser: currentUser): void {
    console.log("Choose action")
    console.log("[S] - Send message")
    console.log("[R] - Read message")
    console.log("[B] - Go back")
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

// Prompt menu to send messages.
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

// Prompt menu to read messages.
function read_message_prompt(userbase: UserBase, currentUser: currentUser): void {
    message_read_and_dequeue(currentUser[0])
    choose_message_action(userbase, currentUser)
}
