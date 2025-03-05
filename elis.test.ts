import { closest_relation } from "./friends/closest_relation";
import { message_create, message_create_queue, message_read_and_dequeue, message_send } from "./messages/messages_functions";
import { UserBase, Message, } from "./types";
import { dequeue, empty, enqueue, Queue } from "./lib/queue_array";

const temp_userbase: UserBase = [
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


const message_enqueue = (message: Message, queue: Queue<Message | unknown>): void => enqueue(message, queue);
const message_dequeue = (queue: Queue<Message | unknown>): void => dequeue(queue);



test("Closest relation", () => {
    expect((closest_relation(temp_userbase, "elis", "joakim"))).toStrictEqual("elis => ivan => joakim")
    expect((closest_relation(temp_userbase, "fredrik", "ivan"))).toStrictEqual("fredrik => eva => kalle => ivan")
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


test("Message enqueue", () => {
  const first_user = temp_userbase[0]
  const second_user = temp_userbase[1]
  message_enqueue(message_create(first_user, "Hej"), second_user.message_queue)
  expect(second_user.message_queue).toStrictEqual([0, 1, [{"body": "Hej", "sender": "joakim"}]])
})

test("Message dequeue", () => {
  const first_user = temp_userbase[2]
  expect(message_dequeue(first_user.message_queue)).toBe(undefined)
})
