# 코드스쿼드 온라인 테스트

## 1단계: 간단 야구 게임 구현하기

### 코드 동작 설명
- gameStart
  - 게임 스타트 버튼 클릭 시 동작
  - 게임 시작 화면 숨기기
  - 게임 시작 메세지 출력
  - 아웃카운트가 3일때 게임 종료 함수 호출
  - 타자 입장 문구 출력 함수 호출
  - 볼 카운트 문구 출력 함수 호출

- gameOver
  - 총 안타 개수, 게임 종료 문구 출력
  - 볼 카운트 리셋 함수 호출
  - 아웃 카운트 리셋
 
- countReset
  - 스트라이크, 볼 카운트 리셋
 
- printMsg
  - 스트라이크, 볼, 아웃, 안타 중 하나가 랜덤 정해져 문구 출력
  - 볼 카운트 문구 출력
  
- ballCount
  - 랜덤 함수를 호출해 스트라이크, 볼, 아웃, 안타로 분기를 나눔
  - 스트라이크 3번 시 아웃 카운트 추가, 3아웃 시 게임 종료
  - 볼 4번 시 안타 카운트 추가, 볼 카운트 리셋
  - 아웃 시 아웃 카운트 추가, 볼 카운트 리셋 및 3아웃 시 게임 종료
  - 안타 시 안타 카운트 추가, 볼 카운트 리셋 및 다음 타자 등장 문구 출력

- enterBatter
  - 타자 입장 문구 출력
  - 첫 번째 타자 등장 시 <b>첫 번째</b> 타자가 등장하였습니다 문구 출력
  - 이후는 타자가 등장하였습니다 문구 출력
  
- ranResult
  - 최솟값, 최댓값을 계산식을 통해 랜덤 숫자 출력
  - 위를 활용해 스트라이크, 볼, 아웃, 안타를 중 하나를 랜덤으로 출력하기 위해 생성
