import { closest_relation } from "../friends/closest_relation";
import { add_friend, friend_request_recieved, remove_friend } from "../friends/friends_functions";
import { suggested_friends } from "../friends/suggested_friends";
import { flatten } from "../lib/list";
import { currentUser, UserBase } from "../types";
import { logged_in_prompt } from "./logged_in_prompt";
import { check_prompt } from "./main_prompt";

// Friends-menu, accessible through the first menu

export function friends_prompts(userbase: UserBase, currentuser: currentUser): void {
    const username = currentuser[0].name
    console.log("Choose action:")
    console.log("[A] - Add Friend")
    console.log("[R] - Remove Friend")
    console.log("[V] - View Friends")
    console.log("[F] - View Friend-requests")
    console.log("[C] - Lookup closest relation")
    console.log("[B] - Back")
    const action = check_prompt("", true)

    // Add friend - action
    // A name is written down - calls the add_friend function

    if (action === "A" || action === "a") {
        if (currentuser[0].friends.length !== 0) {
            console.log("Suggested friends:" + suggested_friends(currentuser[0], userbase))
        } else {}
        const friend_to_add = check_prompt("Friend to add: ", true)
        add_friend(username, friend_to_add, userbase)
        friends_prompts(userbase, currentuser)  
        
    // Remove friend - action
    // A name is written down - calls the remove_friend function

    } else if (action === "R" || action === "r") {
        if (currentuser[0].friends.length !== 0) {
            console.log("Current friends: " + array_to_string(currentuser[0].friends))
            const friend_to_remove = check_prompt("Friend to remove: ", true)
            remove_friend(username, friend_to_remove, userbase)
        } else {
            console.log("You do not have any friends to remove\n")
        }

        friends_prompts(userbase, currentuser)

    // View friends - action
    // Shows the current users list of friends

    } else if (action === "V" || action === "v") {
        if (currentuser[0].friends.length !== 0) {
            console.log("Current friends: " + array_to_string(currentuser[0].friends) + "\n")
        } else {
            console.log("You do not have any friends\n")
        }
        
        friends_prompts(userbase, currentuser)

    // View friend-requests - action
    // Shows the current users active friend-requests

    } else if (action === "F" || action === "f") {
        friend_request_recieved(currentuser[0])
        console.log("")
        friends_prompts(userbase, currentuser)

    // Back - action
    // The user is returned to the first prompt-screen

    } else if (action === "C" || action === "c") {
        const target: string = check_prompt("Target user: ", false)
        console.log(closest_relation(userbase, currentuser[0].name, target) + "\n")
        friends_prompts(userbase, currentuser)

    } else if (action === "B" || action === "b") {
        logged_in_prompt(userbase, currentuser)

    // Called on if the typed action is not one of the available options

    } else {
        console.log("Unknown command")
        friends_prompts(userbase, currentuser)
    }
}

// Helper function to make strings of an array.
function array_to_string(array: Array<string>): string {
    let result: string = ""
    for(let i = 0; i < array.length; i++) {
        result = result + array[i]
        if (i !== array.length - 1) {
            result = result + ", "
        }
    }

    return result
}