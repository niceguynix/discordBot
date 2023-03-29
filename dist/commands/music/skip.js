"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    description: "Skip",
    callback: ({ message, client }) => {
        if (!message)
            return;
        client.Distube.stop(message);
    },
};
