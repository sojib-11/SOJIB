module.exports = {
  config: {
    name: "uptime",
    aliases: ["up", "goatuptime", "alive"],
    version: "3.0",
    author: "VEX_ADNAN x ChatGPT",
    role: 0,
    shortDescription: {
      en: "Shows uptime like a BOSS."
    },
    longDescription: {
      en: "Not just uptime... it’s the BOT'S legacy time."
    },
    category: "System",
    guide: {
      en: "Type {p}uptime to witness the legend's run time."
    }
  },

  onStart: async function ({ api, event }) {
    const uptime = process.uptime();

    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));

    const timeEmoji = "⌛";
    const botEmoji = "⚙️";
    const lightning = "⚡";
    const crown = "👑";
    const fire = "🔥";
    const skull = "💀";
    const goat = "🐐";

    const line = "═".repeat(35);

    const uptimeString = `
${lightning} ${crown} 𝗧𝗛𝗘 BOT 𝗜𝗦 𝗦𝗧𝗜𝗟𝗟 𝗥𝗨𝗡𝗡𝗜𝗡𝗚 ${crown} ${lightning}
${line}
${timeEmoji} Days   : ${days}
${timeEmoji} Hours  : ${hours}
${timeEmoji} Minutes: ${minutes}
${timeEmoji} Seconds: ${seconds}
${line}
${goat} Status : UNSTOPPABLE ${fire}
${skull} Downtime? 𝗡𝗘𝗩𝗘𝗥 𝗛𝗘𝗔𝗥𝗗 𝗢𝗙 𝗜𝗧.
${botEmoji} Engine : Node.js UltraCore Mode
${fire} Power  : 9999 LEVEL
${line}`;

    const message = `\n${uptimeString}\nStay shocked. Stay respectful.`;

    api.sendMessage(message, event.threadID);
  }
};
