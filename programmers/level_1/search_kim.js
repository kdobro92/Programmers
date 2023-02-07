function solution(seoul) {
  var ans = "";
  let idx = 0;

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      idx = seoul.indexOf(seoul[i]);
    }
  }

  ans = `김서방은 ${idx}에 있다`;
  return ans;
}
