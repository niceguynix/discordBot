import { GuildTextBasedChannel, TextBasedChannel, TextChannel, VoiceBasedChannel, VoiceChannel } from "discord.js";
import { isTextChannelInstance } from "distube";
import { CommandType ,CommandObject } from "wokcommands";
import { CommandUsage } from "../../type";

export default {
  type:CommandType.BOTH,
  description:"Play a sng",
  minArgs:1,
  maxArgs:-1,
  expectedArgs: "<args>",

  callback: ({ message,text, client,interaction ,args,member}:CommandUsage) => {
    console.log(args,text)
    let voiceChannel:VoiceBasedChannel;
    let textChannel:TextChannel;
    if(interaction){
      const guild = client.guilds.cache.get(interaction?.guildId!)!
      const member1 = guild?.members.cache.get(interaction?.member?.user?.id!)
      voiceChannel = member1?.voice.channel!
      textChannel=interaction.channel! as TextChannel
    }else{
      if(!message) return{content:"How u call that"}
      voiceChannel=message.member?.voice.channel!
      textChannel=message.channel! as TextChannel
    }
    // if( !isTextChannelInstance(message.channel) ) {
    //   return message.reply('Use this command in a server pls');
    // }


    client.Distube.play(voiceChannel , args.join(' ') , {
      textChannel
    });
      
  },
} as CommandObject;
