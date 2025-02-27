"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friend_request_send = friend_request_send;
exports.friend_request_recieved = friend_request_recieved;
exports.add_friend = add_friend;
exports.remove_friend = remove_friend;
var userfunctions_1 = require("../userfunctions");
var queue_array_1 = require("../lib/queue_array");
var login_prompt_1 = require("../prompts/login_prompt");
var friends_prompt_1 = require("../prompts/friends_prompt");
var request_enqueue = function (user, queue) { return (0, queue_array_1.enqueue)(user, queue); };
var request_dequeue = function (queue) { return (0, queue_array_1.dequeue)(queue); };
function friend_request_send(recipient, sender) {
    request_enqueue(sender, recipient.friend_request);
}
function friend_request_recieved(recipient) {
    var name_of_sender = (0, queue_array_1.head)(recipient.friend_request).name;
    var name_of_recipient = recipient.name;
    if (!(0, queue_array_1.head)(recipient.friend_request)) {
        console.log("You have no new friend requests");
    }
    else {
        console.log("".concat(name_of_sender, " has sent you a friend request!"));
        console.log("Do you accept?");
        console.log("[Y] - Yes");
        console.log("[N] - No");
        var answer = (0, login_prompt_1.check_prompt)("");
        if (answer === "Y" || answer === "y") {
            recipient.friends.push(name_of_sender);
            (0, queue_array_1.head)(recipient.friend_request).friends.push(name_of_recipient);
        }
        else if (answer === "N" || answer === "n") {
            friends_prompt_1.friends_prompts;
        }
        else {
            console.log("unknown command");
        }
        request_dequeue(recipient.friend_request);
    }
}
function add_friend(username, friendname, userbase) {
    if ((0, userfunctions_1.is_in_userbase)(friendname, userbase)) {
        for (var i = 0; i < userbase.length; i++) {
            if (username === userbase[i].name) {
                for (var n = 0; n < userbase.length; n++) {
                    if (friendname === userbase[n].name) {
                        friend_request_send(userbase[n], userbase[i]);
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
                            var remove2 = userbase[n].friends.indexOf(username);
                            userbase[n].friends.splice(remove2, 1);
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
// Renamed queue-functions
