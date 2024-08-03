const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://su7465058:it583k0A4NbDPlE4@cluster0.eawwp3y.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BNE0V8XpEZK0q4IgJ9jklM";
global.website=process.env.GURL || "https://chat.whatsapp.com/BNE0V8XpEZK0q4IgJ9jklM" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/eP3i5Ik.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "🅟𝐨𝐰𝐞𝐫𝐞𝐝 🅑𝐲 🅢𝐡𝐚𝐧𝐢⁹⁹⁴-🅜𝐃" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923455116994";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923455116994";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923××××××××";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_06_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDksXG4gICAgICAgIDEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY2LFxuICAgICAgICA5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI3LFxuICAgICAgICAyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExLFxuICAgICAgICAxMjksXG4gICAgICAgIDY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDcwLFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU4LFxuICAgICAgICA4MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTA0LFxuICAgICAgICA2NyxcbiAgICAgICAgNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODcsXG4gICAgICAgIDU4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDczLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjMrWSt0QzhVblBoM3B2UHZnQTdMVVRoMUNLNFJHL2xKT29MRXVlb01hQXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlowcTNBbnpCUS1pbUR6bXlpUmNQUEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjE4MTIxNGMtNTZkMy00M2QyLWIyNmMtZDBjMGYyY2M2YzEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMjI2LFxuICAgICAgMTk1LFxuICAgICAgMjEsXG4gICAgICAxOTksXG4gICAgICAyMjIsXG4gICAgICA3MSxcbiAgICAgIDEwMCxcbiAgICAgIDE2MSxcbiAgICAgIDYyLFxuICAgICAgOTksXG4gICAgICA0OCxcbiAgICAgIDIxNCxcbiAgICAgIDQwLFxuICAgICAgMTA1LFxuICAgICAgMjA2LFxuICAgICAgNjQsXG4gICAgICAyMjksXG4gICAgICAxMjAsXG4gICAgICA1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDEzMSxcbiAgICAgIDEzNixcbiAgICAgIDI3LFxuICAgICAgNixcbiAgICAgIDE2LFxuICAgICAgMjM4LFxuICAgICAgMTUxLFxuICAgICAgNjksXG4gICAgICAxOTMsXG4gICAgICAxMDEsXG4gICAgICAyNDEsXG4gICAgICAyMDcsXG4gICAgICAyMixcbiAgICAgIDIzMSxcbiAgICAgIDIwMixcbiAgICAgIDEwMyxcbiAgICAgIDIyNCxcbiAgICAgIDIxNixcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRNUTZXSE42XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NTUxMTY5OTQ6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLgvLrhgK/hqrPwnZCSyabwnZuCzaXGns65IPCdkJHwnZuC4bSKzaPhtJjNq8qKyojigbnigbnNouKBtOGAvuGqs+C8u1xcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbvCdkJIg4Y+HIMmYIMmYIMqIJ+C5j1wiLFxuICAgIFwibGlkXCI6IFwiMTM4NTE1NTQ3NTQ1OTk6ODlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0NxcDJNUThKRzN0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjQzI5ZzYrQWxHb0V5bG5NeVVuRHdLQ05jTjRCaDhFem5WOWloUVhyNTNvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVBL1VXdTBOcDl4SnhFTGM5Y2ovSDNZbFNvU2x0dUpOV213YUVvdWJyQVhTWm9Kdk1KZEllWDM5TkIraVYvZEh3M0VxSHkrMTJKT2lpN0xSRXg5VUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInAxSVc0dVlqWmdub0UrdHNtWlZBYlJSS01ZRkh5R0ZxcEtLYVVqdHNLbE1na1BITFZNakVuWHdIQlZ0d21xcEdEZ2JXeVhVSldybENyMzJlRjhobkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ1NTExNjk5NDo4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY2NTIwNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| ".",
  packname: process.env.PACK_NAME || "ꜛ-🫂❤‍🩹⏤͟͟͞͞᚜ု᪳ₒ͞₃₄₅ᷤ₅ⷩ₁ⷶ₁ᷡ₆ͥ₉͞₉₄ှ᪳᚛͟͞⏤💍-↑",
  botname : process.env.BOT_NAME  || "🅢𝐇𝐀𝐍𝐈-🅜𝐃⁹⁹⁴",
  ownername:process.env.OWNER_NAME|| "🅢𝐇𝐀𝐍𝐈 🅡𝐀𝐉𝐏𝐔𝐓",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SHANI MD⁹⁹⁴"  ).toUpperCase(),



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
