const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffffff') 
.setAuthor(`Cedric_exp Müzik Komutları`, client.user.avatarURL())
.setDescription(`<:a_:ayitKanal_>  cedric botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Müzik Oynat__`,`<:a_:ayitKanal_>  \`${prefix}oynat\` İstediğiniz Şarkıyı Başlatır`,true)
.addField(`__Müziği Duraklat__`,`<:a_:ayitKanal_>  \`${prefix}duraklat\` Şarkıyı Durdurur`,true)
.addField(`__Müziği Devam Ettir__`,`<:a_:ayitKanal_>  \`${prefix}devam\` Şarkıyı Devam Ettirir`,true)
.addField(`__Müziği Geç__`,`<:a_:ayitKanal_>  \`${prefix}atla\` Şarkıyı Atlar`,true)
.addField(`__Müziği Durdur__`,`<:a_:ayitKanal_>  \`${prefix}durdur\` Şarkıyı Kapatıp Odadan Çıkar`,true)
.addField(`__Müzik Kuyruğu__`,`<:a_:ayitKanal_ayitKanal_ayitKanal_ayitKanal_ayitKanal_ayitKanal_ayitKanal_>  \`${prefix}kuyruk\` Şarkı Kuyruğunu Gösterir`,true)
.addField(`__Müzik Döngüsü__`,`<:a_:ayitKanal_ayitKanal_ayitKanal_ayitKanal_ayitKanal_ayitKanal_>  \`${prefix}döngü\` Şarkıyı Döngüye Sokar`,true)
.addField(`__Ses Seviyesi__`,`<:a_:ayitKanal_ayitKanal_ayitKanal_ayitKanal_ayitKanal_>  \`${prefix}ses\` Ses Seviyesini Ayarlarsınız`,true)
.addField(`__Kuyruğu Temizle__`,`<:a_:ayitKanal_ayitKanal_ayitKanal_ayitKanal_>  \`${prefix}kuyruk-temizle\` Kuyruk Listesini Temizler`,true)
.addField(`__Kuyruğu Karıştır__`,`<:a_:ayitKanal_ayitKanal_ayitKanal_>  \`${prefix}karıştır\` Kuyruktaki Şarkıları Karıştırır`,true)
.addField(`__Bilgilendirme__`,`<:a_:ayitKanal_ayitKanal_>  \`${prefix}davet\` | Cedric_exp'yi Sunucunuza Davet Edersiniz\n<:a_:ayitKanal_>  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <:a_:821738957997211659>  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://logos.flamingtext.com/City-Logos/Cedric-Logo.webp`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "müzik",
  aliases: []
}
