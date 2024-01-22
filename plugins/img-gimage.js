import fg from 'api-dylux'

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {

  if (!text) throw `💝 onyx 💝 img downloader\n\n🇱🇰 Ex: *${usedPrefix + command}* 💝 onyx 💝`

  let res = await fg.googleImage(text)

  conn.sendFile(m.chat, res.getRandom(), 'img.png', `

🇱🇰 Results : *${text}*`.trim(), m)

}

handler.help = ['imagen']

handler.tags = ['img']

handler.command = /^(img|image|gimage|imagen)$/i

handler.diamond = false

export default handler
