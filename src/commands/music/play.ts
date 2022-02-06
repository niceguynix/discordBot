import { Guild, GuildTextBasedChannel } from "discord.js";
import { ICommand } from "../../type";

export default {
  callback: ({ message, client }) => {
    client.Distube.play(message.member!.voice.channel!, message.content, {
      textChannel: message.channel as GuildTextBasedChannel,
    });
  },
} as ICommand;
