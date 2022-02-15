import { ICommand } from "../../type";

export default {
  callback: ({ message, client }) => {
    client.Distube.stop(message);
  },
} as ICommand;
