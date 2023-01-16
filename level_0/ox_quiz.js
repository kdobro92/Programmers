function solution(quiz) {
  const ans = [];

  quiz.forEach((el) => {
    const exQuiz = el.split(" ");

    const A = Number(exQuiz[0]);
    const B = Number(exQuiz[2]);

    let calc = 0;

    if (exQuiz[1] === "+") {
      calc = A + B;
    } else {
      calc = A - B;
    }

    const result = Number(exQuiz[4]);

    if (calc === result) {
      ans.push("O");
    }
    if (calc !== result) {
      ans.push("X");
    }
  });

  return ans;
}
