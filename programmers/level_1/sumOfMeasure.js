function solution(left, right) {
  let ans = 0;

  for (let i = left; i <= right; i++) {
    let cnt = 1;
    for (j = 2; j <= i; j++) {
      if (i % j == 0) cnt++;
    }

    if (cnt % 2 == 0) ans += i;
    else ans -= i;
  }

  return ans;
}
