"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main_userbase = exports.names = void 0;
var friends_functions_1 = require("../friends/friends_functions");
var userfunctions_1 = require("../userfunctions");
// README
// Only a helper function to create random userbases.
// Not in use in the code.
// Users and their names
exports.names = ['joakim', 'ivan', 'elis', 'kalle', 'eva', 'nisse', 'pelle', 'niklas', 'johanna', 'stina',
    'jan', 'andreas', 'lina', 'amanda', 'per', 'tristan', 'froppe', 'nina', 'hanna'];
var password = '123';
var ub = (0, userfunctions_1.create_userbase)();
// Adds users to the DB.
for (var i = 0; i < exports.names.length; i++) {
    var new_user = (0, userfunctions_1.create_user)(exports.names[i], password);
    (0, userfunctions_1.add_to_userbase)(new_user, ub);
}
var _loop_1 = function (i) {
    // Random amount of friends and array created with said random amount of friends.
    var random_amount_of_friends = Math.floor(Math.random() * 2 + 2); // 2 - 6 friends
    var friends_to_add = Array.from({ length: random_amount_of_friends }, function () { return ub[Math.floor(Math.random() * ub.length)]; }); // Random friends in array
    // Add the friends to the users friends list.
    friends_to_add.forEach(function (friend) {
        if (ub[i].friends.includes(friend.name) || ub[i].name === friend.name)
            return;
        (0, friends_functions_1.add_friend)(ub[i].name, friend.name, ub);
    });
};
// Adds friends to users in DB
for (var i = 0; i < ub.length; i++) {
    _loop_1(i);
}
/**
 * The main userbase used in the program.
 */
exports.main_userbase = [
    {
        name: 'joakim',
        password: '123',
        message_queue: [0, 0, []],
        friends: [
            'eva', 'stina',
            'ivan', 'niklas',
            'johanna', 'andreas',
            'per', 'tristan'
        ],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'ivan',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['joakim', 'andreas', 'kalle', 'johanna', 'jan', 'per'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'elis',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['per', 'pelle', 'nisse', 'andreas'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'kalle',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['ivan', 'nina', 'eva', 'niklas', 'lina'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'eva',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['joakim', 'kalle', 'johanna', 'froppe', 'stina', 'amanda'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'nisse',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['elis', 'niklas', 'andreas', 'pelle', 'hanna'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'pelle',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['elis', 'tristan', 'nisse', 'andreas', 'nina'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'niklas',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['nisse', 'stina', 'joakim', 'kalle'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'johanna',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['eva', 'ivan', 'joakim', 'nina'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'stina',
        password: '123',
        message_queue: [0, 0, []],
        friends: [
            'joakim', 'eva',
            'niklas', 'nina',
            'per', 'tristan',
            'froppe'
        ],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'jan',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['tristan', 'ivan', 'lina'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'andreas',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['ivan', 'nisse', 'pelle', 'joakim', 'elis'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'lina',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['jan', 'kalle'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'amanda',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['eva', 'hanna'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'per',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['elis', 'stina', 'joakim', 'ivan'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'tristan',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['pelle', 'jan', 'nina', 'joakim', 'stina'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'froppe',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['eva', 'stina'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'nina',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['kalle', 'stina', 'tristan', 'johanna', 'pelle'],
        friend_request: [0, 0, []],
        message_privacy: false
    },
    {
        name: 'hanna',
        password: '123',
        message_queue: [0, 0, []],
        friends: ['nisse', 'amanda'],
        friend_request: [0, 0, []],
        message_privacy: false
    }
];
