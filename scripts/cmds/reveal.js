module.exports = {

  config: {

    name: "reveal",

    version: "1.0",

    author: "ChatGPT x Saim",

    countDown: 3,

    role: 0,

    shortDescription: { en: "Reveal someone's secret profile" },

    longDescription: { en: "Funny fake profile generator for tagged person" },

    category: "Fun",

    guide: { en: "{pn} @mention" }

  },



  onStart: async function ({ event, message }) {

    const mention = Object.keys(event.mentions || {});

    if (mention.length === 0)

      return message.reply("❌ Kar secret reveal korbi? Tag dao!");



    const targetID = mention[0];

    const targetName = event.mentions[targetID];



    const names = ["Chhoto Don", "Majher Raj", "Silent Killer", "DJ Bhai", "Mr. 007"];

    const jobs = ["Midnight Noodles Thief", "Emoji Dealer", "Status Liker", "Keyboard Fighter", "Cringe Reel Maker"];

    const nights = ["Talks to mirror", "Counts ceiling cracks", "Sings to pillow", "Searches crush ID", "Fights with fan"];

    const crushes = ["Chemistry Miss", "That One Cousin", "Group Admin", "Toilet Mirror", "Bus er Didi"];

    const lies = ["Battery 2%", "Coming in 5 mins", "Tomake onek valo lage", "Ami busy", "Porashona kortesi"];

    const ratings = ["1/10", "2/10", "4.5/10", "7/10", "10/10 (in dream only)"];



    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];



    const profile = `

🕵️ Secret Profile Revealed for @${targetName}:



• Hidden Name: ${getRandom(names)}

• Secret Profession: ${getRandom(jobs)}

• Night Activity: ${getRandom(nights)}

• Crush Name: ${getRandom(crushes)}

• Most Used Lie: "${getRandom(lies)}"

• Personality Rating: ${getRandom(ratings)}

`;



    message.reply({

      body: profile,

      mentions: [{ id: targetID, tag: `@${targetName}` }]

    });

  }

};
