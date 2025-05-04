module.exports = {

  config: {

    name: "inbox",

    aliases: ["in"],

    version: "1.0",

    author: "Lafie Ayan",

    countDown: 10,

    role: 0,

    shortDescription: {

      en: "hello goatbot inbox no prefix file enjoy the cmmand @ArYan"

    },

    longDescription: {

      en: ""

    },

    category: "fun",

    guide: {

      en: ""

    }

  },

  langs: {

    en: {

      gg: ""

    },

    id: {

      gg: ""

    }

  },

  onStart: async function({ api, event, args, message }) {

    try {

      const query = encodeURIComponent(args.join(' '));

      message.reply("MAMAH INBOX A SMS DISI ✅\n\n  CHECK KOR MAMAH ? 😺", event.threadID);

      api.sendMessage("MAMA ASSALAMUALAIKUM \n👀💋", event.senderID);

    } catch (error) {

      console.error("Error bro: " + error);

    }

  }

    }
