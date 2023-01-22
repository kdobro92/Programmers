function solution(order) {
  var answer = 0;
  order = order + "";
  const arr = order.split("");

  const filtered = arr.filter(
    (el) => Number(el) === 3 || Number(el) === 6 || Number(el) === 9
  );

  answer = filtered.length;

  return answer;
}
