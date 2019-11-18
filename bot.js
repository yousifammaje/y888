const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '#'

client.on('ready', () => {

   client.user.setGame("help | Upgrading");

}); 

  

client.on('message', msg => {

  if (msg.content === 'inv') {

    msg.reply('**THE MAN Support : https://discordapp.com/api/oauth2/authorize?client_id=505080628715192351&permissions=8&scope=bot .**');

  }

});

client.on('message', msg => {

  if (msg.content === 'support') {

    msg.reply('**THE MAN Support Server : https://discord.gg/89jN9Eu .**');

  }

});

client.on('message', message => {

          

           if (message.content.startsWith("user")) {

                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {

      let member = client.guilds.get(message.guild.id).members.get(message.author.id);

      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);

      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);

      var moment = require('moment');

      var args = message.content.split(" ").slice(1);

let user = message.mentions.users.first();

var men = message.mentions.users.first();

var heg;

if(men) {

     heg = men

} else {

     heg = message.author

}

var mentionned = message.mentions.members.first();

  var h;

if(mentionned) {

     h = mentionned

} else {

     h = message.member

}

        moment.locale('ar-TN');

      var id = new  Discord.RichEmbed()

       

    .setColor("#0a0909")

.setThumbnail(message.author.avatarURL)

.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 

.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  

    message.channel.sendEmbed(id);

})

}

    

         

     });

client.on('message', message => {

          

           if (message.content.startsWith("معلوماتي")) {

                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {

      let member = client.guilds.get(message.guild.id).members.get(message.author.id);

      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);

      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);

      var moment = require('moment');

      var args = message.content.split(" ").slice(1);

let user = message.mentions.users.first();

var men = message.mentions.users.first();

var heg;

if(men) {

     heg = men

} else {

     heg = message.author

}

var mentionned = message.mentions.members.first();

  var h;

if(mentionned) {

     h = mentionned

} else {

     h = message.member

}

        moment.locale('ar-TN');

      var id = new  Discord.RichEmbed()

       

    .setColor("#0a0909")

.setThumbnail(message.author.avatarURL)

.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 

.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  

    message.channel.sendEmbed(id);

})

}

    

         

     });

client.on('message', message => {

var args = message.content.split(" ").slice(1);    

if(message.content.startsWith('هوية')) {

var year = message.author.createdAt.getFullYear()

var month = message.author.createdAt.getMonth()

var day = message.author.createdAt.getDate()

var men = message.mentions.users.first();  

let args = message.content.split(' ').slice(1).join(' ');

if (args == '') {

var z = message.author;

}else {

var z = message.mentions.users.first();

}

let d = z.createdAt;          

let n = d.toLocaleString();   

let x;                       

let y;                        

if (z.presence.game !== null) {

y = `${z.presence.game.name}`;

} else {

y = "No Playing... |💤.";

}

if (z.bot) {

var w = 'بوت';

}else {

var w = 'عضو';

}

let embed = new Discord.RichEmbed()

.setColor("#502faf")

.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)

.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)

.addField('♨| Playing:','**'+y+'**' , true)

.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    

.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)

.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    

.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())

.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)

.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});

    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});

client.on('message', message => {

var args = message.content.split(" ").slice(1);    

if(message.content.startsWith('هويه')) {

var year = message.author.createdAt.getFullYear()

var month = message.author.createdAt.getMonth()

var day = message.author.createdAt.getDate()

var men = message.mentions.users.first();  

let args = message.content.split(' ').slice(1).join(' ');

if (args == '') {

var z = message.author;

}else {

var z = message.mentions.users.first();

}

let d = z.createdAt;          

let n = d.toLocaleString();   

let x;                       

let y;                        

if (z.presence.game !== null) {

y = `${z.presence.game.name}`;

} else {

y = "No Playing... |💤.";

}

if (z.bot) {

var w = 'بوت';

}else {

var w = 'عضو';

}

let embed = new Discord.RichEmbed()

.setColor("#502faf")

.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)

.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)

.addField('♨| Playing:','**'+y+'**' , true)

.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    

.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)

.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    

.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())

.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)

.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});

    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});

client.on('message', message => {

var args = message.content.split(" ").slice(1);    

if(message.content.startsWith('id')) {

var year = message.author.createdAt.getFullYear()

var month = message.author.createdAt.getMonth()

var day = message.author.createdAt.getDate()

var men = message.mentions.users.first();  

let args = message.content.split(' ').slice(1).join(' ');

if (args == '') {

var z = message.author;

}else {

var z = message.mentions.users.first();

}

let d = z.createdAt;          

let n = d.toLocaleString();   

let x;                       

let y;                        

if (z.presence.game !== null) {

y = `${z.presence.game.name}`;

} else {

y = "No Playing... |💤.";

}

if (z.bot) {

var w = 'بوت';

}else {

var w = 'عضو';

}

let embed = new Discord.RichEmbed()

.setColor("#502faf")

.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)

.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)

.addField('♨| Playing:','**'+y+'**' , true)

.add
