require("./module")

global.owner = "6289508082845"
global.creAtor = "6289508082845@s.whatsapp.net"
global.namaowner = "KOI"
global.namabot = "Lumine-MD"
global.thumb = fs.readFileSync("./thumb.png")
global.thumbqris = fs.readFileSync("./qris.jpg")
global.packname = "Lumine-MD"
global.author = `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nYouTube: QyuuNee\nBot: 0895-3253-44177`
global.nameGEDE = "KOI"
global.ovo = "0895-0808-2845" 
global.gopay = "0895-0808-2845"
global.shopeepay = "0895-0808-2845"
global.pulsatri = "0895-0808-2845"
global.phs = "•"
global.prefa = ['', '.']
global.antilink = false

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})