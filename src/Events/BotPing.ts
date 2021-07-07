import { Message } from "discord.js";

var MensionRes = [
	"Hello!!",
	"Hello {user}",
	"Hey!",
	"I was sleeping",
	"I was mining",
	"I was mining, i found {rand} diamonds.",
	"aa hi",
	"<insert response here>",
	"Good Morning.. Afternoon.. I have no clue.",
	"Hey there!",
	"You pinged me",
];

var EveryonePing = [
	"Hello {user}",
	"I was sleeping",
	"<insert response here>",
	"Good Morning.. Afternoon.. I have no clue.",
	"Hey there!",
	"This better be important information",
	"Why?",
	"no",
	"ok",
	":)",
];

function BotMensioned(msg: Message) {
	if (msg.channel.type == "news") return;
	let i = Math.floor(Math.random() * 2);
	switch (i) {
		case 1:
			msg.channel.send(RandomRes(MensionRes, msg));
			break;
		case 2:
			break;
		default:
			msg.channel.send(RandomRes(MensionRes, msg));
			break;
	}
}

function Everyone(msg: Message) {
	if (msg.channel.type == "news") return;

	let i = Math.floor(Math.random() * 3);
	switch (i) {
		case 1:
			msg.channel.send(RandomRes(EveryonePing, msg));
			break;
		case 2:
			break;
		default:
			msg.channel.send(RandomRes(EveryonePing, msg));
			break;
	}
}

function RandomRes(arr: string[], msg: Message) {
	return arr[Math.floor(Math.random() * arr.length)].replace("{user}", msg.author.username).replace("{rand}", (Math.random() * 64).toFixed(0).toString());
}

export default {
	BotMensioned,
	Everyone,
};
