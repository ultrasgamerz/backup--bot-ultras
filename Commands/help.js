const { RichEmbed } = require("discord.js");
module.exports = class {
    constructor() {
        this.name = "help",
        this.alias = [""],
        this.usage = "**!help"
    }

    async run(client, message, args) {
        try{
            if(!args[1]) {
              
            let helpEmbed = new RichEmbed()
            .setTitle("__**Creating**__")
            .setDescription(`
            
            __**Security**__
            
            **!backup**          Create & load backups of your servers
            
            __**Others**__
            
            **!help**            Shows this message
            **!leave**           Let the bot leave
            **!ping**            Pong
            
            `)
            .setFooter(`Use \`**!help [command]\` for more info on a command.
            You can also use \`**!help [category]\` for more info on a category.`)
            .setColor("#5DBCD2")
            message.channel.send(helpEmbed)
              return;
            }

            if(args[1] === "backup") {
                const embed = new RichEmbed()
                    .setTitle(`**!backup**

Create & load backups of your servers

__**Commands**__
`)
                    .setDescription(`
                !backup create        Create a backup
                !backup delete        Delete one of your backups
                !backup info          Get information about a backup
                !backup list          Get a list of your backups
                !backup load          Load a backup
                !backup purge         Delete all your backups`)
                    .addBlankField()
                    .setFooter(`Use \`!help [command]\` for more info on a command.
You can also use \`!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(embed)
            }

            if(args[1] === "help") {
                let showsThisMessageEmbed = new RichEmbed()
                    .setTitle("**!help [command]**")
                    .setDescription("Shows this message")
                    .addBlankField()
                    .setFooter(`Use \`!help [command]\` for more info on a command.
You can also use \`!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(showsThisMessageEmbed);
            }

          /*  if(args[1] === "invite") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**x!invite**")
                    .setDescription("Invite Xenon")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(inviteEmbed)
            }*/

            if (args[1] === "leave") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**!leave**")
                    .setDescription("Let the bot leave")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

            if (args[1] === "ping") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**!ping**")
                    .setDescription("Pong")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

        }catch(e) {
            throw e;
        }
    }
}