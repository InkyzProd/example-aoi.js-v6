<br/>

<div align="center" style="margin: 30px;">
<a href="https://aoi.js.org/">
  <img src="https://github.com/aoijs/website/blob/master/assets/images/aoijs-banner.png?raw=true"   style="width:300px;" align="center"  alt="aoi.js"/>
</a>
<br />
<br />

<div align="center">
    <a href="https://aoi.js.org/">Home Page</a> |
    <a href="https://discord.gg/HMUfMXDQsV">Discord</a> |
    <a href="https://aoi.js.org/community.">Examples</a> |
    <a href="https://aoi.js.org/docs/">Documentation</a> |
    <a
href="https://discord.gg/">My discord server</a>

</div>
<br />

<div align="center"><strong>Example project aoi.js v6</strong><br>

<br />

</div>

<div align="center">

[![Discord](https://img.shields.io/discord/773352845738115102.svg?label=&logo=discord&logoColor=ffffff&color=5865F2&labelColor=5865F2)](https://discord.gg/HMUfMXDQsV)
[![NPM](https://img.shields.io/npm/v/aoi.js.svg)](https://www.npmjs.com/package/aoi.js)
[![Downloads](https://img.shields.io/npm/dt/aoi.js.svg)](https://www.npmjs.com/package/aoi.js)
[![License](https://img.shields.io/npm/l/aoi.js.svg)](https://github.com/AkaruiDevelopment/aoi.js/blob/v6/LICENSE)
[![Stars](https://img.shields.io/github/stars/AkaruiDevelopment/aoi.js.svg)](https://github.com/AkaruiDevelopment/aoi.js/stargazers)

</div>

## Hello welcome to our repository!
How do i get started? Let's follow the steps below.
## Installing packages
```
  npm install aoi.js
  ```
```
  npm install @akarui/aoi.db
```
```
  npm install @akarui/aoi.parser
```
- - -
## main file
```javascript
const {
  AoiClient,
  LoadCommands,
  Util } = require("aoi.js");
const { setup } = require("@akarui/aoi.parser");

setup(Util);
const setting = require("./config/config.json")

const Client = new AoiClient({
  token: setting.token,
  prefix: "$getGuildVar[prefix:$guildID;main]",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue"
      }
    }
});

require("./settings/variables.js")(Client);
const cmdload = new LoadCommands(Client);
cmdload.load(  Client.cmd, "./commands")
```
- - -

## ./config/config.js
you can find an example of the content in config.js at [config.js](https://github.com/InkyzProd/example-aoi.js-v6/blob/main/config/config.json)

## list of intents, events and permissions aoi.js

> ### Gateway Intents
- *MessageContent*
- *Guilds*
- *GuildMessages*
- *GuildMembers*
- *GuildBans*
- *GuildEmojisAndStickers*
- *GuildIntegrations*
- *GuildWebhooks*
- *GuildInvites*
- *GuildVoiceStates*
- *GuildPresences*
- *GuildMessageReactions*
- *GuildMessageTyping*
- *DirectMessages*
- *DirectMessageReactions*
- *DirectMessageTyping*
- - -
> ### Permissions
- *administrator*
- *addreactions*
- *attachfiles*
- *banmembers*
- *createinvite*
- *createpublicthreads*
- *createprivatethreads*
- *changenickname*
- *embedlinks*
- *managenicknames*
- *manageroles*
- *managewebhooks*
- *manageemojisandstickers*
- *manageevents*
- *managethreads*
- *moderatemembers*
- *mentioneveryone*
- *managemessages*
- *manageguild*
- *managechannels*
- *readmessagehistory*
- *useexternalstickers*
- *useapplicationcommands*
- *useexternalemojis*
- *viewguildinsights*
- *viewchannel*
- *viewauditlog*
- - -
> ### Events

##### Message Event
| **For Handler**     	| **Non Handler**   	|
|---------------------	|-------------------	|
| onMessage           	|                   	|
| onMessageDelete     	| messageDelete     	|
| onMessageUpdate     	| messageUpdate     	|
| onMessageDeleteBulk 	| messageDeleteBulk 	|
| onReactionAdd       	| reactionAdd       	|| onReactionRemove    	| reactionRemove    	|
| onReactionRemoveAll 	| reactionRemoveAll 	|
- - -
##### Guild Event
