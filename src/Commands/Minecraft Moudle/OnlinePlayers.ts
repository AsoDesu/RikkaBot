import { Message, MessageEmbed } from "discord.js";
import BaseCommand from "../BaseCommand";
import CommandManager from "../CommandManager";
import server from "minecraft-server-util";

class OnlinePlayers extends BaseCommand {
	async execute(msg: Message, args: string[]) {
		let status = await server.status(process.env.SERVER_IP, { port: parseInt(process.env.SERVER_PORT) });
		let desc = "";

		if (status.samplePlayers.length == 0) {
			desc = "There are no players online right now D:";
		} else {
			desc = `**${status.onlinePlayers}/${status.maxPlayers}**:\n`;
			status.samplePlayers.forEach((p) => {
				desc = desc.concat(`- \`${p.name}\`\n`);
			});
		}

		msg.channel.send(
			new MessageEmbed({
				title: `${status.description}`,
				description: desc,
				color: "33A7FF",
			})
		);
	}

	label = "online";
}

CommandManager.registerCommand(new OnlinePlayers());
