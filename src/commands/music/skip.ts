import { Guild, GuildTextBasedChannel } from "discord.js";
import { ICommand } from "../../type";

export default {
  callback: ({ message, client }) => {
    client.Distube.skip(message);
  },
} as ICommand;
