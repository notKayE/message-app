"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closest_relation = closest_relation;
var graphs_1 = require("../lib/graphs");
var list_1 = require("../lib/list");
var shortest_path_1 = require("./shortest_path");
// Makes a userbase into a list
function userbase_to_userlist(userbase) {
    var result = [];
    for (var i = 0; i < userbase.length; i++) {
        result.push(userbase[i].name);
    }
    return result;
}
// Makes a userbase into a graph
function userbase_to_graph(userbase) {
    var userlist = userbase_to_userlist(userbase);
    var lg = (0, graphs_1.lg_new)(userbase.length);
    for (var i = 0; i < lg.adj.length; i++) {
        for (var j = 0; j < userbase[i].friends.length; j++) {
            lg.adj[i] = (0, list_1.pair)(userlist.indexOf(userbase[i].friends[j]), lg.adj[i]);
        }
    }
    return lg;
}
/**
 * Finds a pathing to another user through mutual friends.
 * @param userbase - Userbase to search in.
 * @param user1 - The user to find path from.
 * @param user2 - The user to find path to.
 * @returns the path/closest relation a user have to another user. If there's no
 *          possible path, it won't return a pathing.
 */
function closest_relation(userbase, user1, user2) {
    var userlist = userbase_to_userlist(userbase);
    var lg = userbase_to_graph(userbase);
    var first = userlist.indexOf(user1);
    var second = userlist.indexOf(user2);
    var crList = (0, list_1.map)(function (x) { return userlist[x]; }, (0, shortest_path_1.lg_shortest_path)(lg, first, second));
    var result = "";
    while (!(0, list_1.is_null)(crList)) {
        result = result + (0, list_1.head)(crList);
        if (!(0, list_1.is_null)((0, list_1.tail)(crList))) {
            result = result + " => ";
        }
        else { }
        crList = (0, list_1.tail)(crList);
    }
    if (result === "") {
        result = "There is no path from you to ".concat(user2);
    }
    return result;
}
