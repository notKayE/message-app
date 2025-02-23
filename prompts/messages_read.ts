import { message_read_and_dequeue } from "../messages/messages_functions";
import { User } from "../types";
import { create_user } from "../userfunctions";
import { check_prompt } from "./login_prompt";

function prompts_messages(user: User) {
  console.log('[M] - Read messages.')
  const prompt_choice = check_prompt('Choose an option: ')

  if (prompt_choice.toLowerCase() === 'm') message_read_and_dequeue(user);
}

const joakim: User = create_user("joakim", "123")

prompts_messages(joakim);
