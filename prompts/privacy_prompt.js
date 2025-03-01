"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.privacy_settings_prompt = privacy_settings_prompt;
var logged_in_prompt_1 = require("./logged_in_prompt");
var main_prompt_1 = require("./main_prompt");
function privacy_settings_prompt(userbase, currentUser) {
    console.log('Choose action');
    console.log('[C] - Change password');
    console.log('[P] - Privacy');
    console.log('[B] - Go back');
    var action = (0, main_prompt_1.check_prompt)('', true);
    if (action === 'C') {
        change_password_prompt(userbase, currentUser);
    }
    else if (action === 'P') {
        privacy_prompt(userbase, currentUser);
    }
    else if (action === 'B') {
        (0, logged_in_prompt_1.logged_in_prompt)(userbase, currentUser);
    }
    else {
        console.log("Unknown command\n");
        privacy_settings_prompt(userbase, currentUser);
    }
}
function privacy_prompt(userbase, currentUser) {
    var user = currentUser[0];
    var privacy_current_setting = user.message_privacy ? 'ENABLED' : 'DISABLED';
    var privacy_choice = user.message_privacy ? 'Disable' : 'Enable';
    console.log("Privacy settings: ".concat(privacy_current_setting));
    console.log('Would you like to change your privacy settings?\n');
    console.log("[C] - ".concat(privacy_choice));
    console.log('[B] - Back');
    var user_choice = (0, main_prompt_1.check_prompt)('', true);
    if (user_choice.toLowerCase() === 'b') {
        privacy_settings_prompt(userbase, currentUser);
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
function change_password_prompt(userbase, currentUser) {
    var old_password = (0, main_prompt_1.check_prompt)("Enter current password: ", false);
    if (old_password === currentUser[0].password) {
        var new_password = (0, main_prompt_1.check_prompt)("Enter new password: ", true);
        currentUser[0].password = new_password;
    }
    else {
        console.log("\nWrong password\n");
    }
    privacy_settings_prompt(userbase, currentUser);
}
