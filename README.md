# ShugaBot

ShugaBot is a (very basic) chat-bot for the [Kik](https://www.kik.com/) messenging service.

### Demo

You can message @ShugaBot on Kik to test this out. Try saying `Hi` to him!

## Setup

### Prerequisites

- A Kik account
- A GitHub account

### Instructions

1) Go to https://dev.kik.com/#/login and follow the directions to create your bot. You also need a Kik account.

2) After making your bot account with Botsworth, go to [the bot's account settings](https://dev.kik.com/#/engine/). Note the API key.

3) Now, make a [Heroku](https://heroku.com) account and create a new app.

4) After creating the Heroku app, document the URL (will be something like `http://shuga-kik-bot.herokuapp.com`).

5) Link your Heroku app with a forked copy of this repo on GitHub.

6) In the `index.js` file, change the `username`, `apiKey`, and `baseUrl` values from what you got from the above steps. For the 'baseUrl', add in the port (it's :80) with the `baseUrl`.

7) Make changes to the `index.js` file with custom messages.

8) Push and sync the changes to GitHub in any manner. The `git` command, the web interface, or the GitHub desktop app all should work.

9) Talk to your bot on Kik. It should be in the `New Chats` section in Kik.

10) If you want to change the profile picture or nickname of the bot, talk to Botsworth.

11) Profit?

## FAQ

- Is Heroku required
 - Technically, no, but it's the easiest way to get started. Because self-hosting and port forwarding can be a pain, especially for a basic chat-bot
- Is Heroku free?
 - If you don't use your bot for more than 18 hours/day, yes. After that, your bot will de-activate for the day.
- Can I change what ShugaBot says?
  - Yes. The messages are in the `index.js` file. A general reply is formatted as so:
  ```
  bot.onTextMessage(/^message1|message2|message3$/i, (incoming, next) => {
       incoming.reply('Here\'s a reply!');
   });
  ```
   - Please note that a back-slash (`\`) must go before an apostrophe (`'`) and other special symbols.


- How is this licensed?
 - This is licensed under the [Creative Commons by-nc-sa 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/) copyleft license, but **you do not have to mention** ***where*** **changes were made, just that you have changed things.**
