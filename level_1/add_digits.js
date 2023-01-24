function solution(n) {
  var answer = 0;
  let str = String(n);
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    answer += Number(arr[i]);
  }

  return answer;
}
