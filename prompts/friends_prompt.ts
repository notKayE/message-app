import { add_friend, friend_request_recieved, remove_friend } from "../friends/friends_functions";
import { head } from "../lib/queue_array";
import { currentUser, UserBase } from "../types";
import { logged_in_prompt } from "./logged_in_prompt";
import { check_prompt } from "./login_prompt";

// Meddelanden om man lägger till/tar bort vänner

export function friends_prompts(userbase: UserBase, currentuser: currentUser): void {
    const username = currentuser[0].name
    console.log("Choose action:")
    console.log("[A] - Add Friend")
    console.log("[R] - Remove Friend")
    console.log("[V] - View Friends")
    console.log("[F] - View Friend-requests")
    console.log("[B] - Back")
    const action = check_prompt("")
    if (action === "A" || action === "a") {
        const friend_to_add = check_prompt("Friend to add: ")
        add_friend(username, friend_to_add, userbase)
        friends_prompts(userbase, currentuser)   
    } else if (action === "R" || action === "r") {
        const friend_to_remove = check_prompt("Friend to remove: ")
        remove_friend(username, friend_to_remove, userbase)
        friends_prompts(userbase, currentuser)
    } else if (action === "V" || action === "v") {
        console.log(currentuser[0].friends)
        friends_prompts(userbase, currentuser)
    } else if (action === "F".toLowerCase()) {
        friend_request_recieved(currentuser[0])
        friends_prompts(userbase, currentuser)
    } 
    else if (action === "B" || action === "b") {
        logged_in_prompt(userbase, currentuser)
    } else {
        console.log("unknown command")
        friends_prompts(userbase, currentuser)
    }
}