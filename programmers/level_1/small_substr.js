function solution(t, p) {
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    let num = t.substr(i, p.length);

    if (num <= p) {
      count++;
    }
  }

  return count;
}
