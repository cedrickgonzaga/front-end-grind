let btn = document.getElementById("btn");
let homepage = document.getElementById("homepage");
let quizPage = document.getElementById("questions");
let counter = document.getElementById("counter");
let answers = document.querySelectorAll(".answers");
let correctAnswer = document.getElementById("correctAnswer");

btn.addEventListener("click", () => {
  homepage.remove();
  quizPage.classList.toggle("hidden");
});

answers.forEach((button) => {
  button.addEventListener("click", () => {
    const isWrong = button.dataset.correct === "wrong";
    if (isWrong) {
      button.classList.add("wrong");
    }
  });
});

correctAnswer.addEventListener("click", () => {
  correctAnswer.classList.add("correct");
  correctAnswer.insertAdjacentHTML("beforeend", "<span>✅</span>");
  correctAnswer.disabled = true;
  counter.textContent = Number(counter.textContent) + 1;
  answers.forEach((button) => {
    if (button.dataset.correct == "wrong") {
      button.disabled = true;
    }
  });
});
