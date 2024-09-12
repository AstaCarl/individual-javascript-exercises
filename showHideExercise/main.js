const btn = document.getElementById("btn");
const hiddenMessage = document.getElementById("hiddenMessage");

btn.addEventListener("mouseover", () => {
  hiddenMessage.classList.remove("hidden");
  hiddenMessage.classList.add("display");
});

btn.addEventListener("mouseout", () => {
  hiddenMessage.classList.remove("display");
  hiddenMessage.classList.add("hidden");
});
