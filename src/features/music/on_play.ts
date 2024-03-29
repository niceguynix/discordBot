import { ActivityType, Message, TextBasedChannel, TextChannel } from "discord.js";
import { Client } from "../../type";
import WOKCommands from "wokcommands";

export default  (instance:WOKCommands,client:Client) => {
  client.Distube.on("playSong",  (queue, song) => {

    client.user?.setActivity(
      song.name!, { type: ActivityType.Listening ,url:song.url}
    )

    console.log(song.url)
  
    queue.textChannel!.send(`Now playing: ${song.name}`);
  })
}