const TeleBot = require('telebot');
require('dotenv').config()

const bot = new TeleBot(process.env.BOT_TOKEN);

bot.on('text', (msg) => msg.reply.text(`testr ${msg.text}`));
bot.on('sticker', (msg) => {
  return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
});
bot.on('/hello', (msg) => {
  return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
});

bot.start();
