"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.choose_message_action = choose_message_action;
var messages_functions_1 = require("../messages/messages_functions");
var userfunctions_1 = require("../userfunctions");
var logged_in_prompt_1 = require("./logged_in_prompt");
var main_prompt_1 = require("./main_prompt");
var userbase = (0, userfunctions_1.create_userbase)();
var currentuser = [];
var joakim = (0, userfunctions_1.create_user)("joakim", "123");
var ivan = (0, userfunctions_1.create_user)("ivan", "234");
var elis = (0, userfunctions_1.create_user)("elis", "345");
(0, userfunctions_1.add_to_userbase)(elis, userbase);
(0, userfunctions_1.add_to_userbase)(joakim, userbase);
(0, userfunctions_1.add_to_userbase)(ivan, userbase);
function choose_message_action(userbase, currentUser) {
    console.log("Choose action");
    console.log("[S] - send message");
    console.log("[R] - read message");
    console.log("[B] - go back");
    var action = (0, main_prompt_1.check_prompt)("", true);
    if (action === "S") {
        send_message_prompt(userbase, currentUser);
    }
    else if (action === "R") {
        read_message_prompt(userbase, currentUser);
    }
    else if (action === "B") {
        (0, logged_in_prompt_1.logged_in_prompt)(userbase, currentUser);
    }
    else {
        console.log("Unknown command");
        choose_message_action(userbase, currentUser);
    }
}
function send_message_prompt(userbase, currentUser) {
    var recipent = (0, main_prompt_1.check_prompt)("Recipent: ", false);
    while (!(0, userfunctions_1.is_in_userbase)(recipent, userbase)) {
        console.log("\n Unknown user, try again");
        recipent = (0, main_prompt_1.check_prompt)("Recipent: ", false);
    }
    var body = (0, main_prompt_1.check_prompt)("Message: ", true);
    var message = (0, messages_functions_1.message_create)(currentUser[0], body);
    (0, messages_functions_1.message_send)((0, userfunctions_1.find_user)(recipent, userbase), currentUser[0], message);
    choose_message_action(userbase, currentUser);
}
function read_message_prompt(userbase, currentUser) {
    (0, messages_functions_1.message_read_and_dequeue)(currentUser[0]);
    choose_message_action(userbase, currentUser);
}
