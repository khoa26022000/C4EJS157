const toggleButton = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
console.log("toggleButton", navigation);

toggleButton.addEventListener("click", actionToggle());
function actionToggle() {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
}
