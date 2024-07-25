const { SlashCommandBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder, awaitMessageComponent } = require('discord.js');
const list = require('../../gif-list.json');

module.exports = {
    cooldown: 7,
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Replies with a brain-rot gif.'),
    async execute(interaction) {
        const randomgif = list[Math.floor(Math.random() * list.length)];

        const another = new ButtonBuilder()
            .setCustomId('another-gif')
            .setLabel('Another?')
            .setStyle(ButtonStyle.Success);

        const row = new ActionRowBuilder()
            .addComponents(another);

        const response = await interaction.reply({
            content: randomgif,
            components: [row],
        });

        // Ensure that only the original command caller can respond
        const collectionFilter = i => i.user.id === interaction.user.id;
        try {
            const confirmation = await response.awaitMessageComponent({ filter: collectionFilter, time: 60000});

            if(confirmation.customId === 'another-gif') {
                const newRandomGif = list[Math.floor(Math.random() * list.length)];
                // await response.update({
                //     content: randomgif,
                //     components: [row],
                // });
                interaction.editReply({ content: newRandomGif, components: [row] });
            }
        }
        catch(e) {
            await interaction.editReply({ content: randomgif, components: [] });
            await console.log('failed try catch');
        }
    },
};