"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var dotenv_1 = require("dotenv");
var distube_1 = require("distube");
var prefix = require("./config.json").prefix;
dotenv_1["default"].config();
var client = new discord_js_1["default"].Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES,
    ]
});
var distube = new distube_1["default"](client);
client.on("messageCreate", function (message) {
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;
    var args = message.content.slice(prefix.length).trim().split(" ");
    var command = args.shift().toLowerCase();
    if (command === "ping") {
        message.channel.send("Pong!");
    }
    if (command === "play") {
        distube.play(message.member.voice.channel, args.join(" "));
    }
});
client.on("ready", function () {
    console.log("Bot Started");
});
client.login(process.env.TOKEN);
