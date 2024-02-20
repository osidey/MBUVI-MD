const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/232f475abf82b78b39da2.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254746440595";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/232f475abf82b78b39da2.jpg",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©LEEMANVIBES16-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MBUVI-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MBUVI-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "MBUVI-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It's MBUVI",

  sessionName:process.env.SESSION_ID || "SUHAIL_08_19_02_19_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVURRQzRuNFhnTTh2WUdiL3F3Ui9kZGh4REJtMWJ2M1c4OXZMWWsvNUsyYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkF6cHJaMTB3dEUvWnBjNDFoTkhYTkZvaEIwbmpxZzl0eFJ5Nmt5d3lod0U9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0s5eEdkaTIwRGtJZHdSWGlHQVBuazY5Sm15RU0wNC9WUkdHcm5sL2oyYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZhdVQzNGs5Y3IwRXh4cXBGamdmT3cwRFRqajFQNVVRV0FINW5IRGFIWFU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic0tYZmoxZ1J4UCttc0wwaVUvcXU3RzNQK2NuaktjMmwwb01mSEg0dzNFMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkpYckhyamdKT1JLVUMzQUdqZGV3eXBGUjcwSEZraXBXWEZ0Ym5WVTZOREU9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJjSUYrVVdMaE9jalhSNllJYTB5QjltTEN1Z2U1aWpHa3pjWUd0VGF4aG0wPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibDB5OURkcmdWa0ZRczRyT1IvTi9RT3pxei82YUVvSitoR2EwY1pIRUpHbz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJtRDBCRWpZRUxBUE1qaUozbXZFQUZ5bXlmMlREa3pHTGIrQ0lNSkRzSnpKaWxkNUdNekd0RjNFK2lTRVRKRFBneXZKOVFhQzRRdXozUEhFMGlPZG9qUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjE0LFwiYWR2U2VjcmV0S2V5XCI6XCJaNDFyenBvMUxDT05JSGV2bGF4TzRNdDFHR0JRL1p0SHJRcGRoODdjdEhNPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0NzQ2NDQwNTk1QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjU3Mzk0MTFDQjkxOUEzREI0ODJCNTJENzM1QzAzODA4XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDgzMzA3NTN9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJlRmxxWHRZSFFVV2VxeXBTbzM0NHpBXCIsXCJwaG9uZUlkXCI6XCI1YTM2MzA1Yi02MmIyLTQ2ZjMtYjk0OC1mMzllZjk2ZWI1MjVcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIi80c3I3cENBdC9qK0lWa0pGbU5HNXRvdTMwUT1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ1TkZUakVnK0ZxenJ1SWc4SnJGd2ZiODlEdEE9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiVk5EMTI0RTRcIixcIm1lXCI6e1wiaWRcIjpcIjI1NDc0NjQ0MDU5NTo1OEBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIxMTAxMDYxMzM5NTQ4MTM6NThAbGlkXCIsXCJuYW1lXCI6XCJNYnV2aVwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTzI0Kys4REVQZWR6SzRHR0FrZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImlWUkdqVUsxejZJVWZxazcyTERrRzdaZ1Z4dGdOUnIvNDZXQ0ZIMVVHQ1k9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJkMnZsUWpJdTI0ekhUL0dBd0xPYU1RUUhyMXZDaE9ZS2pXajlISHlKdlpZK0dDZG1XVjd3WDhrYWZHM3FCejRham4ySUJFc1g1SVZiNHJ0dlphVk5Cdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIjNCVE54N25OMUg0VW1Zc0JoVG9uejF5WDg3Y0FURHhXck5hRWIvY2hJZHpWMCtJcTZZZXhUajcwMGROM3dqdXhTVS9tWkxGb2tWbWtpRmlOL2NJRmdnPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3NDY0NDA1OTU6NThAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWWxVUm8xQ3RjK2lGSDZwTzlpdzVCdTJZRmNiWURVYS8rT2xnaFI5VkJnbVwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDgzMzA3NDYsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBRml5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRml5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTXB1NDEzQVVmbDRpSEVnV3lnRGF5VUF6YXFMaDRoTGNFWHBKbDUzY25JWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDQwMTEyNzQ1LFwiY3VycmVudEluZGV4XCI6NTYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNTQsNTVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "MBUVI",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://telegra.ph/file/232f475abf82b78b39da2.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
