import { add_friend } from "../friends/friends_functions";
import { add_to_userbase, create_user, create_userbase } from "../userfunctions";

// Users and their names
const names = ['Joakim', 'Ivan', 'Elis', 'Kalle', 'Eva', 'Nisse', 'Pelle', 'Niklas', 'Johanna', 'Stina',
  'Jan', 'Andreas', 'Lina', 'Amanda', 'Per', 'Tristan', 'Froppe', 'Nina', 'Hanna'];

const password = '123';
const ub = create_userbase()

// Adds users to the DB.
for (let i = 0; i < names.length; i++) {
  const new_user = create_user(names[i], password);
  add_to_userbase(new_user, ub);
}

// Adds friends to users in DB
for (let i = 0; i < ub.length; i++) {
  // Random amount of friends and array created with said random amount of friends.
  const random_amount_of_friends = Math.floor(Math.random() * 8); // 0 - 7 friends
  const friends_to_add = Array.from({length: random_amount_of_friends}, () => ub[Math.floor(Math.random() * ub.length)]); // Random friends in array

  // Add the friends to the users friends list.
  friends_to_add.forEach(friend => {
    if (ub[i].friends.includes(friend.name) || ub[i].name === friend.name) return;
    add_friend(ub[i].name, friend.name, ub);
  })
}

console.log(ub)

// DB
const constant_userbase = [
  {
    name: 'Joakim',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Kalle', 'Eva' ]
  },
  {
    name: 'Ivan',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Elis', 'Per' ]
  },
  {
    name: 'Elis',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Andreas', 'Hanna' ]
  },
  {
    name: 'Kalle',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Lina', 'Elis' ]
  },
  {
    name: 'Eva',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Andreas', 'Nina' ]
  },
  {
    name: 'Nisse',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Nina' ]
  },
  {
    name: 'Pelle',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Tristan', 'Froppe', 'Ivan', 'Elis', 'Per', 'Nisse' ]
  },
  {
    name: 'Niklas',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [
      'Lina',    'Kalle',
      'Hanna',   'Per',
      'Andreas', 'Froppe',
      'Johanna'
    ]
  },
  {
    name: 'Johanna',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Stina', 'Joakim', 'Elis', 'Nisse' ]
  },
  {
    name: 'Stina',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Per', 'Kalle', 'Ivan' ]
  },
  {
    name: 'Jan',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Lina', 'Ivan', 'Niklas' ]
  },
  {
    name: 'Andreas',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Eva', 'Johanna', 'Joakim' ]
  },
  {
    name: 'Lina',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Nisse', 'Andreas', 'Joakim', 'Eva' ]
  },
  {
    name: 'Amanda',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Eva', 'Stina' ]
  },
  {
    name: 'Per',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Kalle', 'Nisse', 'Niklas', 'Eva', 'Tristan', 'Ivan' ]
  },
  {
    name: 'Tristan',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Froppe', 'Amanda', 'Andreas', 'Eva', 'Johanna' ]
  },
  {
    name: 'Froppe',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Kalle', 'Nina', 'Niklas' ]
  },
  {
    name: 'Nina',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: [ 'Andreas', 'Kalle', 'Jan', 'Nisse' ]
  },
  {
    name: 'Hanna',
    password: '123',
    message_queue: [ 0, 0, [] ],
    friends: []
  }
];
