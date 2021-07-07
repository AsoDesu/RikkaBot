import { MessageEmbed } from "discord.js";

export default (title: string, text: string) =>
	new MessageEmbed({
		title: title,
		description: "<:BK_Success:853322923687018546> " + text,
		color: "33A7FF"
	});
