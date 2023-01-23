function solution(money) {
  var answer = [];

  let amer = 5500;

  let cnt = Math.floor(money / amer);
  let change = money - amer * cnt;
  answer.push(cnt, change);
  return answer;
}
