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
  out: "아웃",
  hit: "안타",
  enter: "타자가 타석에 입장했습니다.",
  first: "첫 번째 ",
  next: "다음 "
};

var category = [gameMsg.strike, gameMsg.ball, gameMsg.out, gameMsg.hit];
var categorySize = category.length - 1;

var gameInfo = document.querySelector(".game-info");

function gameStart() {
  console.log("게임 시작");

  document.querySelector(".cover").style.display = "none";

  if (total.out === 3) {
    gameEnd();
  } else {

    enterBatter();
    ballCount(total.strike, total.ball, total.out, total.hit);
  }

}

function gameEnd() {
  console.log("게임 종료");
  total.strike = 0;
  total.ball = 0;
  total.out = 0;
}

function ballCount(strike, ball, out, hit) {
  var strikeSel = ".strike .count > span";
  var ballSel = ".ball .count > span";
  var outSel = ".out .count > span";

  switch (category[getResult(0, categorySize)]) {
    case gameMsg.strike:

      strike = ++total.strike;
      document.querySelector(strikeSel + ":nth-child(" + strike + ")").classList.add("on");
      gameInfo.innerHTML += '<p>' + gameMsg.strike + " !" + '</p>';
      gameInfo.innerHTML += '<p>' + strike + 'S ' + ball + 'B  ' + out + 'O' + '</p>';

      if (strike === 3) {
        out = ++total.out;
      }

      break;
    case gameMsg.ball:

      ball = ++total.ball;
      document.querySelector(ballSel + ":nth-child(" + ball + ")").classList.add("on");
      gameInfo.innerHTML += '<p>' + gameMsg.ball + " !" + '</p>';
      gameInfo.innerHTML += '<p>' + strike + 'S ' + ball + 'B  ' + out + 'O' + '</p>';

      if (ball === 4) {
        hit = ++total.hit;
      }

      break;
    case gameMsg.out:

      out = ++total.out;
      document.querySelector(outSel + ":nth-child(" + out + ")").classList.add("on");
      gameInfo.innerHTML += '<p>' + gameMsg.out + " !" + '</p>';
      gameInfo.innerHTML += '<p>' + strike + 'S ' + ball + 'B  ' + out + 'O' + '</p>';

      enterBatter();

      if (out === 3) {
        gameEnd();
      }

      break;
    case gameMsg.hit:

      hit = ++total.hit;
      gameInfo.innerHTML += '<p>' + gameMsg.hit + " !" + '</p>';
      total.strike = 0;
      total.ball = 0;

      enterBatter();
      break;
    default:

  }

  console.log(strike, ball, out, hit);
  console.log(total.strike, total.ball, total.out, total.hit);
}

function enterBatter() {

  if (inGame) {
    gameInfo.innerHTML += '<p>' + gameMsg.next + gameMsg.enter + '</p>';
  } else {
    gameInfo.innerHTML += '<p>' + gameMsg.first + gameMsg.enter + '</p>';
    inGame = true;
  }

}

function getResult(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
