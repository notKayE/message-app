import { User, UserBase, CurrentUser } from "../types";
import { logged_in_prompt } from "./logged_in_prompt";
import { check_prompt } from "./main_prompt";

export function privacy_settings_prompt(userbase: UserBase, currentUser: CurrentUser): void {
  console.log('Choose action')
    console.log('[C] - Change password')
    console.log('[P] - Privacy')
    console.log('[B] - Go back')

    const action: string = check_prompt('', true)

    if (action === 'C') {
      change_password_prompt(userbase, currentUser)
    } else if (action === 'P') {
      privacy_prompt(userbase, currentUser)
    } else if (action === 'B') {
      logged_in_prompt(userbase, currentUser)
    } else {
      console.log("Unknown command\n")
      privacy_settings_prompt(userbase, currentUser)
    }
}

function privacy_prompt(userbase: UserBase, currentUser: CurrentUser): void {
  const user: User = currentUser[0]
  const privacy_current_setting: string = user.message_privacy ? 'ENABLED' : 'DISABLED';
  const privacy_choice: string = user.message_privacy ? 'Disable' : 'Enable';

  console.log(`Privacy settings: ${privacy_current_setting}`)
  console.log('Would you like to change your privacy settings?\n')
  console.log(`[C] - ${privacy_choice}`)
  console.log('[B] - Back')

  const user_choice: string = check_prompt('', true);

  if (user_choice.toLowerCase() === 'b') {
    privacy_settings_prompt(userbase, currentUser);
  } else if (user_choice.toLowerCase() === 'c') {
    user.message_privacy = !user.message_privacy;
    privacy_prompt(userbase, currentUser)
  } else {
    console.log('Wrong command.')
    privacy_prompt(userbase, currentUser)
  }
}

function change_password_prompt(userbase: UserBase, currentUser: CurrentUser): void {
  const old_password: string = check_prompt("Enter current password: ", false)

  if (old_password === currentUser[0].password) {
      const new_password: string = check_prompt("Enter new password: ", true)
      currentUser[0].password = new_password
  } else {
      console.log("\nWrong password\n")
  }

  privacy_settings_prompt(userbase, currentUser)
}