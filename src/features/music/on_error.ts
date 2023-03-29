import { Message, TextBasedChannel, TextChannel } from "discord.js";
import { Client } from "../../type";
import WOKCommands from "wokcommands";

export default  (instance:WOKCommands,client:Client) => {
  // console.log(client.Distube);
  // client.Distube.addListener()
  client.Distube.on("error",(channel, error) => channel?.send(
    "Error: " + error
));
}