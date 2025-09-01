// DOM Elements
const inputTitle = document.getElementById("inputTittle");
const inputDesc = document.getElementById("inputDesc");
const inputCategory = document.getElementById("inputCategory");
const inputType = document.getElementById("inputType");
const inputAmount = document.getElementById("inputAmount");

const errorMsg = document.getElementById("errorMsg");

const resetForm = document.getElementById("resetForm");
const submitTransaction = document.getElementById("submitTransaction");

const listContent = document.querySelector(".list-content");

let transactionList = JSON.parse(localStorage.getItem("transactions")) || [];

// Reset input fields
function ResetInputForm() {
  inputTitle.value = "";
  inputDesc.value = "";
  inputCategory.value = "";
  inputType.value = "";
  inputAmount.value = "";

  errorMsg.innerText = "";
  errorMsg.style.display = "none";
}

// Validate form inputs
function ValidateInputs(title, desc, category, type, amount) {
  return (
    title === "" ||
    desc === "" ||
    category === "" ||
    type === "" ||
    isNaN(amount) ||
    amount <= 0
  );
}

// Submit form data
function TransactionSubmit() {
  const title = inputTitle.value.trim();
  const desc = inputDesc.value.trim();
  const category = inputCategory.value.trim();
  const type = inputType.value.trim();
  const amount = parseInt(inputAmount.value);

  if (ValidateInputs(title, desc, category, type, amount)) {
    errorMsg.style.display = "block";
    errorMsg.style.color = "#E23D28";
    errorMsg.innerText = "Please provide valid transaction details.";
    return;
  }

  const transDetails = {
    id: Date.now(),
    title,
    desc,
    category,
    type,
    amount,
  };

  transactionList.push(transDetails);
  localStorage.setItem("transactions", JSON.stringify(transactionList));
  ResetInputForm();
  DisplayList(); // Refresh list
}

// Display transaction list
function DisplayList() {
  listContent.innerHTML = ""; // Clear previous list

  if (transactionList.length === 0) {
    listContent.innerHTML = `<p>No records</p>`;
    return;
  }

  transactionList.forEach((trans) => {
    const { id, title, category, amount, type } = trans;

    const liTag = document.createElement("li");
    liTag.classList.add("list-item");

    const itemBody = document.createElement("div");
    itemBody.classList.add("item-body");

    const titleTag = document.createElement("p");
    titleTag.textContent = title;

    const categoryTag = document.createElement("span");
    categoryTag.textContent = category;
    if (category === "ration") {
      categoryTag.style.backgroundColor = "#00B9E8";
    } else if (category === "stationery") {
      categoryTag.style.backgroundColor = "#FFBF00";
    } else if (category === "utilities") {
      categoryTag.style.backgroundColor = "#32CD32";
    } else if (category === "transportation") {
      categoryTag.style.backgroundColor = "#E23D28";
    } else {
      categoryTag.style.backgroundColor = "#ccc";
    }

    const priceTag = document.createElement("p");
    priceTag.classList.add("price");
    priceTag.style.color = type === "income" ? "#32CD32" : "#E23D28";
    priceTag.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i> ${amount}`;

    itemBody.appendChild(titleTag);
    itemBody.appendChild(categoryTag);
    itemBody.appendChild(priceTag);

    const buttonList = document.createElement("div");
    buttonList.classList.add("button-list");

    const viewBtn = document.createElement("button");
    viewBtn.id = "viewDetail";
    viewBtn.setAttribute("data-id", id);
    viewBtn.innerHTML = `<i class="fa-solid fa-eye"></i>`;

    const deleteBtn = document.createElement("button");
    deleteBtn.id = "deleteTrans";
    deleteBtn.setAttribute("data-id", id);
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    buttonList.appendChild(viewBtn);
    buttonList.appendChild(deleteBtn);

    liTag.appendChild(itemBody);
    liTag.appendChild(buttonList);

    listContent.appendChild(liTag);
  });
}

// Event Listeners
resetForm.addEventListener("click", (e) => {
  e.preventDefault();
  ResetInputForm();
});

submitTransaction.addEventListener("click", (e) => {
  e.preventDefault();
  TransactionSubmit();
});

window.addEventListener("DOMContentLoaded", () => {
  DisplayList();
});
