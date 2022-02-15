import { isTextChannelInstance } from "distube";
import { ICommand } from "../../type";

export default {
  callback: ({ message, client }) => {

    if( !isTextChannelInstance(message.channel) ) {
      return message.reply('Use this command in a server pls');
    }

    if(!message.member?.voice.channel){ 
      return message.channel.send("You must be in a voice channel to use this command!");
    }
    
    client.Distube.play(message.member.voice.channel, message.content, {
      textChannel: message.channel ,
    });
  },
} as ICommand;

