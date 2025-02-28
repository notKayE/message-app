"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.privacy_prompt = privacy_prompt;
var logged_in_prompt_1 = require("./logged_in_prompt");
var login_prompt_1 = require("./login_prompt");
function privacy_prompt(userbase, currentUser) {
    var user = currentUser[0];
    var privacy_current_setting = user.message_privacy ? 'ENABLED' : 'DISABLED';
    var privacy_choice = user.message_privacy ? 'Disable' : 'Enable';
    console.log("Privacy settings: ".concat(privacy_current_setting));
    console.log('Would you like to change your privacy settings?\n');
    console.log("[C] - ".concat(privacy_choice));
    console.log('[B] - Back');
    var user_choice = (0, login_prompt_1.check_prompt)('');
    if (user_choice.toLowerCase() === 'b') {
        (0, logged_in_prompt_1.logged_in_prompt)(userbase, currentUser);
    }
    else if (user_choice.toLowerCase() === 'c') {
        user.message_privacy = !user.message_privacy;
        privacy_prompt(userbase, currentUser);
    }
    else {
        console.log('Wrong command.');
        privacy_prompt(userbase, currentUser);
    }
}
