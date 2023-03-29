import Distube from "distube";
import DiscordJs, { Message, Sweepers } from "discord.js";
import {CommandObject   as command_obj,CommandUsage as callback_fn} from 'wokcommands'

export class Client extends DiscordJs.Client {
  Distube : Distube;
}

// type Ka = keyof Message // 'x' | 'y'
// type Kb = keyof  // 'y' | 'z'
// type Kc = Ka & Kb

export interface CommandUsage  extends callback_fn {
  client:Client;
  message?:Message|null;
} 


