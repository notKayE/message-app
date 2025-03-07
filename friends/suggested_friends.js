"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggested_friends = suggested_friends;
var list_1 = require("../lib/list");
var userfunctions_1 = require("../userfunctions");
/**
 * A function that suggests new friends to the user.
 * @param user - A user to help suggest friends to.
 * @param userbase - A userbase to get friends suggested from.
 * @returns
 */
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
    return sort_by_frequency(frequency);
}
/**
 * Sorts the array of suggested friends. The "closer" the suggested friend is
 * to you, the further up it's pushed up in the array.
 * @param frequency_array
 * @returns a sorted array with suggested friends.
 */
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
        if (frequency_array[i] !== undefined) {
            result.push(" " + (0, list_1.head)(frequency_array[i]));
        }
        else { }
    }
    if (result.length > 5) {
        result.splice(5);
    }
    else { }
    return result;
}
