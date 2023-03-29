import DiscordJs,{IntentsBitField , Partials,GatewayIntentBits} from "discord.js";
import WOK from "wokcommands";
import dotenv from "dotenv";
import DisTube, { DisTubeBase } from "distube";
import {YtDlpPlugin} from '@distube/yt-dlp'
import {Client} from './type';
import path from "path";
dotenv.config()

const client = new DiscordJs.Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildVoiceStates,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

(client as Client).Distube = new DisTube(client,{plugins:[new YtDlpPlugin()]})
// { youtubeDL: false,ytdlOptions:{} }

client.on("ready", () => {
  console.log("Bot Started");
  new WOK({
    client,
    commandsDir: path.join(__dirname, "commands"),

    featuresDir: path.join(__dirname, "features"),
  });
  console.log("Command Handler initialized");
});

client.login(process.env.TOKEN);
