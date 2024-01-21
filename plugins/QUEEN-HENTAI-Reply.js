
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/35390789044f4122413b3.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'ᴏɴʏx', description: 'ᴏɴʏx', title: packname, body: 'ᴏɴʏx', thumbnailUrl: pp, sourceUrl: dygp }}} 
	
	//reply link PayPal
    global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'ᴏɴʏx', description: 'ᴏɴʏx', title: 'ʏᴏᴜᴛᴜʙᴇ', body: 'ᴏɴʏx', thumbnailUrl: pp, sourceUrl: fgyt }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: fgyt, mediaType: 'ᴏɴʏx', description: 'ᴏɴʏx : ' + fgyt, title: 'ʏᴏᴜᴛᴜʙᴇ', body: 'ʙᴏᴛs', thumbnailUrl: pp, sourceUrl: fgyt }}}

} 
export default handler
