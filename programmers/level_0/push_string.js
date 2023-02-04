function solution(A, B) {
  if (A === B) {
    return 0;
  }

  let cnt = 0;
  let toArr = A.split("");

  for (let i = toArr.length - 1; i >= 0; i--) {
    let tmp = toArr.splice(toArr.length - 1, 1)[0];

    toArr.unshift(tmp);
    cnt++;

    if (toArr.join("") === B) {
      return cnt;
    }
  }
  return -1;
}
