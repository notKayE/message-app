import { User, UserBase } from "./types"
import { add_to_userbase, create_user, create_userbase, find_user, is_in_userbase } from "./userfunctions"


test("Create user", () => {
    expect(create_user("abc", "123")).toStrictEqual({name: "abc", password: "123", messages: [], friends: []})
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

