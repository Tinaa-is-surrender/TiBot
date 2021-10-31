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
var countDownDate = new Date("July 5, 2021 00:00:00").getTime();
var now = new Date().getTime();
var streamperiod = now - countDownDate;
var days = Math.floor(streamperiod / (1000 * 60 * 60 * 24));
//HanGang temperature.

function inteligence(channel) {
  var ran2 = randomNum(1, 100);
  var ran3 = randomNum(1, 100);
  //20% chances to GOOD DICE, 30% chances to NORMAL DICE, 30% chances to BAD DICE
  //20% chances to 
  
  var AI = new Array("왜이리 똑똑해?");
  var BI = new Array("나쁘지 않네요");
  var CI = new Array("역시 수블리 ㅋㅋ");
  var DI = new Array("바보 ㅋㅋ");
  if (ran2 >= 80) {
    client.say(channel, `수블리의 지능은 현재 ${ran2}%! ${AI}`);
  } else if (ran2 >= 50) {
    client.say(channel, `수블리의 지능은 현재 ${ran2}%! ${BI}`);
  } else if (ran2 >= 20) {
    client.say(channel, `수블리의 지능은 현재 ${ran2}%! ${CI}`);
  } else {
    client.say(channel, `수블리의 지능은 현재 ${ran2}%! ${DI}`);
  }
}

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
    "전설4자리의망령",
    "명치에불덩이작렬을맞은",
    "승률80%을찍은",
    "첫번째죽음의기사",
    "밧줄이타서당황한",
    "도적승률70%",
    "요즘나이가들어슬픈",
    "시간이모자라슬픈",
    "피의울음소리를뽑은",
    "보루방패를뽑은",
    "칭호: 5000등",
    "50%확률로common을뽑은"
  );
  var R = new Array(
    "능지가점점사라지는",
    "신조차모독하는천재",
    "사전에불가능은없는",
    "조치에게패배한",
    "당신의본진이되고싶은",
    "국민프로듀서들의1픽",
    "멸공의횃불",
    "우주최강미녀",
    "행동하는양심",
    "다시태어난대도오직",
    "전지전능한",
    "당신이있어행복한",
    "마지막잎새",
    "조현수장현재김정수백학준그리고",
    "신이라불리운여자",
    "안보이는라디오의신",
    "승률50%을찍은",
    "퀘법에게40딜을맞은",
    "칭호: 3000등",
    "갑자기방종을해버린",
    "20%확률로Rare을뽑은"
  );
  var E = new Array(
    "절벽에핀한송이장미",
    "트수의이빨을갈아버린",
    "20년경력서순맛집",
    "또킬각을놓쳐버린",
    "선술집난투의최강자",
    "의외의실력을보여준",
    "방종곡을트는",
    "신조차질투하는여자",
    "마지막순간에생각나는",
    "키카드가나오지않는",
    "승률30%을찍은",
    "묘수풀이200트달성한",
    "또지각을해버린",
    "조치에게호스팅을넣은",
    "하스스톤의망령",
    "17.5%확률로Epic을뽑은"
  );
  var L = new Array("초롱이친구", "동전산거를성공시킨", "굴단의해골을손에넣은");
  var GL = new Array("그랜드마스터(진)");

  var ran = randomNum(1, 1000);
  if (ran <= 500) {
    client.say(channel, `/me [Common] ${C[randomNum(0, C.length - 1)]}${name}`);
  } else if (ran <= 700) {
    client.say(channel, `/me [Rare] ${R[randomNum(0, R.length - 1)]}${name}`);
  } else if (ran <= 875) {
    client.say(channel, `/me [Epic] ${E[randomNum(0, E.length - 1)]}${name}`);
  } else if (ran <= 950) {
    client.say(
      channel,
      `/me [Legendary] ✨${L[randomNum(0, L.length - 1)]}${name}, `
    );
  } else {
    client.say(
      channel,
      `/me [Legendary++] ✨✨✨${GL[randomNum(0, GL.length - 1)]}${name}✨✨✨`
    );
  }
}

// Called every time a message comes in

/*original code - nightbot ver.
$(eval var i = Math.floor(Math.random() * 2);
  if('$(1)'=='null' || '$(2)'=='null'){ '맞짱뜨게 할 것들을 입력해주세요!';}
  else{
   if(i==0){
     const list = ['$(1)님이 $(2)님을 완전히 끝내버렸습니다!', '$(1)님이 $(2)님을 파괴했습니다!', '$(1)님이 $(2)님을 압도했습니다!'];
     list[Math.floor(Math.random() * list.length)]; }
   else if(i==1){
     const list = ['$(2)님이 $(1)님을 때려눕혔습니다!', '$(2)님이 $(1)님을 없애버렸습니다!', '$(2)님이 $(1)님을 삭제했습니다!'];
     list[Math.floor(Math.random() * list.length)]; }})
*/

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
  } else if (commandName == "!트게더") {
    client.say(channel, `https://tgd.kr/s/suvely`);
  } else if (commandName == "!가챠") {
    gatcha(channel, "수블리");
  } else if (commandName == "!지능") {
    inteligence(channel);
  } else if (commandName == "!방송") {
    client.say(
      channel,
      `수블리님이 방송 시작한지 ${days + 1}일째! 첫 방송날은 2021년 7월 5일!`
    );
  } else if (commandName == "!수정연차") {
    for (var i = 0; i < 5; i++) {
      gatcha(channel, "수블리");
    }
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
//https://api.twitch.tv/helix/search/channels?query=surrenderhs < api
