import "dotenv/config";
import discord from "discord.js";
import fs from "fs";

// Events
import OnMessage from "./Events/Message";

const Client = new discord.Client();

function GetCommandsInDir(dir: string) {
	fs.readdirSync(dir, { withFileTypes: true, encoding: "utf-8" }).forEach((file) => {
		if (file.isDirectory()) {
			GetCommandsInDir(dir + "/" + file.name);
			return;
		}
		require(`${dir}/${file.name}`);
	});
}

GetCommandsInDir(__dirname + "/Commands");

Client.on("message", (e) => {
	OnMessage(e);
});

Client.on("ready", () => {
	console.log("Connected to discord!!");
});

Client.login(process.env.TOKEN);

export default Client;
