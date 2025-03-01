"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main_prompt = main_prompt;
exports.check_prompt = check_prompt;
var userfunctions_1 = require("../userfunctions");
var readlineSync = require("readline-sync"); // importerad modul, kanske kräver npm i readline-sync i terminalen, läser användarinput
var logged_in_prompt_1 = require("./logged_in_prompt");
var new_user_prompt_1 = require("./new_user_prompt");
function main_prompt(userbase, currentUser) {
    console.log('--------------------------------');
    console.log('Welcome to the messaging app! \n');
    console.log('Choose action');
    console.log('[R] - Register user');
    console.log('[L] - Login');
    var action = check_prompt('', true);
    if (action === 'R') {
        (0, new_user_prompt_1.new_user_prompt)(userbase, currentUser);
    }
    else if (action === 'L') {
        login_prompt(userbase, currentUser);
    }
    else {
        console.log("unknown command");
        main_prompt(userbase, currentUser);
    }
}
function login_prompt(userbase, currentUser) {
    console.log("Choose a user: joakim, ivan or elis");
    console.log("*All passwords are 123*\n");
    console.log("Login menu");
    var username = check_prompt("Username: ", false);
    while (!(0, userfunctions_1.is_in_userbase)(username, userbase)) {
        console.log("\nUser not registered\n");
        username = check_prompt("Username: ", false);
    }
    check_password(username, userbase, currentUser);
    (0, logged_in_prompt_1.logged_in_prompt)(userbase, currentUser);
}
function check_prompt(prompt_string, newline) {
    var prompt_type = readlineSync.question(prompt_string);
    while (typeof prompt_type !== "string") {
        console.log("Please enter a valid string");
        prompt_type = prompt(prompt_string);
    }
    if (newline) {
        console.log("");
    }
    return prompt_type;
}
function check_password(username, userbase, currentUser) {
    var _a;
    var password = check_prompt("Password: ", true);
    if (password === ((_a = (0, userfunctions_1.find_user)(username, userbase)) === null || _a === void 0 ? void 0 : _a.password)) {
        console.log("Successful login, welcome " + username + "\n");
        currentUser[0] = (0, userfunctions_1.find_user)(username, userbase);
    }
    else {
        console.log("Wrong password, try again \n");
        check_password(username, userbase, currentUser);
    }
}
