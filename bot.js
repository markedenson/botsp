const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("544994259607224323")
setInterval(function() {
channel.send(`Regaz Regaz Regaz`);
}, 30)
})

client.login(process.env.BOT_TOKEN);