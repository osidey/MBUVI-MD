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
  caption : process.env.CAPTION || "©MBUVI-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MBUVI-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MBUVI-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "MBUVI-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It's MBUVI",

  sessionName:process.env.SESSION_ID || "SUHAIL_11_41_02_20_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMkRYc05Ld0ROUlR3b2dOZUJ4ZGFOVlBLMktFS09pWGNLZ2RJMURPc28yUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImFBdDJiUVJxTWUxZ0UrQzBaZGZES0lJSlJncDlMOGlISFJLeTRFdS95M3c9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT0hSUkM0WHgzeU1BZStyaitVWUdaWjBMbmlQaDRETzgvZXFHWkM0TThXRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIllzYVptcS90ajl3Wk05K1BGNm03T2lOR2E0dkxIZG84aVFRcDNTaGl4MGM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUsvazBVRVFqd09XWWhEQWtqZXBaOW1lckhFNUNYZ2c0djVkcTlzeFJGUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInh1N1lWa2JhYkE1amxZQkZSVlN6MXhXUTBQS0F5NUQzRjBuUEIyanpXVjg9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI4RFY2YmVrK0RaMER0TTNpbHJwUXozdy9TbmVlNE5FWk1TTDhwV0xtU1ZvPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia1dCQVozU09nNHN5WU4wcVR5ZXdyTjNncW5JVmwrYXcwcEZKcG1KeVloQT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJUWlF0RjFDNkgyRGg1MG1HYXBsa3ZSMk1welBRTG9laElBNW1KVXF5ajJjd0RtaUI3YXRnYXYreE9DeXpNQXVNcERwRzFSa3BCYW15QlQyVC9Lb2ZDQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NjUsXCJhZHZTZWNyZXRLZXlcIjpcImppUHV6WlZ3K0JTVExoQTZCUlZoNnZoQUNxN05XVSs3cFhQYm1xTU9JZEk9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNTQ3MDAyNzY2NTFAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMkQ4QTYwQTREQTlDMTVFOUU0OTYwMDY2NDBFQkFDQUFcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwODQyOTI3Mn1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIndLaS1nQkNYU1FLTldGVmZWOFVrZmdcIixcInBob25lSWRcIjpcImU0Yzk3YTRiLWJkYjctNGRmMS04ZjE5LWY3ZjdmMTJlMmQyM1wiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK2w4bTR6SENVWVgwZnNrTFI4YklBNUJlTEowPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk5oMUo0eG1hTnFvVDdhZUlJSndLS3NYSmJkST1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJYRkhFOVNWQlwiLFwibWVcIjp7XCJpZFwiOlwiMjU0NzAwMjc2NjUxOjEwQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjI4MTI5MDU5NTE1MTk3NjoxMEBsaWRcIixcIm5hbWVcIjpcImtlbm13YWnwn5iBXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNKKzAwb29HRU0rZjBxNEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiRE9EbFFzaEU0Tkl4SG9GeC9NSUl0MC80ekpGV0xjaTFKdVFTYzBNUG1uVT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkxUbi9JeHU0Y1lQdERKSERHaEZEYms0b0JZT21XOTFUdWQ1cmlneXNjNmUwZUVsVy9HWDV4a3dOeURYQWoyUE05cGJZM3VqVzcvTUpLWlZab2JRdENRPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwibHA4NnRCSmZhTlZNbldBd203REZmR2ZCT0dISm5tbHFrT2xIRjVreGxIejJ1WHJjTmMzNGIrRXNmT091blZ6VytwTFRKWnpIWndCNFd4ZXRSaWpmQkE9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjI1NDcwMDI3NjY1MToxMEBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJRemc1VUxJUk9EU01SNkJjZnpDQ0xkUCtNeVJWaTNJdFNia0VuTkRENXAxXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwODQyOTI2NyxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFCb3dcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCb3cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRcStuRGxmQ1FuOGUwQzZ0L3BIaElQSHFHWTlWL0lqQkx3VGRwaVluQzdZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MzI5MzQ0MzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwODQyOTI3MDI4NVwifSIKfQ==",  // PUT SESSION ID HERE 
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
 
