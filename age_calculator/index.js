//DOM element
const inputDate = document.getElementById("inputDate");

const outputYear = document.getElementById("outputYear");
const outputMonth = document.getElementById("outputMonth");
const outputDay = document.getElementById("outputDay");

const submitDate = document.getElementById("submitDate");

let yearsAge = 0,
  monthAge = 0,
  dayAge = 0;

function getYear(input) {
  return input.getFullYear();
}

function getMonth(input) {
  return input.getMonth() + 1;
}

function getDay(input) {
  return input.getDate();
}

function CalculateAge() {
  let inputVal = inputDate.value;
  if (!inputVal) {
    console.log("Please enter a valid date.");
    return;
  }

  const birthDate = new Date(inputVal);
  const birthYear = getYear(birthDate);
  const birthMonth = getMonth(birthDate);
  const birthDay = getDay(birthDate);

  const currDate = new Date();
  let currYear = getYear(currDate);
  let currMonth = getMonth(currDate);
  let currDay = getDay(currDate);

  // Month array with February set to 28 by default
  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap year
  if ((currYear % 4 === 0 && currYear % 100 !== 0) || currYear % 400 === 0) {
    monthDays[1] = 29;
  }

  // Adjust days if birthDay > currDay
  if (birthDay > currDay) {
    currDay += monthDays[(currMonth - 2 + 12) % 12]; // Get days in previous month
    currMonth -= 1;
  }

  // Adjust months if birthMonth > currMonth
  if (birthMonth > currMonth) {
    currYear -= 1;
    currMonth += 12;
  }

  let calculateYear = currYear - birthYear;
  let calculateMonth = currMonth - birthMonth;
  let calculateDay = currDay - birthDay;

  // Output to console and HTML
  console.log(
    `Age: ${calculateYear} Years, ${calculateMonth} Months, ${calculateDay} Days`
  );

  outputYear.textContent = calculateYear;
  outputMonth.textContent = calculateMonth;
  outputDay.textContent = calculateDay;
}

submitDate.addEventListener("click", (e) => {
  e.preventDefault();
  CalculateAge();
});
