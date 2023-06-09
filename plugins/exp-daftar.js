import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "Pilih Umur Mu Di Sini!",
	rows: [
	    {title: "Umur Random", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10'])}
	]
    },
    {
	title: "O L D",
	rows: [
	    {title: "30 Th", rowId: '.daftar ' + namae + '.30 '},
	    {title: "29 th", rowId: '.daftar ' + namae + '.29 '},
	    {title: "28 th", rowId: '.daftar ' + namae + '.28 '},
	{title: "27 th", rowId: '.daftar ' + namae + '.27 '},
	{title: "26 th", rowId: '.daftar ' + namae + '.26 '},
	{title: "25 th", rowId: '.daftar ' + namae + '.25 '},
	{title: "24 th", rowId: '.daftar ' + namae + '.24 '},
	{title: "23 th", rowId: '.daftar ' + namae + '.23 '},
	{title: "22 th", rowId: '.daftar ' + namae + '.22 '},
	{title: "21 th", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "Y O U N G",
	rows: [
	    {title: "20 th", rowId: '.daftar ' + namae + '.20 '},
	    {title: "19 th", rowId: '.daftar ' + namae + '.19 '},
	    {title: "18 th", rowId: '.daftar ' + namae + '.18 '},
	{title: "17 th", rowId: '.daftar ' + namae + '.17 '},
	{title: "16 th", rowId: '.daftar ' + namae + '.16 '},
	{title: "15 th", rowId: '.daftar ' + namae + '.15 '},
	{title: "14 th", rowId: '.daftar ' + namae + '.14 '},
	{title: "13 th", rowId: '.daftar ' + namae + '.13 '},
	{title: "12 th", rowId: '.daftar ' + namae + '.12 '},
	{title: "11 th", rowId: '.daftar ' + namae + '.11 '},
	{title: "10 th", rowId: '.daftar ' + namae + '.10 '},
	{title: "9 th", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `│›Tolong pilih umurmu di pilihan button...`,
  footer: `┗ *ʏᴏᴜʀ ɴᴀᴍᴇ:* ${conn.getName(m.sender)}\n<❔> Ingin nama kostum? type *${usedPrefix + command} namamu.umur*`,
  title: "▢- - - - - ʀᴇɢɪsᴛᴇʀ - - - - -",
  buttonText: "Click Here !",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'Dasar Tua (。-`ω´-)'
  if (age < 5) throw 'Halah dasar bocil'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
┏─• *ᴜsᴇʀs*

│▸ *sᴛᴀᴛᴜs:* ✔︎ 𝗦𝘂𝗸𝘀𝗲𝘀 𝗠𝗲𝗻𝗱𝗮𝗳𝘁𝗮𝗿

│▸ *ɴᴀᴍᴇ:* ${name}

│▸ *ᴀɢᴇ:* ${age} ʏᴇᴀʀs

│▸ *sɴ:* ${sn}

┗────···

*𝗥𝗨𝗟𝗘𝗦*

▸ 𝘑𝘢𝘯𝘨𝘢𝘯 𝘚𝘱𝘢𝘮, 𝘬𝘢𝘭𝘰 𝘣𝘰𝘵 𝘵𝘪𝘥𝘢𝘬 𝘮𝘦𝘯𝘫𝘢𝘸𝘢𝘣 𝘣𝘦𝘳𝘪 𝘫𝘦𝘥𝘢 5 𝘥𝘦𝘵𝘪𝘬

▸ 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 𝘣𝘰𝘵 𝘥𝘦𝘯𝘨𝘢𝘯 𝘣𝘪𝘫𝘢𝘬

▸ 𝘚𝘦𝘭𝘦𝘣𝘪𝘩𝘯𝘺𝘢 𝘖𝘸𝘯𝘦𝘳 𝘢𝘥𝘢𝘭𝘢𝘩 𝗗𝗲𝘄𝗮


`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'- - - - - ʀᴇɢɪsᴛᴇʀ - - - - -',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/25677558edc61ac8609b6.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
