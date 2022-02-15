"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client, instance) => {
    client.Distube.on("error", (channel, error) => channel.send("Error: " + error));
};
