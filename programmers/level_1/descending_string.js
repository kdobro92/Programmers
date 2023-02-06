function solution(s) {
  let ans = "";

  let arr = s.split("");
  let sort = arr.sort();
  let reversed = sort.reverse().join("");

  ans = reversed;
  return ans;
}
