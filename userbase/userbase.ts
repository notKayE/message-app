import { add_friend } from "../friends_functions";
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
  const random_amount_of_friends = Math.floor(Math.random() * 8); // 0 - 7 friends
  const friends_to_add = Array.from({length: random_amount_of_friends}, () => ub[Math.floor(Math.random() * ub.length)]); // Random friends in array

  friends_to_add.forEach(friend => add_friend(ub[i].name, friend.name, ub));
}

console.log(ub)
