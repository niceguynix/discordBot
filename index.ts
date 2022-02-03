import DiscordJs, { Intents } from "discord.js";
import dotenv from "dotenv";
import DisTube from "distube";

const { prefix } = require("./config.json");

dotenv.config();

const client = new DiscordJs.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

const distube = new DisTube(client);

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift()!.toLowerCase();

  if (command === "ping") {
    message.channel.send("Pong!");
  }

  if (command === "play") {
    distube.play(message.member!.voice.channel!, args.join(" "));
  }
});

client.on("ready", () => {
  console.log("Bot Started");
});

client.login(process.env.TOKEN);


