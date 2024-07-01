const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349167384669,3197010526428,2348063152868,2348023791816";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_37_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIyLFxuICAgICAgICAzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDU1LFxuICAgICAgICA1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMixcbiAgICAgICAgMjU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDc5LFxuICAgICAgICAyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgODMsXG4gICAgICAgIDc4LFxuICAgICAgICAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDU3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMxLFxuICAgICAgICA4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg0LFxuICAgICAgICAzNixcbiAgICAgICAgMTkxLFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZHJSbUcwZzlKT3dkbWhXK0VYUXVmcmo4bjJFN0NrZDRIMjhEaE9FRS9abz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWGIxX0ZzRlhUdy10bDJMYzEyV3pQd1wiLFxuICBcInBob25lSWRcIjogXCI3ZjBhZmU2NS04YjE5LTQ0YjktYjRkZC0wN2U3NDJlYjA0NmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAyMDIsXG4gICAgICAxNjEsXG4gICAgICAyNDMsXG4gICAgICA4MSxcbiAgICAgIDEzMSxcbiAgICAgIDE0MSxcbiAgICAgIDE1NyxcbiAgICAgIDEzMCxcbiAgICAgIDEyNyxcbiAgICAgIDE3NixcbiAgICAgIDgxLFxuICAgICAgMTQ5LFxuICAgICAgMTA2LFxuICAgICAgMjQ1LFxuICAgICAgNzUsXG4gICAgICA4MSxcbiAgICAgIDM2LFxuICAgICAgMTY0LFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDEyNyxcbiAgICAgIDExOSxcbiAgICAgIDIxOSxcbiAgICAgIDQ4LFxuICAgICAgMTk1LFxuICAgICAgMjYsXG4gICAgICAxNTAsXG4gICAgICAxMjUsXG4gICAgICA5NCxcbiAgICAgIDIwOCxcbiAgICAgIDExOCxcbiAgICAgIDksXG4gICAgICAyLFxuICAgICAgMTUsXG4gICAgICAyMDAsXG4gICAgICAxMDEsXG4gICAgICA3MyxcbiAgICAgIDE2MCxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpCSEhCUFRXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY3Mzg0NjY5OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUlVOT1NLSSBUSEUgQk9UIERFUExPWUVSXCIsXG4gICAgXCJsaWRcIjogXCIyNTk4NzU4NzE0MTIzMDk6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFNCOFBRR0VKaWdoN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsMUNrd3F0MFZZd3NqOWY3U1FJN0NXSytHSzkxTG0vZi9aRWo4TWJCc0NnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdmNGh6aHo1bVA3K283ckhOR3JhZTgrQ1RObmNjMHVwa1ozb29qbUFRVzlPMDVpbHI1M2VyM1NqMmE4TDc0czdOZFFmZnQ1bU9aQkRSQjhnNTdGUUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInd3aHBaSjg5V0l6K2x0NkxIRGZvdk5JYW9pK1VBZXJwVlQweVkrNzc2NGFlSlIrdUZTaDg4UVJzeDcwdlpzQ3lqdjNPeS9TRVd2M3NLQUJJTGxQNUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjczODQ2Njk6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NzgzNDUyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
