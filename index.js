const {
  AoiClient,
  LoadCommands,
  Util
} = require("aoi.js");

const { setup } = require("@akarui/aoi.parser");

setup(Util);

const Client = new AoiClient({
    token: process.env.TOKEN,
    prefix: "$getGuildVar[prefix:$guildID;main]",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

require("./settings/variables.js")(Client);

const cmdload = new LoadCommands(Client);
cmdload.load(
  Client.cmd,
  "./commands"
)