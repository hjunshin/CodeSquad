# 코드스쿼드 온라인 테스트

## 2단계: 팀데이터 입력 및 시합 기능 구현

### 코드 동작 설명

- awayData
  - 원정팀의 팀이름, 1~9번 타자 이름과 타율 정보가 정확히 입력 됐는지 체크하여 입력 오류 시 안내 메세지 출력
  - 오류가 없을 시 awayData 함수 호출

- homeData
  - 홈팀의 팀이름, 1~9번 타자 이름과 타율 정보가 정확히 입력 됐는지 체크하여 입력 오류 시 안내 메세지 
  - 오류가 없을 시 lineupChk 함수 호출
 
- awayList
  - 원정팀의 팀이름, 1~9번 타자 이름과 타율 정보를 저장

- homeList
  - 홈팀의 팀이름, 1~9번 타자 이름과 타율 정보를 저장

- lineupChk
  - 원정팀, 홈팀 정보 입력 화면을 숨기고 저장된 원정팀, 홈팀의 정보를 보여준다.
  - awayList 함수 호출
  - homeList 함수 호출

- $("#btn-lineup-submit").on("click")
  - 라인업 제출 버튼 클릭 시 동작
  - awayData 함수 호출
  
- $("#btn-game-start").on("click")
  - 저장된 라인업 화면을 숨기고 게임 정보를 출력하는 화면을 보여준다.
  - 저장된 원정팀 vs 홈팀 메세지 출력
  - batterAway 함수 호출
  
- inningAway
  - 원정팀 이닝 카운트 증가
  - 해당하는 회초 원정팀 공격 메세지 출력
  
- inningHome
  - 홈팀 이닝 카운트 증가
  - 해당하는 회말 홈팀 공격 메세지 출력

- batterAway
  - 해당하는 순번의 원정팀 타자 정보 출력 
  - batterResult 함수 호출

- batterHome
  - 해당하는 순번의 홈팀 타자 정보 출력 
  - batterResult 함수 호출
  
- hitResult
  - 안타 메세지 출력
  - 매개변수에 따른 홈팀과 원정팀을 구분하여 각각 hitAway, hitHome 함수 호출
  - printCount 함수 호출
  - nextBetter 함수 호출
  
- hitAway
  - 원정팀 안타 카운트 추가
  - 원정팀 스트라이크, 볼 카운트 초기화
  - 안타가 4회 이상이면 원정팀 득점 카운트 증가 및 1득점 메세지 출력
  - 원정팀 x점 : x점 홈팀 메세지 출력

- hitHome
  - 홈팀 안타 카운트 추가
  - 홈팀 스트라이크, 볼 카운트 초기화
  - 안타가 4회 이상이면 홈팀 득점 카운트 증가 및 1득점 메세지 출력
  - 원정팀 x점 : x점 홈팀 메세지 출력

- strikeResult
  - 스트라이크 메세지 출력
  - 매개변수에 따른 홈팀과 원정팀을 구분하여 각각 strikeAway, strikeHome 함수 호출
  
- strikeAway
  - 원정팀 스트라이크 카운트 증가
  - 스트라이크가 0과 같거나 크고 3보다 작을 시 printCount, batterAway 함수 호출
  - 스트라이크가 3일 때 outResult 함수 호출
  
- strikeHome
  - 홈팀 스트라이크 카운트 증가
  - 스트라이크가 0과 같거나 크고 3보다 작을 시 printCount, batterHome 함수 호출
  - 스트라이크가 3일 때 아웃처리를 위한 outResult 함수 호출
  
- ballResult
  - 볼 메세지 출력
  - 매개변수에 따른 홈팀과 원정팀을 구분하여 각각 ballAway, ballHome 함수 호출

- ballAway
  - 원정팀 볼 카운트 증가
  - 볼이 0과 같거나 크고 4보다 작을 시 printCount, batterAway 함수 호출
  - 볼이 4일 때 안타처리를 위한 hitResult 함수 호출

- ballHome
  - 홈팀 볼 카운트 증가
  - 볼이 0과 같거나 크고 4보다 작을 시 printCount, batterHome 함수 호출
  - 볼이 4일 때 안타처리를 위한 hitResult 함수 호출
  
- outResult
  - 아웃 메세지 출력
  - 매개변수에 따른 홈팀과 원정팀을 구분하여 각각 outAway, outHome 함수 호출
  - 현재 카운트 메시지 출력을 위한 printCount 함수 호출
  - 다음 타자 정보 출력을 위한 nextBetter 함수 호출
  
- outAway
  - 원정팀 아웃 카운트 증가
  - 원정팀 스트라이크, 볼 카운트 초기화
  - 아웃이 3일 때 아웃 카운트 초기화
  - 해당 회초 원정팀 공격 종료 메세지 출력
  - 홈팀 이닝 변경을 위한 inningHome 함수 호출

- outHome
  - 홈팀 아웃 카운트 증가
  - 홈팀 스트라이크, 볼 카운트 초기화
  - 아웃이 3일 때 아웃 카운트 초기화
  - 해당 회말 홈팀 공격 종료 메세지 출력
  - 원정팀 이닝 변경을 위한 inningAway 함수 호출

- nextBetter
  - 매개변수에 따른 홈팀과 원정팀을 구분하여 각각 타순 카운트 증가
  - 9번 타순이 될 경우 타순 카운트 초기화
  - batterAway, batterHome 함수 호출

- printCount
  - 원정팀, 홈팀 각각의 스트라이크, 볼, 아웃 카운트 메세지 출력

- batterResult
  - 정해진 확률에 따라 안타, 스트라이크, 볼, 아웃 중 하나의 결과를 출력하고 각각 해당하는 함수로 이동
