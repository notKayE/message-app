"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_prompt_1 = require("./prompts/login_prompt");
var userfunctions_1 = require("./userfunctions");
function program() {
    var userbase = (0, userfunctions_1.create_userbase)();
    var currentUser = [];
    var joakim = (0, userfunctions_1.create_user)("joakim", "123");
    var ivan = (0, userfunctions_1.create_user)("ivan", "234");
    var elis = (0, userfunctions_1.create_user)("elis", "345");
    (0, userfunctions_1.add_to_userbase)(elis, userbase);
    (0, userfunctions_1.add_to_userbase)(joakim, userbase);
    (0, userfunctions_1.add_to_userbase)(ivan, userbase);
    (0, login_prompt_1.login_prompt)(userbase, currentUser);
}
program();
