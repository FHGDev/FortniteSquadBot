module.exports = (bot, member) => {
  member.guild.channels.get('423947624807399425').send(`Welcome to ${member.guild.name}, <@${member.id}>!`)
  console.log(`${member.name} just joined ${member.guild.name}.`)
}
