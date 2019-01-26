  
 
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
    name: 'Tree Shop :)',
    application_id: '477187715658547201', // ايدي البوت او ايدي الحساب حقك 
     assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
 
    }
  }
    });
    }, 5000);//سرعه تغير الصور  
});
    client.login(process.env.BOT_TOKEN);

