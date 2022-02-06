import DiscordJs, { Intents } from "discord.js";
import WOKCommands from "wokcommands";
import dotenv from "dotenv";
import DisTube, { DisTubeBase } from "distube";
import {Client} from './type';
import path from "path";

const { prefix } = require("../config.json");

dotenv.config();

const client = new DiscordJs.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

(client as Client).Distube = new DisTube(client, { youtubeDL: false })



client.on("ready", () => {
  console.log("Bot Started");
  const n = new WOKCommands(client, {
    commandsDir: path.join(__dirname, "commands"),
    featuresDir: path.join(__dirname, 'features'),
    typeScript: __filename.endsWith('.ts'),
  }).setDefaultPrefix(prefix);
});

client.login(process.env.TOKEN);
