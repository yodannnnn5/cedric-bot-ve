


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/749380170351116290/750088540288712914/B0oBpM.png`)
.addField("__**Bot Verileri**__", `<:a_:978736503805071370>  **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <:a_:978736503805071370>  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <:a_:978736503805071370>  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<:a_:978736503805071370>  **Bot Sahibi**  <@978736503805071370> \n **Cedric#6371** \n\n <:a_:978736503805071370> \ **Bot Geliştiricisi**  <@978736503805071370> \n **Bay Cedric#6371** \n\n <:a_:978736503805071370>  **Bot Sahibi**  <@978736503805071370> \n **Cedric#6371** \n`)
.addField("__**Sürümler**__", `<:a_:978736503805071370978736503805071370978736503805071370>  **Discord.js Sürümü** **|**  **v${Discord.version}** \n<:a_:978736503805071370>  **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<:a_:978736503805071370978736503805071370>  **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<:a_:978736503805071370>  " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setColor("#ffffff")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}