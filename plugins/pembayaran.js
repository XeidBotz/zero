let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
𝙋𝙖𝙮𝙢𝙚𝙣𝙩
└──··➪ Dana : 089529129992
└──··➪ Gopay : 089529129992
└──··➪ Axis : 083842873526
└──··➪ Three : 089529129992

✍︎𝙉𝙤𝙩𝙚 : 𝙅𝙞𝙠𝙖 𝙎𝙪𝙙𝙖𝙝 𝙏𝙧𝙖𝙣𝙨𝙛𝙚𝙧 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝙎𝙘𝙧𝙚𝙚𝙣𝙎𝙝𝙤𝙩 𝘿𝙖𝙣 𝙆𝙞𝙧𝙞𝙢𝙠𝙖𝙣 𝙆𝙚 𝙊𝙬𝙣𝙚𝙧
`.trim()
  conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/zero-03-13-9', [`𝙼𝚎𝚗𝚞`, '.menu'],m)
}
handler.help = ['pembayaran']
handler.tags = ['info']
handler.command = /^(pembayaran)$/i

handler.register = false
export default handler