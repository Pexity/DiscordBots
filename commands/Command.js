// Require Statements
const Discord = require(?discord.js);
const config = require("../config.json");

module.exports.run = async (bot,messsage,args) => {

  let firstmessage = new Discord.RichEmbed()
  .setTitle("**Message**")
  .setDescription("This is an Edited message that has no footer. An Embed Message is a Discord message type.")
  .setColor(config.embedcolor);

  message.channel.send(firstmessage);

  let secondmessage = new Discord.Richembed()
  .setTitle("Another Message")
  .setDescription("This is another embed message that has a footer and does not have a bold title.")
  .setColor(config.embedcolor)
  .setTimestamp()
  .setFooter(config.footer);

  message.channel.send(secondmessage);

  let thirdmessage = message.channel.send("Hello!");

  let message1 = new Discord.RichEmbed()
  .setTitle("**PM Message**")
  .setDescription("I can pm you to:D")
  .setColor(config.embedcolor);

  message.author.send(message1);
  
  let message2 = message.author.send("I can pm this way too.")
}

module.exsports.help = {
  name: "command"
}