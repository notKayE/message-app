"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_user = create_user;
exports.create_userbase = create_userbase;
exports.is_in_userbase = is_in_userbase;
exports.find_user = find_user;
exports.add_to_userbase = add_to_userbase;
var queue_array_1 = require("./lib/queue_array");
var messages_functions_1 = require("./messages/messages_functions");
function create_user(name, password) {
    return {
        name: name,
        password: password,
        message_queue: (0, messages_functions_1.message_create_queue)(),
        friends: [],
        friend_request: (0, queue_array_1.empty)(),
        message_privacy: false
    };
}
function create_userbase() {
    return [];
}
function is_in_userbase(username, userbase) {
    for (var i = 0; i < userbase.length; i++) {
        if (username === userbase[i].name) {
            return true;
        }
        else { }
    }
    return false;
}
function find_user(username, userbase) {
    for (var i = 0; i < userbase.length; i++) {
        if (username === userbase[i].name) {
            return userbase[i];
        }
        else { }
    }
    console.log("Did not find user\n");
}
function add_to_userbase(user, userbase) {
    if (!is_in_userbase(user.name, userbase)) {
        userbase.push(user);
    }
    else {
        console.log("Username already in use\n");
    }
}
