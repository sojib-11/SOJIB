const moment = require('moment-timezone');

const axios = require('axios');



module.exports = {

  config: {

    name: "intro",

    aliases: ["inf", "in4"],

    version: "1.0",

    author: "S O J I B",

    countDown: 5,

    role: 0,

    shortDescription: {

      en: "Displays Owner Intro with a random caption and video"

    },

    longDescription: {

      en: "Shows the owner's details, one random caption, and a video."

    },

    category: "Information",

    guide: {

      en: "{pn}"

    }

  },



  onStart: async function ({ message }) {

    this.sendInfo(message);

  },



  onChat: async function ({ event, message }) {

    if (event.body && ["intro", "inf", "in4"].includes(event.body.toLowerCase())) {

      this.sendInfo(message);

    }

  },



  sendInfo: async function (message) {

    const now = moment().tz('Asia/Dhaka');

    const time = now.format('h:mm:ss A');



    const captions = [

      "❝ 🤫 Silence speaks louder than words. ❞",

      "❝ ✨ Be yourself, everyone else is already taken. ❞",

      "❝ 🔮 The best way to predict the future is to create it. ❞",

      "❝ 💭 Dreams don’t work unless you do. ❞",

      "❝ 🛠️ Don’t wait for opportunity, create it. ❞",

      "❝ ⏳ Every day is a second chance. ❞",

      "❝ 🧠 Life is tough, but so are you. ❞",

      "❝ 🧩 Success is the sum of small efforts, repeated daily. ❞",

      "❝ 🌈 Don’t just exist, live. ❞",

      "❝ 🧠 The only limit is your mind. ❞",

      "❝ 🎯 Take the risk or lose the chance. ❞",

      "❝ 🔥 Be fearless in the pursuit of what sets your soul on fire. ❞",

      "❝ ⚡ Don’t stop when you’re tired. Stop when you’re done. ❞",

      "❝ ☔ Don’t wait for the storm to pass, learn to dance in the rain. ❞"

    ];



    const randomCaption = captions[Math.floor(Math.random() * captions.length)];



    const body = `

╭═════『 👑 OWNER INTRO 』═════╮

│

│ 👨‍🦱 Full Name: SOJIB REZA  

│ 👶 Nickname: SOJIB  

│ 🎂 Age: Secret   

│ 🗓️ Date of Birth: secret  

│ 🚹 Gender: Male  

│ ☪️ Religion: Islam  

│ 🌍 Nationality: Bangladeshi  

│ 📍 Current Address:RAJSHAHI ,Bangladesh   

│ 🎓 Class: secret   

│ 💘 Relationship Status: Single  

│ 📏 Height: 5'10"  

│ 🔵 Favorite Color: Blur  

│ 🎶 Favorite Singer: "AETHER ❤️‍🩹 "  

│ 🍥 Favorite Anime: SOLO LEVELING  

│ 🎙️ Favorite Band:   ODD SIGNATURE 

│ 🆔 FB UID  : 61550628934323  

│

╰══════════════════════════════╯



╭───────『 ✨ CAPTION ✨ 』───────╮

│

│ ${randomCaption}

│

╰──────────────────────────────╯

`;



    const videoUrl = "https://i.imgur.com/gqfpRqj.mp4";



    try {

      const response = await axios.get(videoUrl, { responseType: 'stream' });



      setTimeout(() => {

        message.reply({

          body,

          attachment: response.data

        });

      }, 5000);

    } catch (err) {

      message.reply("⚠️ Failed to load video. Please try again later.");

    }

  }

};
