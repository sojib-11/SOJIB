const axios = require("axios");

const fs = require("fs-extra");

const request = require("request");

module.exports = {

config: {

name: "out",

aliases: ["l"],

version: "1.0",

author: "Sandy",

countDown: 5,

role: 2,

shortDescription: "bot will leave gc",

longDescription: "",

category: "admin",

guide: {

vi: "{pn} [tid,blank]",

en: "{pn} [tid,blank]"

}

},



onStart: async function ({ api,event,args, message }) {

var id;

if (!args.join(" ")) {

id = event.threadID;

} else {

id = parseInt(args.join(" "));

}

return api.sendMessage('▣ SOJIB BOT FINAL EXIT :

bye GC — ektu boro hoye nin, pore dekha hobe ✨🐤 :\n》.\n\n➤𝗕𝗘𝗬 𝗟𝗘𝗦 𝗡𝗔𝗭𝗘𝗦', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))

}

  }
