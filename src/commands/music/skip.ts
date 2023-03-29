import { CommandType ,CommandObject } from "wokcommands";
import { CommandUsage } from "../../type";

export default {
  description:"Skip",
  callback: ({ message, client }:CommandUsage) => {
    if(!message) return
    client.Distube.stop(message);
  },
} as CommandObject;