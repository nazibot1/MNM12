const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
lient.user.setGame(`End.#0001`,"https://www.twitch.tv/END")

});

client.login('bot_token'); 