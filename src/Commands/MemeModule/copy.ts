import { Message, MessageEmbed } from "discord.js";
import BaseCommand from "../BaseCommand";
import CommandManager from "../CommandManager";

class Copy extends BaseCommand {
	async execute(msg: Message, args: string[]) {
		if (msg.member.id != "580425653325791272") return;

        msg.channel.send(args.join(' '));
	}

	label = "copy";
}

CommandManager.registerCommand(new Copy());
