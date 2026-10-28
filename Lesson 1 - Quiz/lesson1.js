let btn = document.getElementById("btn");
let homepage = document.getElementById("homepage");
let quizPage = document.getElementById("questions");
let counter = document.getElementById("counter");
let answers = document.querySelectorAll(".answers");

btn.addEventListener("click", () => {
  homepage.remove();
  quizPage.classList.toggle("hidden");
});

answers.forEach((button) => {
  button.addEventListener("click", () => {
    const isCorrect = button.dataset.correct === "true";
    if (isCorrect) {
      button.classList.add("correct");
      button.insertAdjacentHTML("beforeend", "<span>✅</span>");
    } else {
      button.classList.add("wrong");
    }
  });
});
