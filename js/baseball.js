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
      score: 0
    }
  }

  function awayData() {
    var $away = $(".away").find(".lineup-list > li");
    teamData.away.name = $("#away-team").val();
    if($("#away-team").val() === "") {
      alert("원정팀 이름을 입력해주세요.");
      $("#away-team").focus();
    }
    for (var i = 1; i <= $away.length; i += 1) {
      teamData.away.batter.push($("#away-batter" + i).val());
      teamData.away.avg.push(Number($("#away-avg" + i).val()));
      if ($("#away-batter" + i).val() === "") {
        alert("원정팀" + i + " 번 타자 이름을 입력해주세요.");
        $("#away-batter" + i).focus();
        return;
      }
      if ($("#away-avg" + i).val() === "") {
        alert("원정팀" + i + " 번 타자 타율을 입력해주세요.");
        $("#away-avg" + i).focus();
        return;
      } else if (!Number($("#away-avg" + i).val()) > 0.1 && Number($("#away-avg" + i).val()) < 0.5) {
        alert("타율은 0.1 ~ 0.5 사이값으로 입력해주세요.");
        $("#away-avg" + i).focus();
        return;
      }
    }
  }

  function homeData() {
    var $home = $(".home").find(".lineup-list > li");
    teamData.home.name = $("#home-team").val();
    if($("#home-team").val() === "") {
      alert("홈팀 이름을 입력해주세요.");
      $("#home-team").focus();
    }
    for (var i = 1; i <= $home.length; i += 1) {
      teamData.home.batter.push($("#home-batter" + i).val());
      teamData.home.avg.push(Number($("#home-avg" + i).val()));
      if ($("#home-batter" + i).val() === "") {
        alert("홈팀" + i + " 번 타자 이름을 입력해주세요.");
        $("#home-batter" + i).focus();
        return;
      }
      if ($("#home-avg" + i).val() === "") {
        alert("홈팀" + i + " 번 타자 타율을 입력해주세요.");
        $("#home-avg" + i).focus();
        return;
      } else if (!Number($("#home-avg" + i).val()) > 0.1 && Number($("#home-avg" + i).val()) < 0.5) {
        alert("타율은 0.1 ~ 0.5 사이값으로 입력해주세요.");
        $("#home-avg" + i).focus();
        return;
      }
    }
  }

  function awayList(){
    var $awayList = $(".lineup-check .away").find(".lineup-list > li");
    $(".away .team-name").text(teamData.away.name);
    for (var i = 0; i < $awayList.length; i += 1) {
      $awayList.eq(i).text(teamData.away.batter[i] + " " + teamData.away.avg[i]);
    }
  }

  function homeList(){
    var $homeList = $(".lineup-check .home").find(".lineup-list > li");
    $(".home .team-name").text(teamData.home.name);
    for (var i = 0; i < $homeList.length; i += 1) {
      $homeList.eq(i).text(teamData.home.batter[i] + " " + teamData.home.avg[i]);
    }
  }

  $("#btn-lineup-submit").on("click", function() {
    awayData();
    homeData();
    $(".lineup-entry").hide();
    $(".lineup-check").show();
    awayList();
    homeList();
  });

  function batterResult(avg) {
    var ran = Math.random().toFixed(3);
    var strike = (1 - avg) / 2 - 0.05;
    var ball = (1 - avg) / 2 - 0.05;
    var out = 0.1;
    if (ran > out && ran <= avg) {
      console.log("안타");
    } else if (ran > avg && ran <= strike + ball) {
      console.log("스트라이크");
    } else if (ran > strike + ball) {
      console.log("볼");
    } else if (ran >= 0 && ran <= out) {
      console.log("아웃");
    }
  }

});
