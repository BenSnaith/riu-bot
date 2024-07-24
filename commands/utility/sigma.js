const { SlashCommandBuilder } = require('discord.js');

// module.exports is how you export data in node.js so that you can require it in other files
// If you need to acces your client instance from inside a command file, you can access it
// via interaction.client.
module.exports = {
    data: new SlashCommandBuilder()
        .setName('sigma')
        .setDescription('Replies with encouraging message.'),
    async execute(interaction) {
        await interaction.reply('Do you know what it\'s like to hold the gyatt of someone you love. Rizz.');
    },
};