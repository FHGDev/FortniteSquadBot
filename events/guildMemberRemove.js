module.exports = (bot, member) => {
  member.guild.channels.get('423947624807399425').send(`${member.name} just left ${member.guild.name}.`)
}
