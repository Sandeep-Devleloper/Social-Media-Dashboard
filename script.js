let menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click", () => {
//   menuButton.style.transform = "scale(1.5)";
  if (menuButton.style.display !== "block") {
    menuButton.style.display = "block";
  }
});
