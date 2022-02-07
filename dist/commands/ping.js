"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    callback: ({ message, client }) => {
        message.channel.send("Pong!");
    },
};
