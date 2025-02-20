import { dequeue, empty, enqueue, head, Queue } from '../lib/queue_array';
import { Message, TempUser } from './message_types';

// Three renamed queue functions.
export const message_create_queue = () => empty();
export const message_enqueue = (message: Message, queue: Queue<Message | unknown>): void => enqueue(message, queue);
export const message_dequeue = (queue: Queue<Message | unknown>): void => dequeue(queue);

// Creates a message from a User.
function message_create(user: TempUser, body: string,): Message {
  return { sender: user.name, body };
}

// Sends a message to a recipient. Preconditions that the recipient exists
// TODO: Find recipient and check if exists on top level.
// TODO: Update type User to match TempUser.
function message_send(recipient: TempUser, message: Message): void {
  message_enqueue(message, recipient.message_queue)
  console.log(`Message sent to ${recipient.name}.\n`)
}

// Reads a message then dequeues it.
function message_read_and_dequeue(user: TempUser): void {
  // If queue is empty, return.
  if (!head(user.message_queue)) return console.log('All messages read.');

  const { sender, body } = head(user.message_queue) as Message;

  console.log(`${sender} says:`)
  console.log(`${body}\n`)

  message_dequeue(user.message_queue);
}

// -----------------------------
// Tests
const q = message_create_queue();

const joakim: TempUser = {
  name: 'Joakim',
  password: '123',
  message_queue: message_create_queue(),
  friends: [],
}

const ivan: TempUser = {
  name: 'Ivan',
  password: '123',
  message_queue: message_create_queue(),
  friends: [],
}

const elis: TempUser = {
  name: 'Elis',
  password: '123',
  message_queue: message_create_queue(),
  friends: [],
}

const m1 = message_create(ivan, 'Hej, hur mår du?');
const m2 = message_create(elis, 'Toppen, ska vi ses på fredag?');
const m3 = message_create(ivan, 'Klockan 10 blir bra.');

message_send(joakim, m1)
message_send(joakim, m2)
message_send(joakim, m3)

message_read_and_dequeue(joakim)
message_read_and_dequeue(joakim)
message_read_and_dequeue(joakim)