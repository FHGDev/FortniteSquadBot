let prefix = "fs!"
let request = require('snekfetch')
let discord = require('discord.js')

module.exports = (bot, message) => {
  if (message.content == prefix+"help") {
    message.channel.send(`No commands yet, FHGDev is still working to get me up and functional.`)
  }
  if (message.content == prefix+"meme") {
    let img = require("imgflipper")
    let imgflipper = new img()
    let embed = new discord.RichEmbed()
    imgflipper.generateMeme().then(meme => {
      embed.setImage(meme)
    })
  }
}
