import { User, UserBase, currentUser } from "../types";
import { logged_in_prompt } from "./logged_in_prompt";
import { check_prompt } from "./main_prompt";

export function privacy_prompt(userbase: UserBase, currentUser: currentUser): void {
  const user = currentUser[0]
  const privacy_current_setting = user.message_privacy ? 'ENABLED' : 'DISABLED';
  const privacy_choice = user.message_privacy ? 'Disable' : 'Enable';

  console.log(`Privacy settings: ${privacy_current_setting}`)
  console.log('Would you like to change your privacy settings?\n')
  console.log(`[C] - ${privacy_choice}`)
  console.log('[B] - Back')

  const user_choice = check_prompt('', true);

  if (user_choice.toLowerCase() === 'b') {
    logged_in_prompt(userbase, currentUser);
  }
  else if (user_choice.toLowerCase() === 'c') {
    user.message_privacy = !user.message_privacy;
    privacy_prompt(userbase, currentUser)
  } else {
    console.log('Wrong command.')
    privacy_prompt(userbase, currentUser)
  }
}