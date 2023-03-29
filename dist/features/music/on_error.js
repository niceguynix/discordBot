"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (instance, client) => {
    // console.log(client.Distube);
    // client.Distube.addListener()
    client.Distube.on("error", (channel, error) => channel?.send("Error: " + error));
};
