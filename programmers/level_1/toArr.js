function solution(n) {
  let ans = [];
  let str = n + "";
  let splited = str.split("");
  let reversed = splited.reverse();

  for (let i = 0; i < reversed.length; i++) {
    ans.push(Number(reversed[i]));
  }
  return ans;
}
