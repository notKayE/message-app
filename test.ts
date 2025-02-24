import { add_friend, remove_friend } from "./friends_functions";
import { add_to_userbase, create_user, create_userbase, is_in_userbase } from "./userfunctions";

const joakim = create_user("joakim", "123")
const ivan = create_user("ivan", "234")
const elis = create_user("elis", "345")

console.log(joakim)

const userbase = create_userbase()
add_to_userbase(elis, userbase)
add_to_userbase(joakim, userbase)
add_to_userbase(ivan, userbase)

console.log(create_userbase)
console.log(userbase)

console.log(is_in_userbase("ivan", userbase))

add_friend("elis", "joakim", userbase)
add_friend("elis", "ivan", userbase)
console.log(userbase)

remove_friend("elis", "joakim", userbase)
console.log(userbase)