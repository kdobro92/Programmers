function solution(array) {
  var answer = 0;
  const toStr = array + "";
  const splited = toStr.split("");

  for (let i = 0; i < splited.length; i++) {
    if (splited[i].includes("7")) {
      answer++;
    }
  }

  return answer;
}
