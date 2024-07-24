const { SlashCommandBuilder } = require('discord.js');
const list = require('../../gif-list.json');

module.exports = {
    cooldown: 7,
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Replies with a brain-rot gif.'),
    async execute(interaction) {
        const randomgif = list[Math.floor(Math.random() * list.length)];

        await interaction.reply(randomgif);
    },
};