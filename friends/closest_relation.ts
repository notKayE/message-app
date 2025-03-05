import { lg_new, ListGraph } from "../lib/graphs";
import { head, is_null, List, map, pair, tail } from "../lib/list";
import { UserBase } from "../types";
import { lg_shortest_path } from "./shortest_path";

// Makes a userbase into a list
function userbase_to_userlist(userbase: UserBase): Array<string> {
    let result: Array<string> = []

    for(let i = 0; i < userbase.length ; i++) {
        result.push(userbase[i].name)
    }

    return result
}

// Makes a userbase into a graph
function userbase_to_graph(userbase: UserBase): ListGraph {
    const userlist: Array<string> = userbase_to_userlist(userbase)
    let lg: ListGraph = lg_new(userbase.length)

    for(let i = 0; i < lg.adj.length; i++) {
        for(let j = 0; j < userbase[i].friends.length; j++) {
            lg.adj[i] = pair(userlist.indexOf(userbase[i].friends[j]), lg.adj[i])
        }
    }

    return lg  
}

/**
 * Finds a pathing to another user through mutual friends.
 * @param userbase - Userbase to search in.
 * @param user1 - The user to find path from.
 * @param user2 - The user to find path to.
 * @returns the path/closest relation a user have to another user. If there's no
 *          possible path, it won't return a pathing.
 */
export function closest_relation(userbase: UserBase, user1: string, user2: string): string {
    const userlist: Array<string> = userbase_to_userlist(userbase)
    const lg: ListGraph = userbase_to_graph(userbase)
    const first: number = userlist.indexOf(user1)
    const second: number = userlist.indexOf(user2)

    let crList: List<string> = map(x => userlist[x], lg_shortest_path(lg, first, second))
    let result: string = ""

    while (!is_null(crList)) {
        result = result + head(crList)
        if (!is_null(tail(crList))) {
            result = result + " => "
        } else {}
        crList = tail(crList)
    }

    if (result === "") {
        result = `There is no path from you to ${user2}`
    } else {}
     
    return result
}