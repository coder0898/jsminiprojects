//DOM Element

const inputTemp = document.getElementById("inputTemp");
const inputUnit = document.getElementById("inputUnit");
const outputUnit = document.getElementById("outputUnit");

const resetForm = document.getElementById("resetForm");
const submitInput = document.getElementById("submitInput");

const resultMsg = document.getElementById("resultMsg");

function CalculateTemperature() {
  let tempVal = parseInt(inputTemp.value);
  let input = inputUnit.value;
  let output = outputUnit.value;

  let result = null;

  if (
    typeof tempVal !== "number" &&
    input.trim() === "" &&
    output.trim() === ""
  ) {
    alert("Please enter valid data");
    return;
  }

  switch (input) {
    case "celsius":
      if (output === "fahrenheit") {
        result = tempVal * (9 / 5) + 32;
        resultMsg.style.display = "block";
        resultMsg.style.color = "#3E8EDE";
        resultMsg.innerText = `The output is ${result} °F.`;
      } else if (output === "kelvin") {
        result = tempVal + 273.15;
        resultMsg.style.display = "block";
        resultMsg.style.color = "#E23D28";
        resultMsg.innerText = `The output is ${result} K.`;
      } else {
        resultMsg.style.display = "block";
        resultMsg.style.color = "#3B3C36";
        resultMsg.innerText = `You have chosse same conversion units,thus answer is ${tempVal} °C.`;
      }
      break;

    case "fahrenheit":
      if (output === "celsius") {
        result = (tempVal - 32) * (5 / 9);
        resultMsg.style.display = "block";
        resultMsg.style.color = "#3E8EDE";
        resultMsg.innerText = `The output is ${result} °C.`;
      } else if (output === "kelvin") {
        result = (tempVal + 459.67) * (5 / 9);
        resultMsg.style.display = "block";
        resultMsg.style.color = "#E23D28";
        resultMsg.innerText = `The output is ${result} K.`;
      } else {
        resultMsg.style.display = "block";
        resultMsg.style.color = "#3B3C36";
        resultMsg.innerText = `You have chosse same conversion units,thus answer is ${tempVal} °F.`;
      }
      break;

    case "kelvin":
      if (output === "celsius") {
        result = tempVal - 273.15;
        resultMsg.style.display = "block";
        resultMsg.style.color = "#3E8EDE";
        resultMsg.innerText = `The output is ${result} °C.`;
      } else if (output === "fahrenheit") {
        result = tempVal * (9 / 5) - 459.67;
        resultMsg.style.display = "block";
        resultMsg.style.color = "#E23D28";
        resultMsg.innerText = `The output is ${result} °F.`;
      } else {
        resultMsg.style.display = "block";
        resultMsg.style.color = "#3B3C36";
        resultMsg.innerText = `You have chosse same conversion units,thus answer is ${tempVal} K.`;
      }
      break;

    default:
      break;
  }
}

submitInput.addEventListener("click", (e) => {
  e.preventDefault();
  CalculateTemperature();
});

resetForm.addEventListener("reset", (e) => {
  inputTemp.value = "";
  inputUnit.value = "";
  outputUnit.value = "";
  resultMsg.style.display = "none";
});
