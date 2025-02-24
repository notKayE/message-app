import { UserBase } from "../types";
import { is_in_userbase } from "../userfunctions";

export function add_friend(username: string, friendname: string, userbase: UserBase): void {
    if (is_in_userbase(friendname, userbase)) {
        for (let i = 0; i < userbase.length; i++) {
            if (username === userbase[i].name) {
                for (let n = 0; n < userbase.length; n++) {
                    if (friendname === userbase[n].name) {
                        userbase[i].friends.push(friendname)
                        userbase[n].friends.push(username)
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
    } else { console.log("user does not exist") }
}

