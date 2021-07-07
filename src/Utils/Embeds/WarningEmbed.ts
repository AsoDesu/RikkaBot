import { MessageEmbed } from "discord.js";

export default (title: string, text: string) =>
	new MessageEmbed({
		title: title,
		description: "<:BK_Warning:853322936215011359> " + text,
		color: "ffaa33",
	});
