const { Client, RichEmbed } = require("discord.js");
const { CommandHandler } = require("djs-commands");
const client = new Client({ disableEveryone: true });
var approx = require('approximate-number');
const config = require("./config.json");
const CH = new CommandHandler({
    folder: __dirname + "/Commands/",
    prefix: config.prefix 
});


client.on("ready", () => {
    console.log("Xenon V2 XD");
    client.user.setActivity(`Subscribe Jastin Ch`, {type: "LISTENING"})
});

client.on("message", async (message) => {

    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(client,message,args)
    }catch(e){
        console.log(e)
    }

});

let info = client.emojis.get("655091815401127966") || "ℹ️" //https://cdn.discordapp.com/emojis/655091815401127966.png?v=1

client.on("guildCreate", guild => {
  
      let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    
})

client.login(config.token)