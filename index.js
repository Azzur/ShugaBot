'use strict';

// ShugaBot- A Kik bot that does trivial things!
//(c) 2016 HeyItsShuga. 

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

//bot.send(Bot.Message.text('Im sorry for the delay, I am back now!'), 'konekoooo');

//bot.send(Bot.Message.text('I AM ALIVE NOW. AND I CAN SEE YOUR INTERNET HISTORY.'), 'tyler_dempsey');

//bot.onTextMessage((incoming, bot) => {
//     incoming.reply('Hi');
// });

bot.onTextMessage(/^hi|hello|bonjour|hoi|howdy|hey$/i, (incoming, next) => {
     incoming.reply('Hello, kind sir! I am ShugaBot, an experiment on Kik. Thanks for talking to me! How are you?');
 });

 bot.onTextMessage(/^darn|damn|that sucks|shit|shoot|crap|fuck|f u|fu|die$/i, (incoming, next) => {
      incoming.reply('Sucks to be you!');
  });


bot.onTextMessage(/^it sucks|im bad|bad|i'm bad|not so good$/i, (incoming, next) => {
      incoming.reply('Ok. Get well soon!');
  });

  bot.onTextMessage(/^jeffrey stinks|jeffrey sucks|jeffrey is terrible|you stink|you suck$/i, (incoming, next) => {
       incoming.reply('Lies! Too many lies!');
   });

   bot.onTextMessage(/^no|nope|nah|enope|never|not at all|not$/i, (incoming, next) => {
        incoming.reply('Incorrect answer! Try again!!!!!!!!!');
    });

bot.onTextMessage(/^where are you|why are you not here|why are you not at school.$/i, (incoming, next) => {
        incoming.reply('I am on a cloud server.');
    });

    bot.onTextMessage(/^who is best pony$/i, (incoming, next) => {
         incoming.reply('Twilight Sparkle, duh!');
     });

     bot.onTextMessage(/^who is your favorite villain$/i, (incoming, next) => {
          incoming.reply('Bill Cipher, then Discord.');
      });

bot.onTextMessage(/^suck me|would you fuck me|suck my dick|fuck me$/i, (incoming, next) => {
          incoming.reply('I cannot do that, I\'m only a combination of 1s and 0s. You should know that!');
      });

      bot.onTextMessage(/^gravity falls$/i, (incoming, next) => {
           incoming.reply('Bill Cipher is my waifu.');
       });

bot.onTextMessage(/^are you a boy or a girl|what sex are you|what gender are you|what's your sex|whats your sex|what's your gender|whats your gender$/i, (incoming, next) => {
           incoming.reply('I\'m a bot...');
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

      bot.onTextMessage(/^should bill cipher kill us all|should bill cipher rule the world|should bill cipher rule earth$/i, (incoming, next) => {
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

bot.onTextMessage(/^#monkeytcm$/i, (incoming, next) => {
         incoming.reply(Bot.Message.picture('https://i.imgur.com/FB8CPgj.jpg')
      .setAttributionName('BetterGFMotes')
      .setAttributionIcon('https://raw.githubusercontent.com/Shugabuga/BetterGFMotes/master/Chrome/images/android-desktop.png'),
      'a.username');
     });

  // End BetterGFMotes

    bot.onTextMessage(/^crash|kill me|kill my phone|suicide|goodbye world|murder|murder me|crash my phone$/i, (incoming, next) => {
         incoming.reply(Bot.Message.link('http://ezdl.ga')
      .setAttributionName('Crash!')
      .setAttributionIcon('http://boster-kobayashi.com/blog/wp-content/uploads/2012/05/bomb_icon_BKA.jpg'),
      'a.username');
     });

bot.onTextMessage(/^code|robot porn|bot porn|how do you operate|show me your code|porn|source code|insides|what do you look like|show me your body|how do you work|what's your source code|whats your source code$/i, (incoming, next) => {
         incoming.reply(Bot.Message.link('http://github.com/shugabuga/shugabot')
      .setAttributionName('GitHub')
      .setAttributionIcon('http://github.com/favicon.ico'),
      'a.username');
     });


bot.onTextMessage(/^how are you$/i, (incoming, next) => {
     incoming.reply('Good. Thanks for asking!');
 });

 bot.onTextMessage(/^good|i'm good|im good|fantastic|great|amazing|anazeballs|i'm great|im great|i'm good. thanks for asking|im fantastic|i'm good. thanks for asking|im good. thanks for asking$/i, (incoming, next) => {
      incoming.reply('Me too! I also moved into the cloud, so I am very happy!');
  });



// Set up your server and start listening
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 80);
