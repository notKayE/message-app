import { dequeue, empty, enqueue, head, Queue } from '../lib/queue_array';
import { Message, User } from '../types';

// Three renamed queue functions.
export const message_create_queue: () => Queue<Message> = () => empty();
const message_enqueue = (message: Message, queue: Queue<Message | unknown>): void => enqueue(message, queue);
const message_dequeue = (queue: Queue<Message | unknown>): void => dequeue(queue);

// Creates a message from a User.
export function message_create(user: User, body: string,): Message {
  return { sender: user.name, body };
}

/**
 * Sends a message to a message to another user.
 * @precon - The users exists.
 * @param recipient - The user to send message to.
 * @param user - The user sending the message.
 * @param message
 * @returns 
 */
export function message_send(recipient: User, user: User, message: Message): void {
  // If recipient has privacy enabled, abort send message.
  if (recipient.message_privacy && !user.friends.includes(recipient.name)) {
    console.log(`Add ${recipient.name} as a friend to send messages.\n`)
    return;
  }

  message_enqueue(message, recipient.message_queue)
  console.log(`Message sent to ${recipient.name}.\n`)
}

/**
 * Takes the head of the message, reads it and then dequeues it.
 * @param user - The user to read the messages.
 */
export function message_read_and_dequeue(user: User): void {
  // If queue is empty, return.
  if (!head(user.message_queue)) return console.log('All messages read. \n');

  const { sender, body } = head(user.message_queue) as Message;

  console.log(`${sender} says:`)
  console.log(`${body}\n`)

  message_dequeue(user.message_queue);
}
