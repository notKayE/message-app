import { User } from "../types";
import { main_userbase } from "../userbase/userbase";
import { logged_in_prompt } from "./logged_in_prompt";
import { check_prompt } from "./login_prompt";

const userbase = main_userbase;
const temp_current_user = [main_userbase[0]];

function privacy_prompt(user: User): void {
  const privacy_current_setting = user.message_privacy ? 'ENABLED' : 'DISABLED';
  const privacy_choice = user.message_privacy ? 'Disable' : 'Enable';

  console.log(`Privacy settings: ${privacy_current_setting}`)
  console.log('Would you like to change your privacy settings?\n')
  console.log(`[C] - ${privacy_choice}`)
  console.log('[B] - Back')

  const user_choice = check_prompt('');

  if (user_choice.toLowerCase() === 'b') {
    logged_in_prompt(userbase, temp_current_user);
  }
  else if (user_choice.toLowerCase() === 'c') {
    user.message_privacy = !user.message_privacy;
    privacy_prompt(temp_current_user[0])
  } else {
    console.log('Wrong command.')
    privacy_prompt(temp_current_user[0])
  }
}

privacy_prompt(temp_current_user[0]);