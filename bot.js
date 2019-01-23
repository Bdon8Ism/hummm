  
 
const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`); 
   
  // var s = ['https://cdn.hyperdev.com/paste-me.svg?1477325869954']; // صور اضافيه
   var s = ['screenshot_24'];  // صور  الي بتشغل
    setInterval(function (){  
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/M07SEN',
    name: 'TreeShop For Ever!!',
    application_id: '523837716027277314', // ايدي البوت او ايدي الحساب حقك 
     assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
 
    }
  }
    });
    }, 5000);//سرعه تغير الصور  
});
    client.login(process.env.BOT_TOKEN);

