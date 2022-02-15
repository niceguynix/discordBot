"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const distube_1 = require("distube");
exports.default = {
    callback: ({ message, client }) => {
        if (!(0, distube_1.isTextChannelInstance)(message.channel)) {
            return message.reply('Use this command in a server pls');
        }
        if (!message.member?.voice.channel) {
            return message.channel.send("You must be in a voice channel to use this command!");
        }
        client.Distube.play(message.member.voice.channel, message.content, {
            textChannel: message.channel,
        });
    },
};
