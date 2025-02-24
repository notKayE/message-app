"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.send_message_prompt = send_message_prompt;
var messages_functions_1 = require("../messages/messages_functions");
var userfunctions_1 = require("../userfunctions");
var login_prompt_1 = require("./login_prompt");
var userbase = (0, userfunctions_1.create_userbase)();
var currentuser = [];
var joakim = (0, userfunctions_1.create_user)("joakim", "123");
var ivan = (0, userfunctions_1.create_user)("ivan", "234");
var elis = (0, userfunctions_1.create_user)("elis", "345");
(0, userfunctions_1.add_to_userbase)(elis, userbase);
(0, userfunctions_1.add_to_userbase)(joakim, userbase);
(0, userfunctions_1.add_to_userbase)(ivan, userbase);
function send_message_prompt(userbase, currentUser) {
    var recipent = (0, login_prompt_1.check_prompt)("Recipent: ");
    while (!(0, userfunctions_1.is_in_userbase)(recipent, userbase)) {
        console.log("Unknown user, try again");
        recipent = (0, login_prompt_1.check_prompt)("Recipent: ");
    }
    var body = (0, login_prompt_1.check_prompt)("Message: ");
    var message = (0, messages_functions_1.message_create)(currentUser[0], body);
    (0, messages_functions_1.message_send)((0, userfunctions_1.find_user)(recipent, userbase), message);
}
send_message_prompt(userbase, [ivan]);
console.log(joakim.message_queue[2]);
