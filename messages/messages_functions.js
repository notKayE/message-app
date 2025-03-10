"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message_create_queue = void 0;
exports.message_create = message_create;
exports.message_send = message_send;
exports.message_read_and_dequeue = message_read_and_dequeue;
var queue_array_1 = require("../lib/queue_array");
// Three renamed queue functions.
var message_create_queue = function () { return (0, queue_array_1.empty)(); };
exports.message_create_queue = message_create_queue;
var message_enqueue = function (message, queue) { return (0, queue_array_1.enqueue)(message, queue); };
var message_dequeue = function (queue) { return (0, queue_array_1.dequeue)(queue); };
// Creates a message from a User.
function message_create(user, body) {
    return { sender: user.name, body: body };
}
/**
 * Sends a message to a message to another user.
 * @precon - The users exists.
 * @param recipient - The user to send message to.
 * @param user - The user sending the message.
 * @param message
 * @returns
 */
function message_send(recipient, user, message) {
    // If recipient has privacy enabled, abort send message.
    if (recipient.message_privacy && !user.friends.includes(recipient.name)) {
        console.log("Add ".concat(recipient.name, " as a friend to send messages.\n"));
        return;
    }
    message_enqueue(message, recipient.message_queue);
    console.log("Message sent to ".concat(recipient.name, ".\n"));
}
/**
 * Takes the head of the message, reads it and then dequeues it.
 * @param user - The user to read the messages.
 */
function message_read_and_dequeue(user) {
    // If queue is empty, return.
    if (!(0, queue_array_1.head)(user.message_queue))
        return console.log('All messages read. \n');
    var _a = (0, queue_array_1.head)(user.message_queue), sender = _a.sender, body = _a.body;
    console.log("".concat(sender, " says:"));
    console.log("".concat(body, "\n"));
    message_dequeue(user.message_queue);
}
