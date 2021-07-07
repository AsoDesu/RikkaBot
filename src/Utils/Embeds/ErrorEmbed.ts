import { MessageEmbed } from "discord.js";

export default (title: string, text: string) =>
	new MessageEmbed({
		title: title,
		description: "<:BK_Error:853322910553735259> " + text,
		color: "ff3333",
	});
