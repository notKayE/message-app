import { pair, Pair, tail, head, is_null } from "../lib/list";
import { User, UserBase } from "../types";
import { find_user } from "../userfunctions";


/**
 * A function that suggests new friends to the user.
 * @param user - A user to help suggest friends to.
 * @param userbase - A userbase to get friends suggested from.
 * @returns 
 */
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
                const idx: number = suggested_friends_array.indexOf(suggested_friend)
                frequency[idx] = pair(suggested_friend, tail(frequency[idx]) + 1)
            }   
        }
    }

    return sort_by_frequency(frequency)
}


/**
 * Sorts the array of suggested friends. The "closer" the suggested friend is
 * to you, the further up it's pushed up in the array.
 * @param frequency_array 
 * @returns a sorted array with suggested friends.
 */
function sort_by_frequency(frequency_array: Array<Pair<string, number>>): Array<string> {
    const result: Array<string> = []

    for(let a = 1; a < frequency_array.length; a++) {
        for(let b = a; b > 0; b--) {
            if (tail(frequency_array[b]) > tail(frequency_array[b - 1])) {
                const temp: Pair<string, number> = frequency_array[b]
                frequency_array[b] = frequency_array[b - 1]
                frequency_array[b - 1] = temp
            }
        }
    }

    for(let i = 0; i < 5; i++) {
        if(frequency_array[i] !== undefined) {
            result.push(" " + head(frequency_array[i]))
        } else {} 
    }

    if(result.length > 5) {
        result.splice(5)
    } else {}
    
    return result
}