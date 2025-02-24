"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logged_in_prompt = logged_in_prompt;
var friends_prompts_1 = require("./friends_prompts");
var login_prompt_1 = require("./login_prompt");
function logged_in_prompt(userbase, currentUser) {
    console.log("choose action");
    console.log("[F] - friends");
    console.log("[X] - sign out");
    var action = (0, login_prompt_1.check_prompt)("");
    if (action === "X") {
        (0, login_prompt_1.login_prompt)(userbase, currentUser);
    }
    else if (action === "F") {
        (0, friends_prompts_1.friends_prompts)(userbase, currentUser);
    }
    else {
        console.log("unknown command");
        logged_in_prompt(userbase, currentUser);
    }
}
