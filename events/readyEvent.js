module.exports = (bot) => {
  console.log("Bot is loaded.")
  bot.user.setActivity(`over Fortnite Squad... | https://discord.gg/DKQUy4E`, {type: "WATCHING"})
  bot.guilds.forEach((guild, id) => {
    console.log(`Bot Username: ${bot.user.username}\nBot ID: ${bot.id}\nBot Ping: ${bot.ping}.`)
    console.log(`Bot Creator: FHGDev#6545.`)
    console.log(`[SERVER][${guild.memberCount} users] ${guild.name}(${id}).`)
  })
}
