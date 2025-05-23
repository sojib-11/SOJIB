const afkUsers = new Map();



module.exports = {

  config: {

    name: "afk",

    version: "1.0",

    author: "ChatGPT x Goat Level",

    role: 0,

    shortDescription: { en: "Set your AFK status" },

    longDescription: { en: "Let others know you're away with a message" },

    category: "utility",

    guide: {

      en: "/afk on [message]\n/afk off"

    }

  },



  onStart: async function ({ api, event, args }) {

    const { senderID, threadID, messageID } = event;

    const subCmd = args[0];



    if (!["on", "off"].includes(subCmd)) {

      return api.sendMessage("Use: /afk on [message] or /afk off", threadID, messageID);

    }



    if (subCmd === "on") {

      const msg = args.slice(1).join(" ") || "No reason given.";

      afkUsers.set(senderID, msg);

      return api.sendMessage(`✅ AFK mode on:\n${msg}`, threadID, messageID);

    }



    if (subCmd === "off") {

      afkUsers.delete(senderID);

      return api.sendMessage("❎ AFK mode off.", threadID, messageID);

    }

  },



  onChat: async function ({ api, event }) {

    const { mentions, threadID } = event;



    if (!mentions || Object.keys(mentions).length === 0) return;



    let replies = [];



    for (const uid of Object.keys(mentions)) {

      if (afkUsers.has(uid)) {

        replies.push(`⚠️ ${mentions[uid]} is AFK:\n📝 ${afkUsers.get(uid)}`);

      }

    }



    if (replies.length > 0) {

      api.sendMessage(replies.join("\n\n"), threadID);

    }

  }

};
