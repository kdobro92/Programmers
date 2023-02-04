function solution(score) {
  let ans = [];

  for (let i = 0; i < score.length; i++) {
    let n1 = score[i][0];
    let n2 = score[i][1];
    ans.push((n1 + n2) / 2);
  }

  const sorted = ans.slice().sort((a, b) => b - a);

  return ans.map((v) => sorted.indexOf(v) + 1);
}
