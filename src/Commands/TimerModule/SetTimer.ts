import { Message, MessageOptions } from "discord.js";
import Delay from "../../Utils/Delay";
import BaseCommand from "../BaseCommand";
import CommandManager from "../CommandManager";

class SetTimer extends BaseCommand {
	async execute(msg: Message, args: string[]) {
		msg.channel.send("Set timer for " + args[0] + " mins");

		await Delay(parseInt(args[0]) * 60000);

		msg.channel.send(`<@${msg.author.id}>, Your Timer!!`);
	}

	label = "settimer";
	Args = ["(Time In Mins)"];
}

CommandManager.registerCommand(new SetTimer());
