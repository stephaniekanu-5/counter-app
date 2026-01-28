const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const toggleThemeBtn = document.getElementById("toggleTheme");
let count = localStorage.getItem("count")
  ? Number(localStorage.getItem("count"))
  : 0;
countDisplay.textContent = count;
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
increaseBtn.addEventListener("click", () => {
  count++;
  updateCount();
});
decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCount();
  }
});
resetBtn.addEventListener("click", () => {
  count = 0;
  updateCount();
});
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});
function updateCount() {
  countDisplay.textContent = count;
  localStorage.setItem("count", count);
}