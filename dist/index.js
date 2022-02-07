"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
const wokcommands_1 = __importDefault(require("wokcommands"));
const dotenv_1 = __importDefault(require("dotenv"));
const distube_1 = __importDefault(require("distube"));
const path_1 = __importDefault(require("path"));
const { prefix } = require("../config.json");
dotenv_1.default.config();
const client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
});
client.Distube = new distube_1.default(client, { youtubeDL: false });
client.on("ready", () => {
    console.log("Bot Started");
    const n = new wokcommands_1.default(client, {
        commandsDir: path_1.default.join(__dirname, "commands"),
        featuresDir: path_1.default.join(__dirname, 'features'),
        typeScript: __filename.endsWith('.ts'),
    }).setDefaultPrefix(prefix);
});
client.login(process.env.TOKEN);
