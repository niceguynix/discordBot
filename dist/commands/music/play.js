"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    callback: ({ message, client }) => {
        client.Distube.play(message.member.voice.channel, message.content, {
            textChannel: message.channel,
        });
    },
};
