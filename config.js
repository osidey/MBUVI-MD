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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/73a8a09d5f5bf11950e96.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263777376864";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/73a8a09d5f5bf11950e96.jpg",
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
  caption : process.env.CAPTION || "©LEEMANVIBES16-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ LEEMANVIBES16-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "LEEMANVIBES16-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "LEEMANVIBES16-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It's LEEMANVIBES16",

  sessionName:process.env.SESSION_ID || "SUHAIL_17_54_02_20_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR0xvUVE4L2RGWFM3ZWxVWFNCaTVSWXhDVjNST2VhNU9jbzJ0bCtYTnJGcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlNuTHBHSU96N01jcVBTMmlzdWhOWkR2KzVaOFpaQVROdmlpaHlkN1NjZ2c9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY0VKUEkrcXBxcUNHNjdjYm5xc0FhalNFS05TM21UUWlVUDBzSUcyZDNXaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjYzdHlQK21Ia2xjUitiZHFNWmZGTi80aTZQTVNVSnRQN0lnVTl1VXh0Z1E9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWUE1Y2orQU9WRnkwczlFVEhBQkYyN2FlUGNLL1lzUFNtTGw5eTlqbVMzUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk8xMGNsNTJHalZ1NjZBd2FycWt2YkhaVG8reGliOFg2amo3TXYzTzVaWHM9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJzT1lkUU5HUmVvcDNKYWQzbG83UlhacHl4Vkt1SGZFMk9RSHA5Mlg4SEhVPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUHFSUzlpM1JKdW5Rb01UNXJZSlUxemEwRVRtTHo5eE1hai9RY2l1elJpbz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJZUmFSaGY5K3oySllDS2M2RU5GUVlyWitkbHVwWjQvY2g5WStLa3lqYm5BYmJOSmJPdnVrMFlHbGlTeFFQZ2QyMnlXcWJndGlPM0FSUzM5ZXUwVWNEUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjgsXCJhZHZTZWNyZXRLZXlcIjpcImo5eExyZ1BLSGROTU9kdG9TSXdGcUJWUnBRVFNuQnlyUmFEcDVoNnJUQUU9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJRRUoyZWZyQlJSLTU1OW5fbHFDU0RRXCIsXCJwaG9uZUlkXCI6XCJhMjJiNGY1My1jZGY0LTRjYzgtOWVjMS04MDQ3NDgyY2EyZjBcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlcvS1FPMjlKWTNhUWl4N1FLbDNSd3hQR3FGYz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJmdnRKT3oxbjJFeXRicEVUYnJFZVE3OGxKVHc9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiMUZQUDFXWFdcIixcIm1lXCI6e1wiaWRcIjpcIjI2Mzc3NzM3Njg2NDoyQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjI0OTk5MzM1MzAwNzM1NzoyQGxpZFwiLFwibmFtZVwiOlwiTGVlTWFuTGVlVmliZXMxNlwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSUtNMFdJUXZzN1RyZ1lZQWlBQUtBQT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIjc5RFUreGkzankyMVh2YjBxeXUwalluU0I2NHp5eFE0cjBqcEhMRDBoeHM9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJFWTlGQlFjbUpBaU51aHNmUzBuS0dWWURBdEVONG8zb0xKZERhNUFIY1F6MnZhRExNcHNSdUJQdzUvanI5S2pnMnBIU1JYQUppNGdsalBMTi9MZkNnZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIk1GQ2lPclQycnFmaVBCMGJKblFxaGxXb0szb3NkYXdKZTN1T242VlRJY3Q1V3lSYmhtZnBDaE5NQ0ZhMmNaZ1A2RzQyV2ZSL3FiLzVBbWNtSjhFTEFBPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNjM3NzczNzY4NjQ6MkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJlL1ExUHNZdDQ4dHRWNzI5S3NydEkySjBnZXVNOHNVT0s5STZSeXc5SWNiXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iaVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwODQ1MTY0OSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFIVzFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIVzEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRVS9RZERYQWJ4bndWd3dnaG5GMVQwZlNRWmpYU0V4ZEJoTDZzQkZ2SWd3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNjg0OTUzOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA3OTQzMjA2NjE4XCJ9Igp9",  // PUT SESSION ID HERE 
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
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



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
 
