$(function() {

  var teamData = {
    away: {
      name: "",
      batter: [],
      avg: [],
      hit: 0,
      strike: 0,
      ball: 0,
      out: 0,
      order: 0,
      inning: 0,
      score: 0
    },
    home: {
      name: "",
      batter: [],
      avg: [],
      hit: 0,
      strike: 0,
      ball: 0,
      out: 0,
      order: 0,
      inning: 0,
      score: 0
    }
  }

  function awayData() {
    var $away = $(".away").find(".lineup-list > li");
    teamData.away.name = $("#away-team").val();
    if ($("#away-team").val() === "") {
      alert("원정팀 이름을 입력해주세요.");
      $("#away-team").focus();
      return;
    }
    for (var i = 1; i <= $away.length; i += 1) {
      teamData.away.batter.push($("#away-batter" + i).val());
      teamData.away.avg.push($("#away-avg" + i).val());
      if ($("#away-batter" + i).val() === "") {
        alert("원정팀" + i + " 번 타자 이름을 입력해주세요.");
        $("#away-batter" + i).focus();
        return;
      }
      if ($("#away-avg" + i).val() === "") {
        alert("원정팀" + i + " 번 타자 타율을 입력해주세요.");
        $("#away-avg" + i).focus();
        return;
      } else if (Number($("#away-avg" + i).val()) > 0.1 && Number($("#away-avg" + i).val()) < 0.5 === false) {
        alert("타율은 0.1 ~ 0.5 사이값으로 입력해주세요.");
        $("#away-avg" + i).focus();
        return;
      }
    }
    homeData();
  }

  function homeData() {
    var $home = $(".home").find(".lineup-list > li");
    teamData.home.name = $("#home-team").val();
    if ($("#home-team").val() === "") {
      alert("홈팀 이름을 입력해주세요.");
      $("#home-team").focus();
      return;
    }
    for (var i = 1; i <= $home.length; i += 1) {
      teamData.home.batter.push($("#home-batter" + i).val());
      teamData.home.avg.push($("#home-avg" + i).val());
      if ($("#home-batter" + i).val() === "") {
        alert("홈팀" + i + " 번 타자 이름을 입력해주세요.");
        $("#home-batter" + i).focus();
        return;
      }
      if ($("#home-avg" + i).val() === "") {
        alert("홈팀" + i + " 번 타자 타율을 입력해주세요.");
        $("#home-avg" + i).focus();
        return;
      } else if (Number($("#home-avg" + i).val()) > 0.1 && Number($("#home-avg" + i).val()) < 0.5 === false) {
        alert("타율은 0.1 ~ 0.5 사이값으로 입력해주세요.");
        $("#home-avg" + i).focus();
        return;
      }
    }
    lineupChk();
  }

  function awayList() {
    var $awayList = $(".lineup-check .away").find(".lineup-list > li");
    $(".away .team-name").text(teamData.away.name);
    for (var i = 0; i < $awayList.length; i += 1) {
      $awayList.eq(i).text(teamData.away.batter[i] + ", " + teamData.away.avg[i]);
    }
  }

  function homeList() {
    var $homeList = $(".lineup-check .home").find(".lineup-list > li");
    $(".home .team-name").text(teamData.home.name);
    for (var i = 0; i < $homeList.length; i += 1) {
      $homeList.eq(i).text(teamData.home.batter[i] + ", " + teamData.home.avg[i]);
    }
  }

  function lineupChk() {
    $(".lineup-entry").hide();
    $(".lineup-check").show();
    awayList();
    homeList();
  }

  $("#btn-lineup-submit").on("click", function() {
    awayData();
  });

  $("#btn-game-start").on("click", function() {
    $(".lineup-check").hide();
    $(".game-info").show();

    $(".game-info").append('<p>' + teamData.away.name + ' VS ' + teamData.home.name + '</p><br>');
    inningAway();
  });

  function inningAway() {
    teamData.away.inning++;
    $(".game-info").append('<p>' + teamData.away.inning + '회초 ' + teamData.away.name + ' 공격</p><br>');
    batterAway();
  }

  function inningHome() {
    teamData.home.inning++;
    $(".game-info").append('<p>' + teamData.home.inning + '회말 ' + teamData.home.name + ' 공격</p><br>');
    batterHome();
  }

  function batterAway() {
    $(".game-info").append('<p>' + (teamData.away.order + 1) + '번 ' + teamData.away.batter[teamData.away.order] + '</p>');
    batterResult("away", teamData.away.avg[teamData.away.order]);
  }

  function batterHome() {
    $(".game-info").append('<p>' + (teamData.home.order + 1) + '번 ' + teamData.home.batter[teamData.home.order] + '</p>');
    batterResult("home", teamData.home.avg[teamData.home.order]);
  }

  function hitResult(team) {
    $(".game-info").append('<p>안타!</p>');
    if (team === "away") {
      hitAway();
    } else if (team === "home") {
      hitHome();
    }
    printCount(team);
    nextBetter(team);
  }

  function hitAway() {
    teamData.away.hit++;
    teamData.away.strike = 0;
    teamData.away.ball = 0;
    if (teamData.away.hit >= 4) {
      teamData.away.score++;
      $(".game-info").append('<p>' + teamData.away.name + ' 1득점!</p>');
      $(".game-info").append('<p class="score">' + teamData.away.name + ' ' + teamData.away.score + ' : ' + teamData.home.score + ' ' + teamData.home.name + '</p>');
    }
  }

  function hitHome() {
    teamData.home.hit++;
    teamData.home.strike = 0;
    teamData.home.ball = 0;
    if (teamData.home.hit >= 4) {
      teamData.home.score++;
      $(".game-info").append('<p>' + teamData.home.name + ' 1득점!</p>');
      $(".game-info").append('<p class="score">' + teamData.away.name + ' ' + teamData.away.score + ' : ' + teamData.home.score + ' ' + teamData.home.name + '</p>');
    }
  }

  function strikeResult(team) {
    $(".game-info").append('<p>스트라이크!</p>');
    if (team === "away") {
      strikeAway(team);
    } else if (team === "home") {
      strikeHome(team);
    }
  }

  function strikeAway(team) {
    teamData.away.strike++;
    if (teamData.away.strike >= 0 && teamData.away.strike < 3) {
      printCount(team);
      batterAway();
    } else if (teamData.away.strike === 3) {
      outResult(team);
    }
  }

  function strikeHome(team) {
    teamData.home.strike++;
    if (teamData.home.strike >= 0 && teamData.home.strike < 3) {
      printCount(team);
      batterHome();
    } else if (teamData.home.strike === 3) {
      outResult(team);
    }
  }

  function ballResult(team) {
    $(".game-info").append('<p>볼!</p>');
    if (team === "away") {
      ballAway(team);
    } else if (team === "home") {
      ballHome(team);
    }
  }

  function ballAway(team) {
    teamData.away.ball++;
    if (teamData.away.strike >= 0 && teamData.away.ball < 4) {
      printCount(team);
      batterAway();
    } else if (teamData.away.ball === 4) {
      hitResult(team);
    }
  }

  function ballHome(team) {
    teamData.home.ball++;
    if (teamData.home.strike >= 0 && teamData.home.ball < 4) {
      printCount(team);
      batterHome();
    } else if (teamData.home.ball === 4) {
      hitResult(team);
    }
  }

  function outResult(team) {
    $(".game-info").append('<p>아웃!</p>');
    if (team === "away") {
      outAway(team);
    } else if (team === "home") {
      outHome(team);
    }
    printCount(team);
    nextBetter(team);
  }

  function outAway(team) {
    teamData.away.out++
    teamData.away.strike = 0;
    teamData.away.ball = 0;
    if (teamData.away.out === 3) {
      teamData.away.out = 0;
      $(".game-info").append('<p>' + teamData.away.inning + '회초 ' + teamData.away.name + ' 공격 종료</p>');
      inningHome();
    }
  }

  function outHome(team) {
    teamData.home.out++
    teamData.home.strike = 0;
    teamData.home.ball = 0;
    if (teamData.home.out === 3) {
      teamData.home.out = 0;
      $(".game-info").append('<p>' + teamData.home.inning + '회말 ' + teamData.home.name + ' 공격 종료</p>');
      inningAway();
    }
  }

  function nextBetter(team) {
    if (team === "away") {
      teamData.away.order++;
      if (teamData.away.order >= 0 && teamData.away.order < 9) {
        batterAway();
      } else if (teamData.away.order === 9) {
        teamData.away.order = 0;
        batterAway();
      }
    } else if (team === "home") {
      teamData.home.order++;
      if (teamData.home.order >= 0 && teamData.home.order < 9) {
        batterHome();
      } else if (teamData.home.order === 9) {
        teamData.home.order = 0;
        batterHome();
      }
    }
  }

  function printCount(team) {
    if (team === "away") {
      $(".game-info").append('<p>' + teamData.away.ball + 'B ' + teamData.away.strike + 'S ' + teamData.away.out + 'O</p><br>');
    } else if (team === "home") {
      $(".game-info").append('<p>' + teamData.home.ball + 'B ' + teamData.home.strike + 'S ' + teamData.home.out + 'O</p><br>');
    }
  }

  function batterResult(team, avg) {
    avg = Number(avg);
    var ran = Math.random().toFixed(3);
    var strike = (1 - avg) / 2 - 0.05;
    var ball = (1 - avg) / 2 - 0.05;
    var out = 0.1;
    if (ran > out && ran <= avg) {
      hitResult(team);
    } else if (ran > avg && ran <= strike + ball) {
      strikeResult(team);
    } else if (ran > strike + ball) {
      ballResult(team);
    } else if (ran >= 0 && ran <= out) {
      outResult(team);
    }
  }

});
