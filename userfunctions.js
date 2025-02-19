"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_user = create_user;
exports.create_userbase = create_userbase;
exports.is_in_userbase = is_in_userbase;
exports.add_to_userbase = add_to_userbase;
function create_user(name, password) {
    return { name: name, password: password, messages: [], friends: [] };
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
function add_to_userbase(user, userbase) {
    userbase.push(user);
}
