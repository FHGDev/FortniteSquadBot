let prefix = "fs!"

module.exports = (bot, message) => {
  if (message.content == prefix+"help") {
    message.channel.send(`No commands yet, FHGDev is still working to get me up and functional.`)
  }
  if (message.content == prefix+"meme") {
    return;
  }
}
