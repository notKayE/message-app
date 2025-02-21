import { currentUser, User, UserBase } from './types';
import { find_user, is_in_userbase } from './userfunctions';

export function add_friend(username: string, friendname: string, userbase: UserBase): void {
    if (is_in_userbase(friendname, userbase)) {
        for (let i = 0; i < userbase.length; i++) {
            if (username === userbase[i].name) {
                for (let n = 0; n < userbase.length; n++) {
                    if (friendname === userbase[n].name) {
                        userbase[i].friends.push(friendname)
                    } else {}
                } 
            }
        }
    } else { console.log("user does not exist") }
}

export function remove_friend(username:string, friendname: string, userbase: UserBase):void {
    if (is_in_userbase(friendname, userbase)) {
        for (let i = 0; i < userbase.length; i++) {
            if (username === userbase[i].name) {
                for (let n = 0; n < userbase.length; n++) {
                    if (friendname === userbase[n].name) {
                        if (userbase[i].friends.includes(friendname)){
                            const remove = userbase[i].friends.indexOf(friendname);
                            userbase[i].friends.splice(remove, 1);
                        }
                    } else {}
                } 
            }
        }
    } else { console.log("user does not exist") }
}

