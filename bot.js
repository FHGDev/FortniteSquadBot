// Discord Init

const discord = require('discord.js');
const bot = new discord.Client();


// Event Handler...

bot.on('ready', () => require('./events/readyEvent.js')(bot))
bot.on('message', message => require('./events/messageEvent.js')(bot, message))
bot.on("error", err => console.error(err))
bot.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(bot, member))
bot.on('guildMemberRemove', member => require('./events/guildMemberRemove.js')(bot, member))

// Bot Made by FHGDev#6545 for the purposes of 'Fortnite Squad' Discord Server.
