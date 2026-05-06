import 'dotenv/config';
import { Client, Events, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });
client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    console.log(message.content);
    message.reply({
        content: "hi from bot!"
    })
});
client.once("interactionCreate",(interaction) => {
    // console.log(interaction);
    interaction.reply({
        content: "pong",
    })
}  );
client.login(process.env.DISCORD_TOKEN)
