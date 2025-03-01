"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.new_user_prompt = new_user_prompt;
var userfunctions_1 = require("../userfunctions");
var main_prompt_1 = require("./main_prompt");
function new_user_prompt(userbase, currentUser) {
    var username = (0, main_prompt_1.check_prompt)("Username: ", false);
    var password = (0, main_prompt_1.check_prompt)("Password: ", true);
    var user = (0, userfunctions_1.create_user)(username, password);
    (0, userfunctions_1.add_to_userbase)(user, userbase);
    (0, main_prompt_1.main_prompt)(userbase, currentUser);
}
