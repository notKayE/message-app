import { currentUser, User, UserBase } from './types';
import { find_user, is_in_userbase } from './userfunctions';

export function add_friend(username: string, friendname: string, userbase: UserBase): void {
    if (username !== friendname) {
        if (is_in_userbase(friendname, userbase)) {
            for (let i = 0; i < userbase.length; i++) {
                if (username === userbase[i].name) {
                    if (userbase[i].friends.indexOf(friendname) !== -1) {
                        console.log("You are already friends")
                    } else {
                        for (let n = 0; n < userbase.length; n++) {
                            if (friendname === userbase[n].name) {
                                userbase[i].friends.push(friendname)
                                userbase[n].friends.push(username)
                        } else {}
                    } 
                }
            } else { console.log("user does not exist") }
        } 
    } else {console.log("You cannot add yourself")}
}
}

export function remove_friend(username:string, friendname: string, userbase: UserBase):void {
    if (is_in_userbase(friendname, userbase)) {
        for (let i = 0; i < userbase.length; i++) {
            if (username === userbase[i].name) {
                for (let n = 0; n < userbase.length; n++) {
                    if (friendname === userbase[n].name) {
                        if (userbase[i].friends.indexOf(friendname) !== -1){
                            const remove = userbase[i].friends.indexOf(friendname);
                            const remove1 = userbase[n].friends.indexOf(username);
                            userbase[i].friends.splice(remove, 1);
                            userbase[n].friends.splice(remove1, 1);
                        } else {console.log("You are not friends")}
                    } 
                } 
            }
        }
    } else { console.log("user does not exist") }
}

