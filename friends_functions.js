"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add_friend = add_friend;
exports.remove_friend = remove_friend;
var userfunctions_1 = require("./userfunctions");
function add_friend(username, friendname, userbase) {
    if ((0, userfunctions_1.is_in_userbase)(friendname, userbase)) {
        for (var i = 0; i < userbase.length; i++) {
            if (username === userbase[i].name) {
                for (var n = 0; n < userbase.length; n++) {
                    if (friendname === userbase[n].name) {
                        userbase[i].friends.push(friendname);
                    }
                    else { }
                }
            }
        }
    }
    else {
        console.log("user does not exist");
    }
}
function remove_friend(username, friendname, userbase) {
    if ((0, userfunctions_1.is_in_userbase)(friendname, userbase)) {
        for (var i = 0; i < userbase.length; i++) {
            if (username === userbase[i].name) {
                for (var n = 0; n < userbase.length; n++) {
                    if (friendname === userbase[n].name) {
                        if (userbase[i].friends.indexOf(friendname) !== -1) {
                            var remove = userbase[i].friends.indexOf(friendname);
                            userbase[i].friends.splice(remove, 1);
                        }
                    }
                    else { }
                }
            }
        }
    }
    else {
        console.log("user does not exist");
    }
}
