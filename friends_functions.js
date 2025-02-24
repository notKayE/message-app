"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add_friend = add_friend;
exports.remove_friend = remove_friend;
var userfunctions_1 = require("./userfunctions");
function add_friend(username, friendname, userbase) {
    if (username !== friendname) {
        if ((0, userfunctions_1.is_in_userbase)(friendname, userbase)) {
            for (var i = 0; i < userbase.length; i++) {
                if (username === userbase[i].name) {
                    if (userbase[i].friends.indexOf(friendname) !== -1) {
                        console.log("You are already friends");
                    }
                    else {
                        for (var n = 0; n < userbase.length; n++) {
                            if (friendname === userbase[n].name) {
                                userbase[i].friends.push(friendname);
                                userbase[n].friends.push(username);
                            }
                            else { }
                        }
                    }
                }
                else {
                    console.log("user does not exist");
                }
            }
        }
        else {
            console.log("You cannot add yourself");
        }
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
                            var remove1 = userbase[n].friends.indexOf(username);
                            userbase[i].friends.splice(remove, 1);
                            userbase[n].friends.splice(remove1, 1);
                        }
                        else {
                            console.log("You are not friends");
                        }
                    }
                }
            }
        }
    }
    else {
        console.log("user does not exist");
    }
}
