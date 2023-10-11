function solution(array, commands) {
  const answer = [];

  commands.map((com) => {
    const range = array.slice(com[0] - 1, com[1]);
    range.sort((a, b) => a - b);
    answer.push(range[com[2] - 1]);
  });

  return answer;
}
