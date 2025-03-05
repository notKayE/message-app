"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_user = create_user;
exports.create_userbase = create_userbase;
exports.is_in_userbase = is_in_userbase;
exports.find_user = find_user;
exports.add_to_userbase = add_to_userbase;
var queue_array_1 = require("./lib/queue_array");
var messages_functions_1 = require("./messages/messages_functions");
/**
 * Creates a username from a name and password.
 * @param name
 * @param password
 * @returns a new User.
 */
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
// Creates an empty userbase.
function create_userbase() {
    return [];
}
/**
 * Finds if a user is in a userbase.
 * @param username - Username to check for.
 * @param userbase - Userbase to search in.
 * @returns true if user is in userbase, false if not.
 */
function is_in_userbase(username, userbase) {
    for (var i = 0; i < userbase.length; i++) {
        if (username === userbase[i].name) {
            return true;
        }
        else { }
    }
    return false;
}
/**
 * Finds a user and returns it.
 * @param username - The username to be found.
 * @param userbase - The userbase to search in.
 * @returns the found user.
 */
function find_user(username, userbase) {
    for (var i = 0; i < userbase.length; i++) {
        if (username === userbase[i].name) {
            return userbase[i];
        }
        else { }
    }
    console.log("Did not find user\n");
}
/**
 * Adds a user to the userbase.
 * @param user - The user to be added.
 * @param userbase - The userbase to add to.
 */
function add_to_userbase(user, userbase) {
    if (!is_in_userbase(user.name, userbase)) {
        userbase.push(user);
    }
    else {
        console.log("Username already in use\n");
    }
}
