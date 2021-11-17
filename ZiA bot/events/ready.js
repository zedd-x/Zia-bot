  const { Client, ClientUser } = require('discord.js')
/**
 * 
 * @param {Client} client 
 */
module.exports = async(client) => {


    console.log(`${client.user.tag} Has logged in`)
   async function ll() {
        let totalMembers = 0;

        for (const guild of client.guilds.cache) {
            totalMembers += (await guild[1].members.fetch()).size;
        }

        var status = 'Say .help, Made by ! "𝗜𝘁𝘇 𝗠𝘆𝘀𝘁𝗲𝗿𝗶𝗼𝘂𝘀 𝗱𝘂𝗱𝗲𝘀ᴼᶠᶠᶦᶜᶦᵃˡ#2132 dm him if u want one bot'

        const types = ['COMPETING', 'WATCHING', "STREAMING"]     
        let randomType = types[Math.floor(Math.random() * types.length)]
        if (randomType === 'COMPETING') status = `@${client.user.username} help` 

        if (randomType === 'STREAMING') {
            status = `${totalMembers} members`
        }

    client.user.setPresence({activity: {type: randomType, url: "https://www.twitch.tv/", name: status}, status:  'dnd'});

    //     client.user.setPresence({activity: {type: types[Math.floor(Math.random() * types.length)], url: "https://www.twitch.tv/", name: `${status[Math.floor(Math.random() * status.length)]}`}, status:  ss[Math.floor(Math.random() * ss.length)]});


}
setInterval(() => {
    ll()
}, 5000)
}