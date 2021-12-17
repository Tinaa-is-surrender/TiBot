const tmi = require("tmi.js");
const axios = require("axios").default;
const localStorage = require('localStorage')
//getParameter

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
// hearthstone

client.on("chat", function(channel, user, message, self) {
  if (message.startsWith("!card")) {
    var axios = require("axios").default;
    var cardname = message.slice(6);
    var card = encodeURIComponent(cardname);

    var cardcost;
    var attack;
    var health;
    var text;
    var flavor;
    var rarity;
    var type;

    var options = {
      method: "GET",
      url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${card}`,
      params: { collectible: "1", locale: "koKR" },
      headers: {
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": "5eca39d3d2msha68f3b634afde86p140892jsnd4ed848f1aac"
      }
    };
    axios
      .request(options)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.error(error);
      });

    if (card == null) client.say(channel, `pls input cardname`);
    else client.say(channel, `we found this: ${cardname}`);
    client.say(channel, ``);
  }
});

//inteligence
function inteligence(channel) {
  //높은 숫자 나오는 주사위 = 낮은 확률로 나옴
  //낮은 숫자 나오는 주사위 = 높은 확률로 나옴
  //1~49 나오는 주사위는 80%, 50~100 나오는 주사위는 20%.
  var ran2 = randomNum(1, 100);
  if (ran2 >= 80) {
    var int = randomNum(50, 100);
  } else {
    var int = randomNum(1, 49);
  }
  var name = "수블리";
  var AI = new Array("왜이리 똑똑해?", "천재 아니야?", "당신 누구야!");
  var BI = new Array("좀 치는데?", "은근 똑똑하네");
  var CI = new Array("평범하네요", "평소대로네요", `역시 ${name} ㅋㅋ`);
  var DI = new Array("바보다에요");

  if (int >= 80) {
    client.say(
      channel,
      `${name}의 지능은 현재 ${int}%! ${AI[randomNum(0, AI.length - 1)]}`
    );
  } else if (int >= 50) {
    client.say(
      channel,
      `${name}의 지능은 현재 ${int}%! ${BI[randomNum(0, BI.length - 1)]}`
    );
  } else if (int >= 30) {
    client.say(
      channel,
      `${name}의 지능은 현재 ${int}%! ${CI[randomNum(0, CI.length - 1)]}`
    );
  } else {
    client.say(
      channel,
      `${name}의 지능은 현재 ${int}%! ${DI[randomNum(0, DI.length - 1)]}`
    );
  }
}

//Sing a song
function Sing(channel, message, tags) {}
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
    "밧줄이타서당황한",
    "도적승률70%",
    "요즘나이가들어슬픈",
    "시간이모자라슬픈",
    "피의울음소리를뽑은",
    "보루방패를뽑은",
    "트수들의고막을찢어버린",
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
  var L = new Array(
    "초롱이친구",
    "동전산거를성공시킨",
    "굴단의해골을손에넣은",
    "첫번째죽음의기사"
  );
  var GL = new Array("그랜드마스터(진)");

  var ran = randomNum(1, 1000);
  if (ran <= 500) {
    client.say(channel, `/me [Common] ${C[randomNum(0, C.length - 1)]}${name}`);
  } else if (ran <= 700) {
    client.say(channel, `/me [Rare] ${R[randomNum(0, R.length - 1)]}${name}`);
  } else if (ran <= 875) {
    client.say(channel, `/me [Epic] ${E[randomNum(0, E.length - 1)]}${name}`);
  } else if (ran <= 975) {
    client.say(
      channel,
      `/me [Legendary] ✨${L[randomNum(0, L.length - 1)]}${name}`
    );
  } else {
    client.say(
      channel,
      `/me [Legendary++] ✨✨✨${GL[randomNum(0, GL.length - 1)]}${name}✨✨✨`
    );
  }
}

// Called every time a message comes in

//duel!

client.on("chat", function(channel, user, message, self) {
  if (message.startsWith("!맞짱")) {
    var duel = Math.floor(Math.random() * 2);
    var input = message.split(" ")[1];
    var input2 = message.split(" ")[2];
    if (input == null || input2 == null)
      client.say(channel, "맞짱을 뜰 둘을 입력 해주세요!");
    else {
      if (duel == 0) {
        const list1 = [
          input + "님이 " + input2 + "님을 완전히 끝내버렸습니다!" ||
            input + "님이 " + input2 + "님을 파괴했습니다!" ||
            input + "님이 " + input2 + "님을 압도했습니다!"
        ];
        client.say(channel, `${list1}`);
      } else if (duel == 1) {
        const list2 = [
          input2 + "님이 " + input + "님을 때려눕혔습니다!" ||
            input2 + "님이 " + input + "님을 없애버렸습니다!" ||
            input2 + "님이 " + input + "님을 삭제했습니다!"
        ];
        client.say(channel, `${list2}`);
      }
    }
  }
});

//check
var fishing = 0;
client.on("chat", function(channel, user, message, self) {
  if (message.startsWith("!추천")) {
    fishing = fishing + 1;
    client.say(channel, `${fishing}번째 물고기가 되셨어요`);
  }
});
//songs

client.on("chat", function(channel, user, message, self) {
  const songlist = [];
  const inputsong = message.split(" ")[1];
  function savesonglist(){
    localStorage.setItem
  }
})
//fishing

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
  } else if (commandName == "!티봇 명령어") {
    client.say(channel, `명령어: !트게더 !가챠 !지능 !추천 !방송 !맞짱`);
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
