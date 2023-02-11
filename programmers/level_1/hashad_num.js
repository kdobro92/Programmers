function solution(x) {
  let sum = 0;
  let toStr = x + "";

  let toArr = toStr.split("");

  for (let i = 0; i < toArr.length; i++) {
    sum += Number(toArr[i]);
  }

  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}
