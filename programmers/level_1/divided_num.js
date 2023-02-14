function solution(arr, divisor) {
  let ans = [];
  let suc_cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      ans.push(arr[i]);
      suc_cnt++;
    }
  }

  if (suc_cnt > 0) {
    ans.sort(function (a, b) {
      return a - b;
    });
  } else {
    ans.push(-1);
  }

  return ans;
}
