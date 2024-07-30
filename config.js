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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_14_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDcyLFxuICAgICAgICA3NixcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk5LFxuICAgICAgICA4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzLFxuICAgICAgICA3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgODYsXG4gICAgICAgIDk1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAzMixcbiAgICAgICAgMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMixcbiAgICAgICAgMTk5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgMjEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYzLFxuICAgICAgICA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY4LFxuICAgICAgICA1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwRExKWjJFdEhCVmJoTDJYMTRLRzRWaGxxRGZObS9wZ3RBSndla3NuR1B3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZYWZpWHYxeFFyeVY4endhWmhWY1BRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc1OWYzNTE3LTQyMDEtNDZhYy05MTRjLTNmNDQ4MGE5NGM0MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDE2NixcbiAgICAgIDM4LFxuICAgICAgMTU5LFxuICAgICAgMTUxLFxuICAgICAgOTQsXG4gICAgICAxNTMsXG4gICAgICAxODcsXG4gICAgICAyNTUsXG4gICAgICAxNDksXG4gICAgICAxODEsXG4gICAgICAxODksXG4gICAgICAzMixcbiAgICAgIDI0OCxcbiAgICAgIDEyNyxcbiAgICAgIDIxMyxcbiAgICAgIDI1NCxcbiAgICAgIDc2LFxuICAgICAgMTgsXG4gICAgICAxODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMjMzLFxuICAgICAgOTksXG4gICAgICAzNCxcbiAgICAgIDE5NSxcbiAgICAgIDgyLFxuICAgICAgODMsXG4gICAgICAyMDAsXG4gICAgICAyMDQsXG4gICAgICA0MixcbiAgICAgIDE0NSxcbiAgICAgIDEzMCxcbiAgICAgIDIwOSxcbiAgICAgIDM0LFxuICAgICAgMixcbiAgICAgIDE2NyxcbiAgICAgIDEzMCxcbiAgICAgIDEsXG4gICAgICAxNzYsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVBHM1lCTVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ1NTExNjk5NDo4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuC8uuGAr+Gqs/CdkJLJpvCdm4LNpcaezrkg8J2QkfCdm4LhtIrNo+G0mM2ryorKiOKBueKBuc2i4oG04YC+4aqz4Ly7XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxu8J2QkiDhj4cgyZggyZggyogn4LmPXCIsXG4gICAgXCJsaWRcIjogXCIxMzg1MTU1NDc1NDU5OTo4OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOK3FwMk1RL3Zha3RRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNDMjlnNitBbEdvRXlsbk15VW5Ed0tDTmNONEJoOEV6blY5aWhRWHI1M289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiazhTWjNGZUxtTnczK0lyT29pcUY5cGMzd1BQYkE2ejlDd2ZMcGU3SHFzc3pLYkdrUkkrRnplL1dvZ3FsUWlDdUJyQVF2Q0Njc1V0dzlRTGNkWmJvQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWnd0NEFiQ2tWZnRscnlIeGpaVUZzajRhNHFUSlBQNVFBYm56RHFHL3Nva09rTFBiTGZXRG9hbzJUWkdZVVdSUUltS1BjM0pwOFlmZkxXa1ExeTdXQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDU1MTE2OTk0Ojg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzY2ODUxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
