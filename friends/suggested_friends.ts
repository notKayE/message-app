import { pair, Pair, tail, head } from "../lib/list";
import { User, UserBase } from "../types";
import { main_userbase } from "../userbase/userbase";
import { find_user } from "../userfunctions";

export function suggested_friends(user: User, userbase: UserBase): Array<string> {
    const suggested_friends_array: Array<string> = []
    const frequency: Array<Pair<string, number>> = []

    for(let i = 0; i < user.friends.length; i++) {
        const friend: User = find_user(user.friends[i], userbase)!
        for(let j = 0; j < friend.friends.length; j++) {
            const suggested_friend: string = friend.friends[j]
            if (suggested_friend === user.name || user.friends.includes(suggested_friend)) {
                continue;
            } else if (!suggested_friends_array.includes(suggested_friend)) {
                suggested_friends_array.push(suggested_friend)
                frequency.push(pair(suggested_friend, 1))
            } else {
                const idx = suggested_friends_array.indexOf(suggested_friend)
                frequency[idx] = pair(suggested_friend, tail(frequency[idx]) + 1)
            }   
        }
    }

    suggested_friends_array.splice(5)
    return sort_by_frequency(frequency)
}

function sort_by_frequency<T>(frequency_array: Array<Pair<T, number>>): Array<T> {
    const result: Array<T> = []

    for(let a = 1; a < frequency_array.length; a++) {
        for(let b = a; b > 0; b--) {
            if (tail(frequency_array[b]) > tail(frequency_array[b - 1])) {
                const temp: Pair<T, number> = frequency_array[b]
                frequency_array[b] = frequency_array[b - 1]
                frequency_array[b - 1] = temp
            }
        }
    }

    for(let i = 0; i < 5; i++) {
        result.push(head(frequency_array[i]))
    }

    return result
}

console.log(suggested_friends(main_userbase[0], main_userbase))