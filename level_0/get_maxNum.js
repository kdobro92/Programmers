function solution(array) {
  var answer = [];

  const maxNum = Math.max(...array);
  const indexOfMaxNum = array.indexOf(maxNum);
  answer.push(maxNum, indexOfMaxNum);

  return answer;
}
