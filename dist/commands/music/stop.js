"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    callback: ({ message, client }) => {
        if (message == null)
            return;
        client.Distube.stop(message);
    },
};
