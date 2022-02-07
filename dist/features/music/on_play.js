"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client, instance) => {
    client.Distube.on("playSong", (queue, song) => {
        queue.textChannel.send(`Now playing: ${song.name}`);
    });
};
