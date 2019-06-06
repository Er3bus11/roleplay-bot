const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTg1OTc4MzQ0MjE5MDgyNzcy.XPh5yg.T3o0xkdrDNWhT5whcFdZuDy3vbo);//BOT_TOKEN is the Client Secret
