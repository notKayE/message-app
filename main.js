"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_prompt_1 = require("./prompts/login_prompt");
var userbase_1 = require("./userbase/userbase");
function program() {
    var userbase = userbase_1.main_userbase;
    var currentUser = [];
    (0, login_prompt_1.login_prompt)(userbase, currentUser);
}
console.log(userbase_1.main_userbase[0]);
program();
