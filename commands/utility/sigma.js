const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

// module.exports is how you export data in node.js so that you can require it in other files
// If you need to acces your client instance from inside a command file, you can access it
// via interaction.client.
module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('sigma')
        .setDescription('Replies with encouraging message.')
        .addStringOption(option => 
            option.setName('name')
            .setDescription('The input to echo back.')
            .setRequired(true)),
    async execute(interaction) {
        const name = await interaction.options.getString('name');

        await interaction.reply(`Hello, ${name}`);
    },
};