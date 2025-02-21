import { Queue } from "../lib/queue_array"

export type Message = {
  sender: string,
  body: string,
}

export type TempUser = {
  name: string
  password: string
  message_queue: Queue<Message | unknown>
  friends: Array<TempUser>
}