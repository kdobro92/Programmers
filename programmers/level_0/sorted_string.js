function solution(my_string) {
  var answer = "";
  const lower = my_string.toLowerCase().split("").sort();
  answer = lower.join("");

  return answer;
}
