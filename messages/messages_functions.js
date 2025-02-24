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
// Sends a message to a recipient. Preconditions that the recipient exists
// TODO: Find recipient and check if exists on top level.
// TODO: Update type User to match TempUser.
function message_send(recipient, message) {
    message_enqueue(message, recipient.message_queue);
    console.log("Message sent to ".concat(recipient.name, ".\n"));
}
// Reads a message then dequeues it.
function message_read_and_dequeue(user) {
    // If queue is empty, return.
    if (!(0, queue_array_1.head)(user.message_queue))
        return console.log('All messages read.');
    var _a = (0, queue_array_1.head)(user.message_queue), sender = _a.sender, body = _a.body;
    console.log("".concat(sender, " says:"));
    console.log("".concat(body, "\n"));
    message_dequeue(user.message_queue);
}
