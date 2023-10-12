function solution(food) {
  var answer = "";
  for (i = 1; i < food.length; i++) {
    answer += String(i).repeat(parseInt(food[i] / 2));
  }
  rev = answer.split("").reverse().join("");
  answer += "0";
  answer += rev;
  return answer;
}
