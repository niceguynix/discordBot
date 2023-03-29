"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = (instance, client) => {
    client.Distube.on("playSong", (queue, song) => {
        client.user?.setActivity(song.name, { type: discord_js_1.ActivityType.Listening, url: song.url });
        console.log(song.url);
        queue.textChannel.send(`Now playing: ${song.name}`);
    });
};
