const axios = require("axios");
const path = require("path");
const fs = require("fs");
const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Mostakim0978/D1PT0/refs/heads/main/baseApiUrl.json`,
  );
  return base.data.api;
};

module.exports = {
  config: {
    name: "album",
    version: "1.0.0",
    role: 0,
    author: "Dipto", //Don't Change Author name.
    description: "Displays album options for selection.",
    category: "Media",
    countDown: 5,
    guide: {
      en: "{p}{n} or add [cartoon/photo/lofi/sad/islamic/funny/horny/anime]",
    },
  },

  onStart: async function ({ api, event, args }) {
    if (!args[0]) {
      {
        api.setMessageReaction("😘", event.messageID, (err) => {}, true);
      }
      const albumOptions = [
        "𝗙𝘂𝗻𝗻𝘆 𝘃𝗶𝗱𝗲𝗼",
        "𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝘃𝗶𝗱𝗲𝗼",
        "𝗦𝗮𝗱 𝘃𝗶𝗱𝗲𝗼",
        "𝗔𝗻𝗶𝗺𝗲 𝘃𝗶𝗱𝗲𝗼",
        "𝗖𝗮𝗿𝘁𝗼𝗼𝗻 𝘃𝗶𝗱𝗲𝗼",
        "𝗟𝗼𝗙𝗶 𝗩𝗶𝗱𝗲𝗼",
        "𝗛𝗼𝗿𝗻𝘆 𝘃𝗶𝗱𝗲𝗼",
        "𝗖𝗼𝘂𝗽𝗹𝗲 𝗩𝗶𝗱𝗲𝗼",
        "𝗙𝗹𝗼𝘄𝗲𝗿 𝗩𝗶𝗱𝗲𝗼",
        "𝗥𝗮𝗻𝗱𝗼𝗺 𝗣𝗵𝗼𝘁𝗼",
      ];
      const message =
        "❤️‍🩹 𝗖𝗵𝗼𝗼𝘀𝗲 𝗮𝗻 𝗼𝗽𝘁𝗶𝗼𝗻𝘀 𝗕𝗮𝗯𝘆 <💝\n" +
        "✿━━━━━━━━━━━━━━━━━━━━━━━✿\n" +
        albumOptions
          .map((option, index) => `${index + 1}. ${option} 🐤`)
          .join("\n") +
        "\n✿━━━━━━━━━━━━━━━━━━━━━━━✿";

      await api.sendMessage(
        message,
        event.threadID,
        (error, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            link: albumOptions,
          });
        },
        event.messageID,
      );
    } else if (args[0] === "2") {
      {
        api.setMessageReaction("😘", event.messageID, (err) => {}, true);
      }
      const albumOptions = [
        "𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰 𝗩𝗶𝗱𝗲𝗼",
        "𝗦𝗶𝗴𝗺𝗮 𝗥𝘂𝗹𝗲",
        "𝗟𝘆𝗿𝗶𝗰𝘀 𝗩𝗶𝗱𝗲𝗼",
        "𝗖𝗮𝘁 𝗩𝗶𝗱𝗲𝗼",
        "18+ 𝘃𝗶𝗱𝗲𝗼",
        "𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝘃𝗶𝗱𝗲𝗼",
        "𝗙𝗼𝗼𝘁𝗕𝗮𝗹𝗹 𝘃𝗶𝗱𝗲𝗼",
        "𝗚𝗶𝗿𝗹 𝘃𝗶𝗱𝗲𝗼",
        "𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗩𝗶𝗱𝗲𝗼",
      ];
      const message =
        "❤️‍🩹 𝗖𝗵𝗼𝗼𝘀𝗲 𝗮𝗻 𝗼𝗽𝘁𝗶𝗼𝗻𝘀 𝗕𝗮𝗯𝘆 <💝\n" +
        "✿━━━━━━━━━━━━━━━━━━━━━━━✿\n" +
        albumOptions
          .map((option, index) => `${index + 11}. ${option} 🐤`)
          .join("\n") +
        "\n✿━━━━━━━━━━━━━━━━━━━━━━━✿";

      await api.sendMessage(
        message,
        event.threadID,
        (error, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            link: albumOptions,
          });
        },
        event.messageID,
      );
    }
    //------------Video Add--------------//
    const validCommands = [
      "cartoon",
      "photo",
      "lofi",
      "sad",
      "islamic",
      "funny",
      "horny",
      "anime",
      "love",
      "baby",
      "lyrics",
      "sigma",
      "photo",
      "aesthetic",
      "cat",
      "flower",
      "ff",
      "sex",
      "girl",
      "football",
      "friend",
    ];
    {
      api.setMessageReaction("👀", event.messageID, (err) => {}, true);
    }
    if (args[0] === "list") {
      try {
        const res = await axios.get(`${await baseApiUrl()}/album?list=dipto`);
        const data = res.data.data;
        const videoCount = data.match(/\d+/g).reduce((acc, num) => acc + parseInt(num), 0);
        api.sendMessage(
          `𝘁𝗼𝘁𝗮𝗹 𝘃𝗶𝗱𝗲𝗼 𝗰𝗼𝘂𝗻𝘁: ${videoCount}`,
          event.threadID,
          event.messageID,
        );
      } catch (error) {
        api.sendMessage(`${error}`, event.threadID, event.messageID);
      }
    }
    if (args[0] === "listAll" || args[0] === "listall") {
      try {
        const lRes = await axios.get(`${await baseApiUrl()}/album?list=dipto`);
        const data = lRes.data.data;
        const videoCount = data.match(/\d+/g).reduce((acc, num) => acc + parseInt(num), 0);
        api.sendMessage(
          `🖤 𝗧𝗼𝘁𝗮𝗹 𝘃𝗶𝗱𝗲𝗼 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗶𝗻 𝗮𝗹𝗯𝘂𝗺 🩵\n\n${data}\n\n𝘁𝗼𝘁𝗮𝗹 𝘃𝗶𝗱𝗲𝗼 𝗰𝗼𝘂𝗻𝘁: ${videoCount}`,
          event.threadID,
          event.messageID,
        );
      } catch (error) {
        api.sendMessage(`${error}`, event.threadID, event.messageID);
      }
    }
    const d1 = args[1] ? args[1].toLowerCase() : "";
    if (!d1 || !validCommands.includes(d1)) return;
    if (!event.messageReply || !event.messageReply.attachments) return;
    const attachment = event.messageReply.attachments[0].url;
    const URL = attachment;
    let query;
    switch (d1) {
      case "cartoon":
        query = "addVideo";
        break;
      case "photo":
        query = "addPhot
