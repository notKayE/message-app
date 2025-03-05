import { add_to_userbase, create_user, create_userbase, is_in_userbase } from "./userfunctions";

// General testfile.

const joakim = create_user("joakim", "123")
const ivan = create_user("ivan", "234")
const elis = create_user("elis", "345")

console.log(joakim)

const userbase = create_userbase()
add_to_userbase(elis, userbase)
add_to_userbase(joakim, userbase)

console.log(create_userbase)
console.log(userbase)

console.log(is_in_userbase("ivan", userbase))