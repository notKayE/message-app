import { add_friend, friend_request_send, remove_friend } from "./friends/friends_functions"
import { suggested_friends } from "./friends/suggested_friends"
import { empty, head } from "./lib/queue_array"
import { message_create_queue } from "./messages/messages_functions"
import { User, UserBase } from "./types"
import { main_userbase } from "./userbase/userbase"
import { add_to_userbase, create_user, create_userbase, find_user, is_in_userbase } from "./userfunctions"


test("Create user", () => {
    expect(create_user("abc", "123")).toStrictEqual({name: "abc", password: "123", message_queue: message_create_queue(), friends: [], friend_request: empty(), message_privacy: false})
})

test("Create userbase", () => {
    expect(create_userbase()).toStrictEqual([])
})

test("Is in userbase, add to userbase", () => {
    const userbase: UserBase = create_userbase()
    const user: User = create_user("abc", "123")
    add_to_userbase(user, userbase)
    expect(is_in_userbase("abc", userbase)).toStrictEqual(true)
    expect(is_in_userbase("def", userbase)).toStrictEqual(false)
})

test("Find user, add to userbase", () => {
    const userbase: UserBase = create_userbase()
    const user: User = create_user("abc", "123")
    add_to_userbase(user, userbase)
    expect(find_user("abc", userbase)).toStrictEqual(user)
})

test('Add friend', () => {
    const userbase: UserBase = create_userbase()
    const elis: User = create_user("elis", "123")
    const ivan: User = create_user("ivan", "123")

    add_to_userbase(elis, userbase)
    add_to_userbase(ivan, userbase)

    add_friend("elis", "ivan", userbase)
    expect(ivan.friend_request).toStrictEqual([0, 1, [elis]])

})
  
test('Send friend request', () => {
    const joakim: User = main_userbase[0];
    const elis: User = main_userbase[2];
  
    friend_request_send(joakim, elis);
  
    expect(head(joakim.friend_request)).toStrictEqual(elis);
  
})
  
test('Remove friend', () => {
    const userbase: UserBase = create_userbase()
    const elis: User = create_user("elis", "123")
    const ivan: User = create_user("ivan", "123")

    add_to_userbase(elis, userbase)
    add_to_userbase(ivan, userbase)

    elis.friends = ["ivan"]
    ivan.friends = ["elis"]

    remove_friend("ivan", "elis", userbase)
  
    expect(ivan.friends).toStrictEqual([])
  
})

test('Suggested friends', () => {
    const userbase: UserBase = create_userbase()
    const elis: User = create_user("elis", "123")
    const ivan: User = create_user("ivan", "123")
    const joakim: User = create_user("joakim", "123")
  
    add_to_userbase(elis, userbase)
    add_to_userbase(ivan, userbase)
    add_to_userbase(joakim, userbase)

    elis.friends = ["joakim"]
    ivan.friends = ["joakim"]
    joakim.friends = ["ivan", "elis"]

    expect(suggested_friends(elis, userbase)).toStrictEqual([" ivan"])
})