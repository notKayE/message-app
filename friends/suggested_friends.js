"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggested_friends = suggested_friends;
var list_1 = require("../lib/list");
var userbase_1 = require("../userbase/userbase");
var userfunctions_1 = require("../userfunctions");
function suggested_friends(user, userbase) {
    var suggested_friends_array = [];
    var frequency = [];
    for (var i = 0; i < user.friends.length; i++) {
        var friend = (0, userfunctions_1.find_user)(user.friends[i], userbase);
        for (var j = 0; j < friend.friends.length; j++) {
            var suggested_friend = friend.friends[j];
            if (suggested_friend === user.name || user.friends.includes(suggested_friend)) {
                continue;
            }
            else if (!suggested_friends_array.includes(suggested_friend)) {
                suggested_friends_array.push(suggested_friend);
                frequency.push((0, list_1.pair)(suggested_friend, 1));
            }
            else {
                var idx = suggested_friends_array.indexOf(suggested_friend);
                frequency[idx] = (0, list_1.pair)(suggested_friend, (0, list_1.tail)(frequency[idx]) + 1);
            }
        }
    }
    suggested_friends_array.splice(5);
    return sort_by_frequency(frequency);
}
function sort_by_frequency(frequency_array) {
    var result = [];
    for (var a = 1; a < frequency_array.length; a++) {
        for (var b = a; b > 0; b--) {
            if ((0, list_1.tail)(frequency_array[b]) > (0, list_1.tail)(frequency_array[b - 1])) {
                var temp = frequency_array[b];
                frequency_array[b] = frequency_array[b - 1];
                frequency_array[b - 1] = temp;
            }
        }
    }
    for (var i = 0; i < 5; i++) {
        result.push((0, list_1.head)(frequency_array[i]));
    }
    return result;
}
console.log(suggested_friends(userbase_1.main_userbase[0], userbase_1.main_userbase));
