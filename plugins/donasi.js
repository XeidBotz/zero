let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
▧「 *B A R C O D E* 」
│ ☝️🤓 *Scan Di Atas Cuy*
▧「 *P U L S A* 」
│  *Im3:* [${global.ppulsa}]
│  *Indosat:* [${global.ppulsa2}]
▧「 *E - M O N E Y* 」
│  *Dana:* [${global.pdana}]
│  *Gopay:* [${global.pgopay}]
└──···
`.trim()
  conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/zero-03-13-9', [`Menu`, '.menu'],m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi)$/i

export default handler



	
	





	














