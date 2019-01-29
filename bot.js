  
 
const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`); 
   
  // var s = ['https://cdn.hyperdev.com/paste-me.svg?1477325869954']; // صور اضافيه
var s = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293','483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293'];
  setInterval(function (){  
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/M07SEN',
    name: 'Tree Shop ❤❤😊 ',
    application_id: '477187715658547201', // ايدي البوت او ايدي الحساب حقك 
     assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
 
    }
  }
    });
    }, 5000);//سرعه تغير الصور 
});
client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ');
    var command = args[0];
    switch (command) {
        case "^clear":
            if (message.channel.type !== "text") return message.reply("** This Command is Only For Servers | :x: **");
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("** You Don't Have Access To Do This Command | :x: **");
            if (!args[1]) args[1] = 100;
            var count = parseInt(args[1]);
            if (isNaN(count)) return message.reply("** You Have To Type Number | :x: **");
            message.channel.bulkDelete(count).then(msgs => {
                message.channel.send(`** Done ** | I have Deleted ${msgs.size} Messages ...`).then(m => m.delete(5000));
                var x = 0;
                var messages = msgs.map(m => `${++x} - ${m.author.tag}  :  ${m.content.split(" ").join(" ")}`).join(`
`);
            });
    };
});
    client.login(process.env.BOT_TOKEN);

