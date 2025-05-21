module.exports = {

  config: {

    name: "respect",

    aliases: ["r"],

    version: "1.0",

    author: "〲T A N J I L ツ",

    role: 0,

    shortDescription: {

      en: "Gives respect to the owner"

    },

    longDescription: {

      en: "Only the owner can use this command to get admin privileges as a sign of respect."

    },

    category: "Group",

    guide: {

      en: "/r"

    }

  },



  onStart: async function ({ api, event }) {

    const ownerUID = "61550628934323";

    

    if (event.senderID !== ownerUID) {

      return api.sendMessage("Sorry, only the owner can use this command 😾!", event.threadID);

    }



    try {

      await api.changeAdminStatus(event.threadID, ownerUID, true);

      api.sendMessage("You have been given admin as a token of respect, my Lord!😻💌", event.threadID);

    } catch (err) {

      api.sendMessage("Failed to give admin. Maybe I don't have admin permission😞.", event.threadID);

    }

  }

};
