const axios = require("axios");

const fs = require("fs-extra");

const request = require("request");

module.exports = {

config: {

name: "Out",

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

return api.sendMessage('▣YAGAMI  BOT LEAVE💢 :\n》SOJIB VAI KA ORDER  TO JANA PARE GA BYE 😞🖤.\n\n➤𝗕𝗘𝗬 𝗟𝗘𝗦 𝗡𝗔𝗭𝗘𝗦', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))

}

}
