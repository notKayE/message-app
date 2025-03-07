import { Queue } from "./lib/queue_array"

export type User = {
    name: string
    password: string
    message_queue: Queue<Message | unknown>
    friends: Array<string>
    friend_request: Queue<User>
    message_privacy: boolean // If false, no privacy enabled.
}

export type UserBase = Array<User>

export type CurrentUser = Array<User>

export type Message = {
    sender: string,
    body: string,
}
