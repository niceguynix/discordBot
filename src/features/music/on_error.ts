import { Message, TextBasedChannel, TextChannel } from "discord.js";
import { Client } from "../../type";
import WOKCommands from "wokcommands";

export default  (client:Client, instance:WOKCommands) => {
  client.Distube.on("error",(channel, error) => channel.send(
    "Error: " + error
));
}