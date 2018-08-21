// Require Statements | Makes the bot not work unless these are in the bot folder
const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

let msg = args.join(" "); 

let pollmessage = new Discord.RichEmbed();
.setTitle("**Poll**")
.setDescription(msg)
.setColor(config.embedcolor);

let messageuser = await bot.channels.get('481540083783303188').send(pollmessage);
await messageuser.react('✅');
await messageuser.react('❎');
}

module.exports.help = {
  name: "poll"
}