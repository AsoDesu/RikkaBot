import Client from "../index";
import CommandManger from "../Commands/CommandManager";
import { Message } from "discord.js";
import BotPing from "./BotPing";

function MessageE(e: Message) {
	if (e.content.includes(e.client.user.id)) {
		BotPing.BotMensioned(e);
		return;
	} else if (e.content.includes("@everyone")) {
		BotPing.Everyone(e);
		return;
	}

	if (!e.content.startsWith(process.env.PREFIX)) return;

	const args = e.content.toLowerCase().slice(process.env.PREFIX.length).split(/ +/);
	const command = args.shift().toLowerCase();

	CommandManger.executeCommand(command, e, args);
}

export default MessageE;
