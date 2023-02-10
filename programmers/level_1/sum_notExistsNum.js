function solution(numbers) {
  var ans = 0;
  let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < numArr.length; i++) {
    if (!numbers.includes(numArr[i])) {
      ans += numArr[i];
      console.log(ans);
    }
  }

  return ans;
}
