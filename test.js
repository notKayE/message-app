"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friends_functions_1 = require("./friends_functions");
var userfunctions_1 = require("./userfunctions");
var joakim = (0, userfunctions_1.create_user)("joakim", "123");
var ivan = (0, userfunctions_1.create_user)("ivan", "234");
var elis = (0, userfunctions_1.create_user)("elis", "345");
console.log(joakim);
var userbase = (0, userfunctions_1.create_userbase)();
(0, userfunctions_1.add_to_userbase)(elis, userbase);
(0, userfunctions_1.add_to_userbase)(joakim, userbase);
(0, userfunctions_1.add_to_userbase)(ivan, userbase);
console.log(userfunctions_1.create_userbase);
console.log(userbase);
console.log((0, userfunctions_1.is_in_userbase)("ivan", userbase));
(0, friends_functions_1.add_friend)("elis", "joakim", userbase);
(0, friends_functions_1.add_friend)("elis", "ivan", userbase);
console.log(userbase);
(0, friends_functions_1.remove_friend)("elis", "joakim", userbase);
console.log(userbase);
