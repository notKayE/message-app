"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logged_in_prompt = logged_in_prompt;
var login_prompt_1 = require("./login_prompt");
function logged_in_prompt(userbase, currentUser) {
    console.log("choose action");
    console.log("[X] - sign out");
    var action = (0, login_prompt_1.check_prompt)("");
    if (action === "X") {
        (0, login_prompt_1.login_prompt)(userbase, currentUser);
    }
    else {
        console.log("unknown command");
        logged_in_prompt(userbase, currentUser);
    }
}
