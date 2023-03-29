"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wokcommands_1 = require("wokcommands");
exports.default = {
    // Required for slash commands
    description: "Ping pong command",
    // Create a legacy and slash command
    type: wokcommands_1.CommandType.BOTH,
    // Invoked when a user runs the ping command
    callback: ({}) => {
        // Return the same object you would use in
        // message.reply
        // or
        // interaction.reply
        // WOKCommands will reply to the message or the interaction
        // depending on how the user ran the command (legacy vs slash)
        return {
            content: "Pong!",
        };
    },
};
