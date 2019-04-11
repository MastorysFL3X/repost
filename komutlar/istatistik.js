const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('TheCAT', client.user.avatarURL)
  .addField("» Botun Sahibi",  "<@358674744817614848>")
  .addField("» Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
  .addField("» Çalışma süresi", duration)
  .addField("» Sunucular", client.guilds.size.toLocaleString(), true)
  .addField("» Kanallar", client.channels.size.toLocaleString(), true)
  .addField("» Discord.JS sürüm", "v"+Discord.version, true)
  .addField("» Ping", client.ping+" ms", true)
  .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/api/oauth2/authorize?client_id=560814849777729547&permissions=8&scope=bot)` + "** | **" + `[Destek Sunucusu](https://discord.gg/tZz8xW2)`, false);
  return msg.channel.send(istatistikler);
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'c',
  usage: 'istatistik'
};