import { Message, MessageEmbed, PermissionResolvable } from "discord.js";
import ErrorEmbed from "../Utils/Embeds/ErrorEmbed";
import WarningEmbed from "../Utils/Embeds/WarningEmbed";
import BaseCommand from "./BaseCommand";

var commands: BaseCommand[] = [];

function registerCommand(cmd: BaseCommand) {
	commands.push(cmd);
}

async function executeCommand(label: string, msg: Message, args: string[]) {
	var cmd = commands.find((c) => c.label == label || c.aliases.includes(label));
	if (!cmd) return false;

	if (!msg.member.hasPermission(cmd.RequiredPermission as PermissionResolvable)) {
		msg.channel.send(ErrorEmbed("Insufficient Permission", "You don't have permssion to run this command."));
		return;
	}

	if (args.length < cmd.Args.length) {
		msg.channel.send(WarningEmbed("Incorrect Usage", `**Usage**: ?${cmd.label} ${cmd.Args.join(" ")}`));
		return;
	}

	var result = await cmd.execute(msg, args);
	if (result) {
		msg.channel.send(result);
	}
	return true;
}

export default {
	commands,
	registerCommand,
	executeCommand,
};