"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logged_in_prompt = logged_in_prompt;
var friends_prompt_1 = require("./friends_prompt");
var login_prompt_1 = require("./login_prompt");
var message_prompt_1 = require("./message_prompt");
function logged_in_prompt(userbase, currentUser) {
    console.log("choose action");
    console.log("[X] - sign out");
    console.log("[M] - messages");
    console.log("[F] - friends");
    var action = (0, login_prompt_1.check_prompt)("");
    if (action === "X") {
        currentUser.pop();
        (0, login_prompt_1.login_prompt)(userbase, currentUser);
    }
    else if (action === "M") {
        (0, message_prompt_1.choose_message_action)(userbase, currentUser);
    }
    else if (action === "F") {
        (0, friends_prompt_1.friends_prompts)(userbase, currentUser);
    }
    else {
        console.log("unknown command");
        logged_in_prompt(userbase, currentUser);
    }
}
