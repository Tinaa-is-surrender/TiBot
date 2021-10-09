

const tmi = require("tmi.js");

// Define configuration options
const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [process.env.CHANNEL_NAME]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

// Connect to Twitch:
client.connect();

function randomNum(min, max) {
  var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randNum;
}
// First stream date
var countDownDate = new Date("Sep 14, 2021 00:00:00").getTime();
var now = new Date().getTime();
var streamperiod = now - countDownDate;
var days = Math.floor(streamperiod / (1000 * 60 * 60 * 24));
//gatcha
function gatcha(channel, name) {
  var C = new Array(
    "그시절우리가좋아한",
    "그누구보다위대한",
    "빛과소금그리고",
    "6턴만에죽어버린",
    "내마음의등불",
    "은근히귀여운사람",
    "뛰는놈위에나는",
    "민족의위대한등불",
    "인류의마지막희망",
    "꺾이지않는열정",
    "전설은아니고레전드",
    "찐막선언을한",
    "세미나에지능을빼앗긴",
    "조별과제조장님",
    "트수들의추억을갈아버린",
    "피지컬이딸려슬픈",
    "5턴까지영능만누른",
    "진균에서아나콘드라뽑은",
    "다이아10의망령",
    "명치에화염구을맞은",
    "승률80%을찍은",
    "첫번째죽음의기사",
    "밧줄이타서당황한",
    "시간이모자라슬픈",
    "막고라데이승률80%",
    "칭호: 메카츄"
  );
  var R = new Array(
    "능지가점점사라지는",
    "신조차모독하는천재",
    "사전에불가능은없는",
    "패스트업을저질러버린",
    "당신의본진이되고싶은",
    "국민프로듀서들의1픽",
    "멸공의횃불",
    "우주최강미녀",
    "행동하는양심",
    "다시태어난대도오직",
    "전지전능한대학원생",
    "당신이있어행복한",
    "마지막잎새",
    "조현수장현재김정수백학준그리고",
    "신이라불리운여자",
    "안보이는라디오의신",
    "승률50%을찍은",
    "전장8등붙박이",
    "칭호: 메츄",
    "막고라데이승률50%"
  );
  var E = new Array(
    "절벽에핀한송이장미",
    "트수의이빨을갈아버린",
    "20년경력서순맛집",
    "또킬각을놓쳐버린",
    "선술집난투의최강자",
    "의외의실력을보여준",
    "요그사론의첫번째제자",
    "신조차질투하는여자",
    "마지막순간에생각나는",
    "자락서스가나오지않는",
    "승률30%을찍은",
    "묘수풀이200트달성한"
    "27년경력창조손해맛집"
  );
  var L = new Array(
    "이런을외쳐버린",
    "전장의지배자",
    "거짓말처럼승리를쟁취한",
    "전장점수4K달성한"
    //"트위치에서제일진지하고진중하고냉정하고냉철하고이성적인스트리머"
  );
  var GL = new Array("하스스톤잘하는");

  var ran = randomNum(1, 1000);
  if (ran <= 600) {
    client.say(channel, `/me [Common] ${C[randomNum(0, C.length - 1)]}${name}`);
  } else if (ran <= 800) {
    client.say(channel, `/me [Rare] ${R[randomNum(0, R.length - 1)]}${name}`);
  } else if (ran <= 900) {
    client.say(channel, `/me [Epic] ${E[randomNum(0, E.length - 1)]}${name}`);
  } else if (ran <= 975) {
    client.say(
      channel,
      `/me [Legendary] ✨${L[randomNum(0, L.length - 1)]}${name}`
    );
  } else {
    client.say(
      channel,
      `/me [Legendary++] ✨✨✨${GL[randomNum(0, L.length - 1)]}${name}✨✨✨`
    );
  }
}

// Called every time a message comes in
function onMessageHandler(channel, tags, message, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = message.trim();
  const arr = commandName.split(" ");
  //client.say(channel, commandName);
  if (commandName == "!티봇 상태") {
    client.say(channel, `@${tags.username}, 현재 정상 작동중입니다.`);
    
  } else if (commandName == "!가챠") {
    gatcha(channel, "티나");
    
  } else if (commandName == "!명령어") {
    client.say(channel, `http://ssakdook.twip.kr/command/surrenderhs`);
    
  } /*else if (commandName == "!업타임") {
    client.say(channel, `방송 업타임: `);
    
  }*/ else if (commandName == "!디코") {
    client.say(channel, `디스코드: 그런거없다`);
    
  } else if (commandName == "!친추") {
    client.say(channel, `하이그나이트#31579`);
    
  } else if (commandName == "!포잉트") {
    client.say(channel, `https://twip.kr/xx_eeee#point`);
    
  } else if (commandName == "!유튜브") {
    client.say(channel, `https://url.kr/???`);
    
  } else if (commandName == "!나나나이스") {
    client.say(channel, `♪₍๐•ᴗ•๐₎ 난난나나이스 ♪₍๐•ᴗ•๐₎ 기분 죠앙 ♪₍๐•ᴗ•๐₎`);
    
  } else if (commandName == "!방송") {
    client.say(channel, `${channel}님이 방송 시작한지 ${days + 1}일째! 첫 방송날은 2021년 9월 14일!`);
    
  } else if (commandName == "!티나") {
    client.say(channel, `٩(๑•̀o•́๑)و ٩(๑•̀o•́๑)و 으쌰으쌰 ٩(๑•̀o•́๑)و ٩(๑•̀o•́๑)و`);
    
  } else if (commandName == '티하') {
		client.say(channel, `@${tags.username} 님, 안녕하세용⸜❤︎⸝‍`);
    
	} else if (commandName == '티바') {
		client.say(channel, `@${tags.username} 님, 구빰⸜❤︎⸝‍`);
    
  }
  /*else if (commandName == "!히지가챠") {
    gatcha(channel, "히지이");
    }
  else if (commandName == '!히지연차')
    {
      for (var i=0;i<3;i++)
        {
          gatcha(channel, '히지이');  
        }
    }*/
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
//https://api.twitch.tv/helix/search/channels?query=xx_eeee < api
