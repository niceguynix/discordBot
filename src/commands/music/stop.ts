import { Command, CommandObject, CommandType } from "wokcommands"
import { CommandUsage } from "../../type";

export default {
  callback: ({ message, client }:CommandUsage) => {
    if (message==null)
      return
    client.Distube.stop(message);
  },
} as CommandObject;
