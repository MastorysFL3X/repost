const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  const davet = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("»" + client.user.username + ' | Davet Linkleri')
.setDescription(`-Hey ! Botum İle İlgili Linkler Aşağıda Bulunmaktadır ! \n-│[Davet Link](https://discordapp.com/oauth2/authorize?client_id=561431569756323850&scope=bot&permissions=805314750)  │[Destek Sunucu](https://discord.gg/KHuaN2n)│`)
message.channel.send(davet)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['linkler'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'davet',
  category: 'bot',
  description: 'Botun davet linklerini gösterir.',
  usage: '>davet'
};