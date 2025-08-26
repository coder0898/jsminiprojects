//DOM Element

const TabButtons = document.querySelectorAll(".tab-buttons .tab");
const TabContainer = document.querySelectorAll(".content");

TabButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    TabButtons.forEach((btn) => btn.classList.remove("active"));

    TabContainer.forEach((elm) => elm.classList.remove("active"));

    TabButtons[index].classList.add("active");
    TabContainer[index].classList.add("active");
  });
});
