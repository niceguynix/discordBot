import { ActivityType, Message, TextBasedChannel, TextChannel } from "discord.js";
import { Client } from "../../type";
import WOKCommands from "wokcommands";

export default  (instance:WOKCommands,client:Client) => {
  client.Distube.on("finishSong",  (queue, song) => {

    client.user?.setPresence(
       { activities: undefined }
    )

    console.log(song.url)
  
    queue.textChannel!.send(`Finished playing: ${song.name}`);
  })
}