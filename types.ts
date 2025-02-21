import { Queue } from "./lib/queue_array"

export type User = {
    name: string
    password: string
    message_queue: Queue<Message | unknown>
    friends: Array<string>
}

export type UserBase = Array<User>

export type currentUser = Array<User>

export type Message = {
    sender: string,
    body: string,
}
