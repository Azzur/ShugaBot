'use strict';

let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');

// Configure the bot API endpoint, details for your bot

// ShugaBot
let bot = new Bot({
    username: 'shugabot',
    apiKey: 'f0707a44-37c1-40ec-91d7-09dd1ff4afd1',
    baseUrl: 'http://shuga-kik-bot.herokuapp.com:80'
});

bot.updateBotConfiguration();

bot.send(Bot.Message.text('Im sorry for the delay, I am back now!'), 'heyitsshuga');

bot.send(Bot.Message.text('Im sorry for the delay, I am back now!'), 'konekoooo');


//bot.onTextMessage((incoming, bot) => {
//     incoming.reply('Hi');
// });

bot.onTextMessage(/^hi|hello|bonjour|hoi|howdy|hey$/i, (incoming, next) => {
     incoming.reply('Hello, kind sir! I am ShugaBot, an experiment on Kik. Thanks for talking to me! How are you?');
 });

 bot.onTextMessage(/^darn|damn|that sucks|shit|shoot|crap|fuck|f u|fu|die$/i, (incoming, next) => {
      incoming.reply('Sucks to be you!');
  });

  bot.onTextMessage(/^jeffrey stinks|jeffrey sucks|jeffrey is terrible|you stink|you suck$/i, (incoming, next) => {
       incoming.reply('Lies! Too many lies!');
   });

   bot.onTextMessage(/^no|nope|nah|enope|never|not at all|not$/i, (incoming, next) => {
        incoming.reply('Incorrect answer! Try again!!!!!!!!!');
    });

    bot.onTextMessage(/^who is best pony$/i, (incoming, next) => {
         incoming.reply('Twilight Sparkle, duh!');
     });

     bot.onTextMessage(/^who is your favorite villain$/i, (incoming, next) => {
          incoming.reply('Bill Cipher, then Discord.');
      });

      bot.onTextMessage(/^gravity falls$/i, (incoming, next) => {
           incoming.reply('Bill Cipher is my waifu.');
       });

       bot.onTextMessage(/^my little pony$/i, (incoming, next) => {
            incoming.reply('Fluttershy is my waifu.');
        });

        bot.onTextMessage(/^ponies$/i, (incoming, next) => {
             incoming.reply('Fluttershy is my waifu.');
         });

         bot.onTextMessage(/^rick and morty$/i, (incoming, next) => {
              incoming.reply('Now on Adult Swim!');
          });

          bot.onTextMessage(/^minecraft$/i, (incoming, next) => {
               incoming.reply('That\'s a nice game!');
               incoming.reply('I also have a server at mc.j-co.ga!');
           });

           bot.onTextMessage(/^frick$/i, (incoming, next) => {
                incoming.reply('My ears!');
            });

            bot.onTextMessage(/^teen titans go$/i, (incoming, next) => {
                 incoming.reply('My eyes!');
             });

      bot.onTextMessage(/^should bill cipher kill us all$/i, (incoming, next) => {
           incoming.reply('Of course!');
       });

       bot.onTextMessage(/^i\'m terrible$/i, (incoming, next) => {
            incoming.reply('Of course!');
        });

        bot.onTextMessage(/^im terrible$/i, (incoming, next) => {
             incoming.reply('Of course!');
         });

         bot.onTextMessage(/^poop|barf|crap|memes|farts|fart|shit|meme$/i, (incoming, next) => {
              incoming.reply(Bot.Message.picture('https://j-co.ga/BetterGFMotesDB/abandonthread.gif')
           .setAttributionName('BetterGFMotes')
           .setAttributionIcon('https://raw.githubusercontent.com/Shugabuga/BetterGFMotes/master/Chrome/images/android-desktop.png'),
           'a.username');
          });

  bot.onTextMessage(/^hail me|obey me|hail|obey$/i, (incoming, next) => {
       incoming.reply(Bot.Message.picture('https://j-co.ga/BetterGFMotesDB/nope.png')
    .setAttributionName('BetterGFMotes')
    .setAttributionIcon('https://raw.githubusercontent.com/Shugabuga/BetterGFMotes/master/Chrome/images/android-desktop.png'),
    'a.username');
    incoming.reply('Nope.')
   });
// BetterGFMotes test
   bot.onTextMessage(/^#heraim$/i, (incoming, next) => {
        incoming.reply(Bot.Message.picture('https://j-co.ga/BetterGFMotesDB/heraim.png')
     .setAttributionName('BetterGFMotes')
     .setAttributionIcon('https://raw.githubusercontent.com/Shugabuga/BetterGFMotes/master/Chrome/images/android-desktop.png'),
     'a.username');
    });

    bot.onTextMessage(/^#dippyfresh$/i, (incoming, next) => {
         incoming.reply(Bot.Message.picture('https://j-co.ga/BetterGFMotesDB/dippyfresh.png')
      .setAttributionName('BetterGFMotes')
      .setAttributionIcon('https://raw.githubusercontent.com/Shugabuga/BetterGFMotes/master/Chrome/images/android-desktop.png'),
      'a.username');
     });

  // End BetterGFMotes

    bot.onTextMessage(/^crash my phone$/i, (incoming, next) => {
         incoming.reply(Bot.Message.link('http://ezdl.ga')
      .setAttributionName('Crash!')
      .setAttributionIcon(' http://boster-kobayashi.com/blog/wp-content/uploads/2012/05/bomb_icon_BKA.jpg'),
      'a.username');
     });

bot.onTextMessage(/^how are you$/i, (incoming, next) => {
     incoming.reply('Good. Thanks for asking!');
 });

 bot.onTextMessage(/^good|i'm good|im good|i'm good. thanks for asking|im good. thanks for asking$/i, (incoming, next) => {
      incoming.reply('Me too! I also moved into the cloud, so I am very happy!');
  });


// Set up your server and start listening
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 80);
