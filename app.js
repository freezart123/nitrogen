const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('generate-password');

client.on('ready', () => {
  var i = 0;
    while (i<100) { //Number of messages
var password = generator.generate({
    length: 16, // nitro = 16 metals = 24
    numbers: true
    });
    bot.channels.get(`708471654870679572`).send("https://discord.gift/" + password)
 i++;
}
 });
 



client.login('');  
