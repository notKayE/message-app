"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friends_prompts = friends_prompts;
var friends_functions_1 = require("../friends/friends_functions");
var logged_in_prompt_1 = require("./logged_in_prompt");
var login_prompt_1 = require("./login_prompt");
// Meddelanden om man lägger till/tar bort vänner
function friends_prompts(userbase, currentuser) {
    var username = currentuser[0].name;
    console.log("Choose action:");
    console.log("[A] - Add Friend");
    console.log("[R] - Remove Friend");
    console.log("[V] - View Friends");
    console.log("[B] - Back");
    var action = (0, login_prompt_1.check_prompt)("");
    if (action === "A" || action === "a") {
        var friend_to_add = (0, login_prompt_1.check_prompt)("Friend to add: ");
        (0, friends_functions_1.add_friend)(username, friend_to_add, userbase);
        friends_prompts(userbase, currentuser);
    }
    else if (action === "R" || action === "r") {
        var friend_to_remove = (0, login_prompt_1.check_prompt)("Friend to remove: ");
        (0, friends_functions_1.remove_friend)(username, friend_to_remove, userbase);
        friends_prompts(userbase, currentuser);
    }
    else if (action === "V" || action === "v") {
        console.log(currentuser[0].friends);
        friends_prompts(userbase, currentuser);
    }
    else if (action === "B" || action === "b") {
        (0, logged_in_prompt_1.logged_in_prompt)(userbase, currentuser);
    }
    else {
        console.log("unknown command");
        friends_prompts(userbase, currentuser);
    }
}
