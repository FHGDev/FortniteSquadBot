let prefix = "fs!"
let request = require('snekfetch')
let discord = require('discord.js')

module.exports = (bot, message) => {
  if (message.content == prefix+"help") {
    message.channel.send(`No commands yet, FHGDev is still working to get me up and functional.`)
  }
  if (message.content == prefix+"meme") {
    request.get('api.imgflip.com/get_memes').then(json => {
      let meme = json.body.data.memes.url
      let embed = new discord.RichEmbed()
      .setImage(meme)
      message.channel.send({ embed })
    })
  }
}
