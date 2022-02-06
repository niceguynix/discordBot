import { Message, TextBasedChannel, TextChannel } from "discord.js";
import { Client } from "../../type";
import WOKCommands from "wokcommands";

export default  (client:Client, instance:WOKCommands) => {
  client.Distube.on("playSong",  (queue, song) => {
    queue.textChannel!.send(`Now playing: ${song.name}`);
    
  })
}


