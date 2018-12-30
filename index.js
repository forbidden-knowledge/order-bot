const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
const schedule = [05, 13, 21]; //GMT+0
const truce = [1546214400, 1546430400];
const chatID = '-1001185995965';

setInterval(() => {
    const d = new Date();
	if(schedule.indexOf(d.getHours())!=-1 && d.getMinutes()==55) {
		const pin = generateNewOrder();
		bot.telegram.sendMessage(chatID, pin);
		console.log('Order sent: '+pin);
	}
}, 1000*60)


function generateNewOrder() {
	let castles = shuffle("🐢 🍁 🖤 🍆 🌹 🦇 🍀".split(' '));
	const urn = "⚱";
	if(Date.now()-0 > truce[0] && Date.now()-0 < truce[1]) return urn+urn+urn;
	return castles.pop()+castles.pop()+castles.pop();
}
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}