let btn = document.getElementById("btn");
let homepage = document.getElementById("homepage");
let quizPage = document.getElementById("questions");

btn.addEventListener("click", () => {
  homepage.remove();
  quizPage.classList.toggle("hidden");
});
