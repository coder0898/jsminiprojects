// DOM Element

const inputFile = document.getElementById("inputFile");
const numberFile = document.getElementById("numberFile");
const filesList = document.getElementById("filesList");

let filesCollection = [];

inputFile.addEventListener("change", (e) => {
  e.preventDefault();
  for (let file of inputFile.files) {
    filesCollection.push(file);
  }

  numberFile.textContent = `${filesCollection.length} Files Selected`;

  filesCollection.forEach((file) => {
    let listItem = document.createElement("li");
    let fileName = file.name;
    let fileSize = (file.size / 1024).toFixed(1);
    listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;
    if (fileSize >= 1024) {
      fileSize = (fileSize / 1024).toFixed(1);
      listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
    }
    filesList.appendChild(listItem);
  });
});
