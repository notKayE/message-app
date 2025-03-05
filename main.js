"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_prompt_1 = require("./prompts/main_prompt");
var userbase_1 = require("./userbase/userbase");
// Runs the entire message-app
function program() {
    var userbase = userbase_1.main_userbase;
    var currentUser = [];
    (0, main_prompt_1.main_prompt)(userbase, currentUser);
}
program();
