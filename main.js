const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong');
  }
  else if (msg.content === 'pute') {
    msg.channel.send('pute');
  }
  else if (msg.content === 'salope') {
    msg.channel.send('salope');
  }
});

client.login('Njg4NDgzOTQ5ODEwMjg2ODMw.Xm-CoQ.cZmcRzeu4OZ0AOy3hel_r7P27Oc');