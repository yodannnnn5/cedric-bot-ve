const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#ffffff")
.setAuthor(`Lord Creative Linkler`, client.user.avatarURL())
.setDescription('**• [Cedric test botunu ekleyiniz .](https://discord.com/api/oauth2/authorize?client_id=1009921315232305203&permissions=8&scope=bot**• [Cedric bota Oy Ver](https://top.gg/bot/713713727794446397)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };