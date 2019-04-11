const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://78.media.tumblr.com/10b366f294d47b40d857d6e47872d0dc/tumblr_ntubqoYYsF1sqwlqgo3_250.gif")
  .setTitle("! Phoenıx")
  .setDescription('')
  .setColor(0xff0004)
  .addField("❯ Bot Davet", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=562273682848874516&scope=bot&permissions=2146958847)", )
  .addField("** ! Phoenıx • Komutlar:**", ` :white_small_square: | +eğlence: Eğlence Komutlarını Gösterir.  \n :white_small_square: | +yetkili: Yetkili Komutlarını Gösterir.  \n :white_small_square: | +anakomutlar: Ana Komutları Gösterir. \n :white_small_square: | +müzik: Müzik Komutlarını Gösterir.  \n :white_small_square: | +resimefekti: Resim Çerçevelerini Gösterir. \n :white_small_square: | +davet: Botun Davet Ve Destek Sunucusunu Atar.`)

   
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
    message.react('✅')
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
