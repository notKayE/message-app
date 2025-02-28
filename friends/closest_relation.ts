import { lg_new, ListGraph } from "../lib/graphs";
import { List, map, pair } from "../lib/list";
import { UserBase } from "../types";
import { main_userbase } from "../userbase/userbase";
import { lg_shortest_path } from "./shortest_path";


function userbase_to_userlist(userbase: UserBase): Array<string> {
    let result = []

    for(let i = 0; i < userbase.length ; i++) {
        result.push(userbase[i].name)
    }

    return result
}

function userbase_to_graph(userbase: UserBase): ListGraph {
    const userlist: Array<string> = userbase_to_userlist(userbase)
    let lg = lg_new(userbase.length)

    for(let i = 0; i < lg.adj.length; i++) {
        for(let j = 0; j < userbase[i].friends.length; j++) {
            lg.adj[i] = pair(userlist.indexOf(userbase[i].friends[j]), lg.adj[i])
        }
    }

    return lg  
}

export function closest_relation(userbase: UserBase, user1: string, user2: string): List<string> {
    const userlist: Array<string> = userbase_to_userlist(userbase)
    const lg = userbase_to_graph(userbase)
    const first = userlist.indexOf(user1)
    const second = userlist.indexOf(user2)

    return map(x => userlist[x], lg_shortest_path(lg, first, second))
}