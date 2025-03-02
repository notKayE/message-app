import { suggested_friends } from "./friends/suggested_friends";
import { closest_relation } from "./friends/closest_relation";
import { message_create, message_create_queue, message_read_and_dequeue, message_send } from "./messages/messages_functions";
import { User, UserBase, Message, currentUser } from "./types";
import { length, head } from "./lib/list";
import { dequeue, empty, enqueue, is_empty, Queue } from "./lib/queue_array";


let temp_userbase: UserBase = [
    {
        name: 'joakim',
        password: '123',
        message_queue: [ 0, 0, [] ],
        friends: ['eva', 'ivan'],
        friend_request: [ 0, 0, [] ],
        message_privacy: false
      },
      {
        name: 'ivan',
        password: '123',
        message_queue: [ 0, 0, [] ],
        friends: [ 'joakim', 'elis', 'kalle' ],
        friend_request: [ 0, 0, [] ],
        message_privacy: false
      },
      {
        name: 'elis',
        password: '123',
        message_queue: [ 0, 0, [] ],
        friends: [ 'kalle', 'ivan' ],
        friend_request: [ 0, 0, [] ],
        message_privacy: false
      },
      {
        name: 'kalle',
        password: '123',
        message_queue: [ 0, 0, [] ],
        friends: [ 'ivan', 'elis', 'eva'],
        friend_request: [ 0, 0, [] ],
        message_privacy: false
      },
      {
        name: 'eva',
        password: '123',
        message_queue: [ 0, 0, [] ],
        friends: [ 'joakim', 'kalle', 'fredrik'],
        friend_request: [ 0, 0, [] ],
        message_privacy: false
      },
      {
        name: 'fredrik',
        password: '123',
        message_queue: [ 0, 0, [] ],
        friends: [ 'eva'],
        friend_request: [ 0, 0, [] ],
        message_privacy: false
      }
];

/*
const message_enqueue = (message: Message, queue: Queue<Message | unknown>): void => enqueue(message, queue);
const message_dequeue = (queue: Queue<Message | unknown>): void => dequeue(queue);
*/


test("Closest relation", () => {
    expect(length(closest_relation(temp_userbase, "elis", "joakim"))).toBe(3)
    expect(length(closest_relation(temp_userbase, "fredrik", "ivan"))).toBe(4)
})

test("Suggested friends", () => {
    const first_user = temp_userbase[0]
    const second_user = temp_userbase[1]
    expect(suggested_friends(first_user, temp_userbase)).toStrictEqual(["kalle", "elis"])
    expect(suggested_friends(second_user, temp_userbase)).toStrictEqual(["eva"])
})

test("Message send", () => {
    const first_user = temp_userbase[0]
    const second_user = temp_userbase[1]
    message_send(first_user, second_user, message_create(first_user, "Hej!"))
    expect(first_user.message_queue).toStrictEqual([0, 1, [{"body": "Hej!", "sender": "joakim"}]])
})

test("Message create queue", () => {
    expect(message_create_queue()).toStrictEqual(empty())
})

/*
test("Message read and dequeue", () => {

})
*/
