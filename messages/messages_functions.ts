import { dequeue, empty, enqueue, head, Queue } from '../lib/queue_array';
import { Message } from './message_types';

// Three renamed queue functions.
export const message_create_queue = () => empty();
export const message_enqueue = (message: Message, queue: Queue<Message | unknown>): void => enqueue(message, queue);
export const message_dequeue = (queue: Queue<Message | unknown>): void => dequeue(queue);

// Creates a message with a sender.
function message_create(sender: string, message: string,): Message {
  return { sender, message };
}

// Sends a message to a recipient.

// Reads a message then dequeues it.
function message_read_and_dequeue(queue: Queue<Message | unknown>): void {
  // If queue is empty.
  if (!head(queue)) return console.log('All messages read.');

  const { sender, message } = head(queue) as Message;

  console.log(`${sender} says:`)
  console.log(message)
  console.log();

  message_dequeue(queue);
}

// Tests
const q = message_create_queue();
const p = message_create_queue();

const m1 = message_create('Ivan', 'Hej, hur mår du?');
const m2 = message_create('Elis', 'Toppen, ska vi ses på fredag?');
const m3 = message_create('Joakim', 'Klockan 10 blir bra.');

message_enqueue(m1, q);
message_enqueue(m2, q);
message_enqueue(m3, q);

message_read_and_dequeue(q);
message_read_and_dequeue(q);
message_read_and_dequeue(q);
message_read_and_dequeue(q);
