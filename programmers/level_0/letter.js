function solution(message) {
  var answer = 0;
  var msgLth = message.length;

  for (let i = 0; i < msgLth + 1; i++) {
    answer = i * 2;
  }

  return answer;
}
