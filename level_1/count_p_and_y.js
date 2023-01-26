function solution(s) {
  let one = s.toLowerCase().split("");
  let cntP = 0;
  let cntY = 0;

  for (let i = 0; i < one.length; i++) {
    if (one[i] === "p") {
      cntP++;
    } else if (one[i] === "y") {
      cntY++;
    }
  }

  if (cntP === cntY) return true;
  else return false;
}
