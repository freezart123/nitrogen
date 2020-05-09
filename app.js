const express = require("express");

const app = express();

app.listen(3000, () => {
console.log("You app is listening to port 3000!") 
})

app.get("/", (req, res) => {
res.sendStatus(200) //OK
})

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
    client.channels.get(`708824230136905818`).send("https://discord.gift/" + password)
 i++;
}
 });
 



client.login('');  
