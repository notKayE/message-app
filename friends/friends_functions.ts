import { User, UserBase } from "../types";
import { is_in_userbase } from "../userfunctions";
import { dequeue, enqueue, head, Queue } from '../lib/queue_array';
import { check_prompt } from '../prompts/main_prompt';
import { friends_prompts } from '../prompts/friends_prompt';

// Renamed queue-functions
const request_enqueue = (user: User, queue: Queue<User>): void => enqueue(user, queue)
const request_dequeue = (queue: Queue<User>): void => dequeue(queue)

// Sends friend-request
export function friend_request_send(recipient: User, sender: User): void {
    request_enqueue(sender, recipient.friend_request)
}

// Recieves friend-request and gives the option to accept or deny it.
// If accepted, both sender and recipient adds the other as friend
// If denied, nothing happens

export function friend_request_recieved(recipient:User): void {
    if (!head(recipient.friend_request)) {
        console.log("You have no new friend requests")
    } else {
        const name_of_sender = head(recipient.friend_request).name
        const name_of_recipient = recipient.name
        console.log(`${name_of_sender} has sent you a friend request!\n`)
        console.log("Do you accept?")
        console.log("[Y] - Yes")
        console.log("[N] - No")
        const answer = check_prompt("", false)
        if (answer === "Y" ||answer === "y") {
            recipient.friends.push(name_of_sender)
            head(recipient.friend_request).friends.push(name_of_recipient)
        } else if (answer === "N" || answer === "n"){
            friends_prompts
        } else {console.log("Unknown command")}
        request_dequeue(recipient.friend_request)
    }
}

// Function to add friend.

export function add_friend(username: string, friendname: string, userbase: UserBase): void {
    if (is_in_userbase(friendname, userbase)) {
        for (let i = 0; i < userbase.length; i++) {
            if (username === userbase[i].name) {
                for (let n = 0; n < userbase.length; n++) {
                    if (friendname === userbase[n].name) {
                        friend_request_send(userbase[n], userbase[i])
                    } else {}
                } 
            }
        }
    } else { console.log("User does not exist\n") }
}

// Function to remove friend. 
// If friend is removed, the person who is removed has the remover removed as friend as well

export function remove_friend(username:string, friendname: string, userbase: UserBase):void {
    if (is_in_userbase(friendname, userbase)) {
        for (let i = 0; i < userbase.length; i++) {
            if (username === userbase[i].name) {
                for (let n = 0; n < userbase.length; n++) {
                    if (friendname === userbase[n].name) {
                        if (userbase[i].friends.indexOf(friendname) !== -1){
                            const remove = userbase[i].friends.indexOf(friendname);
                            userbase[i].friends.splice(remove, 1);
                            const remove2 = userbase[n].friends.indexOf(username);
                            userbase[n].friends.splice(remove2, 1);
                        }
                    } else {}
                } 
            }
        }
    } else { console.log("User does not exist\n") }
}