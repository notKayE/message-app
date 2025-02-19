import { check_prompt } from './prompts/login_prompt';
import { currentUser, User, UserBase } from './types';
import { find_user, is_in_userbase } from './userfunctions';

var prompt = require('prompt-sync')();

export function add_friend(username: string, userbase: UserBase): void {
    const friend_name = check_prompt("add friend: ");
    if (is_in_userbase(friend_name, userbase)) {
        for (let i = 0; i < userbase.length; i++) {
            if (username === userbase[i].name) {
                for (let n = 0; n < userbase.length; n++) {
                    if (friend_name === userbase[n].name) {
                        userbase[i].friends.push(friend_name)
                    } else {}
                } 
            }
        }
    } else { console.log("user does not exist") }
}

export function remove_friend(username:string, userbase: UserBase):void {
    const friend_name = check_prompt("remove friend: ")
    if (is_in_userbase(friend_name, userbase)) {
        for (let i = 0; i < userbase.length; i++) {
            if (username === userbase[i].name) {
                for (let n = 0; n < userbase.length; n++) {
                    if (friend_name === userbase[n].name) {
                        if (userbase[i].friends.includes(friend_name)){
                            const remove = userbase[i].friends.indexOf(friend_name);
                            userbase[i].friends.splice(remove, 1);
                        }
                    } else {}
                } 
            }
        }
    } else { console.log("user does not exist") }
}
