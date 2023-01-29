function solution(n) {
  var ans = 0;
  let str = n + "";
  let splited = str.split("");
  ans = splited.sort(function (a, b) {
    return b - a;
  });

  let result = ans.join("");

  return Number(result);
}
