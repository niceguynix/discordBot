import Distube from "distube";
import DiscordJs from "discord.js";
import {ICommand as command_obj,ICallbackObject as callback_fn} from 'wokcommands'

export class Client extends DiscordJs.Client {
  Distube : Distube;
}

export interface ICallbackObject extends callback_fn{
  client: Client;
}

export interface ICommand  extends command_obj {
  callback?(obj: ICallbackObject): any
} 



