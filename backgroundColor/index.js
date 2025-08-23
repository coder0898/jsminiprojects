//DOM element

const btnClick = document.getElementById("btnClick");

const colorList = [
  "#7C0902",
  "#660000",
  "#FF0800",
  "#FF3800",
  "#C04000",
  "#FF4F00",
  "#FFBF00",
  "#FF8C00",
  "#FF8200",
  "#FF7518",
  "#3D0C02",
  "#AF6E4D",
  "#993300",
  "#D2691E",
  "#7B3F00",
  "#FFBF00",
  "#228B22",
  "#40E0D0",
  "#3B00DB",
  "#DF73FF",
  "#E30B5C",
  "#F0FFF0",
];

function randomColor(arr) {
  const color = Math.floor(Math.random() * arr.length);
  return color;
}

btnClick.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("click");
  let index = randomColor(colorList);
  const body = document.body;
  body.style.backgroundColor = colorList[index];
});

window.addEventListener("DOMContentLoaded", () => {
  let index = randomColor(colorList);
  const body = document.body;
  body.style.backgroundColor = colorList[index];
});
