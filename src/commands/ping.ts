import { ICommand } from "../type";

export default {
  callback: ({ message, client }) => {
    message.channel.send("Pong!");
  },
} as ICommand;
