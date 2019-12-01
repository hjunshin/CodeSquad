var inGame = false;

var total = {
  strike: 0,
  ball: 0,
  out: 0,
  hit: 0
};

var gameMsg = {
  strike: "스트라이크",
  ball: "볼",
  balls: "볼넷 (안타)",
  out: "아웃",
  hit: "안타",
  struck: "삼진 아웃",
  enter: "타자가 타석에 입장했습니다.",
  first: "첫 번째 ",
  next: "다음 ",
  start: "신나는 야구 게임",
  over: "GAME OVER",
  result: "최종 안타수"
};

var category = [gameMsg.strike, gameMsg.ball, gameMsg.out, gameMsg.hit];
var categorySize = category.length - 1;

var gameInfo = document.querySelector(".game-info");

function gameStart() {

  document.querySelector(".cover").style.display = "none";
  gameInfo.innerHTML += '<p>' + gameMsg.start + ' !</p>';

  if (total.out === 3) {
    gameOver();
  } else {
    enterBatter();
    ballCount();
  }

}

function gameOver() {
  gameInfo.innerHTML += '<br><p>' + gameMsg.result + ': ' + total.hit + '</p>';
  gameInfo.innerHTML += '<p>' + gameMsg.over + '</p>';
  countReset();
  total.out = 0;
}

function countReset() {
  total.strike = 0;
  total.ball = 0;
}

function printMsg(msg) {
  gameInfo.innerHTML += '<p>' + msg + ' !</p>';
  gameInfo.innerHTML += '<p>' + '<span class="bg-ball">' + total.ball + '<abbr title="ball">B</abbr></span>' + '<span class="bg-strike">' + total.strike + '<abbr title="strike">S</abbr></span>' + '<span class="bg-out">' + total.out + '<abbr title="out">O</abbr></span>' + '</p><br>';
}

function ballCount() {

  switch (category[ranResult(0, categorySize)]) {
    case gameMsg.strike:

      total.strike = ++total.strike;
      printMsg(gameMsg.strike);

      if (total.strike === 3) {
        total.out = ++total.out;
        countReset();
        printMsg(gameMsg.struck);

        if (total.out === 3) {
          countReset();
          gameOver();
        } else {
          enterBatter();
          ballCount();
        }

      } else if (total.strike > 0 || total.strike < 3) {
        ballCount();
      }

      break;
    case gameMsg.ball:

      total.ball = ++total.ball;
      printMsg(gameMsg.ball);

      if (total.ball === 4) {
        total.hit = ++total.hit;
        gameInfo.innerHTML += '<p>' + gameMsg.balls + ' !</p>';
        countReset();
        enterBatter();
        ballCount();
      } else if (total.ball > 0 || total.ball < 4) {
        ballCount();
      }

      break;
    case gameMsg.out:

      total.out = ++total.out;
      printMsg(gameMsg.out);

      if (total.out === 3) {
        gameOver();
      } else if (total.out > 0 || total.out < 3) {
        countReset();
        enterBatter();
        ballCount();
      }

      break;
    case gameMsg.hit:

      total.hit = ++total.hit;
      gameInfo.innerHTML += '<p>' + gameMsg.hit + ' !</p>';
      countReset();
      enterBatter();
      ballCount();

      break;
    default:

  }
}

function enterBatter() {
  if (inGame) {
    gameInfo.innerHTML += '<br><p>' + gameMsg.next + gameMsg.enter + '</p>';
  } else {
    gameInfo.innerHTML += '<br><p>' + gameMsg.first + gameMsg.enter + '</p>';
    inGame = true;
  }
}

function ranResult(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
