const { Client, CommandInteraction } = require("discord.js");
const { Modal, TextInputComponent, showModal } = require("discord-modals");
module.exports = {
  name: "modal",
  description: "returns modal",
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const modal = new Modal() // We create a Modal
      .setCustomId("modal-customid")
      .setTitle("Test of Discord-Modals!")
      .addComponents([
        new TextInputComponent() // We create a Text Input Component
          .setCustomId("title")
          .setLabel("Report Tittle")
          .setStyle("SHORT") //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
          .setMinLength(30)
          .setMaxLength(150)
          .setPlaceholder("What Should Be The Report Tittle?")
          .setRequired(true), // If it's required or not
        new TextInputComponent() // We create a Text Input Component
          .setCustomId("description")
          .setLabel("Step To Re-Produce")
          .setStyle("LONG") //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
          .setMinLength(10)
          .setMaxLength(500)
          .setPlaceholder("How Do You Got The Error?")
          .setRequired(true), // If it's required or not
        new TextInputComponent() // We create a Text Input Component
          .setCustomId("hahabitch")
          .setLabel("Expected Result")
          .setStyle("SHORT") //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
          .setMinLength(10)
          .setMaxLength(500)
          .setPlaceholder("What Should Have Happen?")
          .setRequired(true), // If it's required or not
        new TextInputComponent() // We create a Text Input Component
          .setCustomId("radio")
          .setLabel("1-0 | How Important?")
          .setStyle("SHORT") //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
          .setMinLength(1)
          .setMaxLength(10)
          .setPlaceholder("How Important Is It?")
          .setRequired(true), // If it's required or not
      ]);
      await showModal(modal, {
          client: client,
          interaction: interaction
      }).catch(e => {
          interaction.reply(e.message ? e.message : e);
      })
  },
};
