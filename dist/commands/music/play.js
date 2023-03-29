"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wokcommands_1 = require("wokcommands");
exports.default = {
    type: wokcommands_1.CommandType.BOTH,
    description: "Play a sng",
    minArgs: 1,
    maxArgs: -1,
    expectedArgs: "<args>",
    callback: ({ message, text, client, interaction, args, member }) => {
        console.log(message);
        console.log(args, text);
        let voiceChannel;
        let textChannel;
        if (interaction) {
            const guild = client.guilds.cache.get(interaction?.guildId);
            const member1 = guild?.members.cache.get(interaction?.member?.user?.id);
            voiceChannel = member1?.voice.channel;
            textChannel = interaction.channel;
        }
        else {
            if (!message)
                return { content: "How u call that" };
            voiceChannel = message.member?.voice.channel;
            textChannel = message.channel;
        }
        // if( !isTextChannelInstance(message.channel) ) {
        //   return message.reply('Use this command in a server pls');
        // }
        client.Distube.play(voiceChannel, args.join(' '), {
            textChannel
        });
    },
};
