module.exports = {
  config: {
    name: "roast",
    aliases: ["ro"],
    version: "4.0",
    author: "Saim",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Roast your mentioned friend line by line!"
    },
    longDescription: {
      en: "Sends 50 savage Bangla roast lines, one by one, tagging the mentioned user."
    },
    category: "Fun",
    guide: {
      en: "{pn} @mention"
    }
  },

  onStart: async function ({ message, api, event, args }) {
    const mentions = Object.keys(event.mentions);
    if (mentions.length === 0)
      return message.reply("❌ Please mention someone to roast.");

    const targetID = mentions[0];
    const targetName = event.mentions[targetID];

    const roasts = [
      "তোকে দেখে মনে হয় calculator-এও তুই ভুল দিস।",
      "তুই এমন একটা অবস্থা, mirror তোকে ignore করে।",
      "তুই লাস্ট bench-er গর্ব, কারণ তুইই কোনোদিন pass করিস না।",
      "তোর IQ এত low, যে mosquito repellent-ও ignore করে।",
      "তুই প্রেমে পড়িস না, প্রেম তোকে avoid করে।",
      "তুই মানুষ না meme, তোকে নিয়ে সবাই হাসে।",
      "তোর কাজ শুধু seen দিয়ে চুপ থাকা — তোকে ghost বানাতে পারতাম।",
      "তুই এমন ধরা, তোকে block করেও শান্তি নাই।",
      "তুই এত useless, Google-e খুজলেও কাজের কিছু পাবি না।",
      "তোর কথা শুনে silence request করসে – চুপ থাকিস না একটু!",
      "তুই এমন personality, WhatsApp DP দেখেই বুঝে ফেলা যায় — বাসায় বসে আছিস।",
      "তোর crush তোকে দেখে বলে, 'ভাই এই দিক দিয়া না'।",
      "তুই একমাত্র friend, যারে tag দিলে পস্তাই।",
      "তুই এত বেকার, keyboard-er spacebar-er মতো — use ache, but underrated!",
      "তুই selfie দিলে camera reverse হয়ে যায়!",
      "তুই math এ এত বাজে, যে 2+2=22 বিশ্বাস করিস।",
      "তুই joke করিস, হাসি আসে না — ঘুম আসে।",
      "তুই class clown হইতে চাস, কিন্তু সবার stress হইস।",
      "তুই এত bad, antivirus তোকে remove করতে পারে না।",
      "তুই রাগ করলে মানুষ ভয় পায় না, হাসে।",
      "তোর attitude এত fake, barcode দিয়ে scan করা যায়।",
      "তুই লজ্জা না shame, insult এর ব্র্যান্ড ambassador।",
      "তুই dustbin-ও accept করে না, because even trash has standards।",
      "তোর বন্ধুত্বের মানে — only when needed।",
      "তোর crush তোকে দেখে auto correct হয় — Brother detected!",
      "তুই এমন dull, candle ও জ্বলে না পাশে।",
      "তুই face unlock দিস, phone ঘুমিয়ে পড়ে।",
      "তুই হাসলে filter বলেই — 'আমি quit দিলাম'।",
      "তোর পিছে dog ও আসে না — 'bad luck ছোঁয়াবে' ভেবে।",
      "তুই মায়ের favorite না, WiFi password এর মতো দরকারে মনে পড়ে।",
      "তুই এত annoying, mosquito তোকে ignore করে।",
      "তুই catfish না, pure confusion।",
      "তুই ghost না, joke — মরে গেছিস তাও funny না।",
      "তোর best quality – silence. Use it more!",
      "তুই romantic song শোন, আর profile picture সাপের মতো!",
      "তুই sense of humor ছাড়া born হইছিস।",
      "তুই class e না থাকলে সবাই শান্তিতে থাকে।",
      "তুই selfie দিস, camera break হয় না — গালি দেয়।",
      "তুই এত চিপ, discount-er নিচে চলে যাস।",
      "তুই হ্যান্ডসাম? হাহা, Google confirm করসে না।",
      "তোর কথা শুনে Siri বলে — ‘I’m out, bro!’",
      "তুই খাবার চাস, but brain খাইস না কোনোদিন।",
      "তোর মুখ দেখলে মনে হয় life কে uninstall করা লাগবে।",
      "তুই ভাই না, virus — জ্বালাতন করিস সবখানে।",
      "তুই এমন friend, presence কম, annoyance বেশি।",
      "তুই acting করিস, Oscar পালায়।",
      "তুই laugh করিস, মানুষ crying reaction দেয়।",
      "তোর নাম বললেই নেট slow হয়ে যায়।",
      "তুই not found, even GPS-e।",
      "তুই charm না, alarm – সবাই ঘুম ভাঙে তোরে দেখলে।"
    ];

    for (let i = 0; i < roasts.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5s delay
      api.sendMessage({
        body: `${i + 1}. ${roasts[i]}`,
        mentions: [{ id: targetID, tag: targetName }]
      }, event.threadID);
    }
  }
};
