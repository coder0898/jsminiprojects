// DOM Elements
const inputFile = document.getElementById("inputFile");
const numberFile = document.getElementById("numberFile");
const filesList = document.getElementById("filesList");

let filesCollection = [];
let count = 0;

inputFile.addEventListener("change", (e) => {
  e.preventDefault();

  // Add new files to the collection
  for (let file of inputFile.files) {
    count++;
    filesCollection.push({
      id: count, // unique ID for each file
      file,
    });
  }

  // Update file count
  numberFile.textContent = `${filesCollection.length} Files Selected`;

  // Clear current list
  filesList.innerHTML = "";

  // Re-render file list
  filesCollection.forEach((file) => {
    let listItem = document.createElement("li");
    let fileName = file.file.name;
    let fileSize = (file.file.size / 1024).toFixed(1);

    if (fileSize >= 1024) {
      fileSize = (fileSize / 1024).toFixed(1) + "MB";
    } else {
      fileSize = fileSize + "KB";
    }

    listItem.innerHTML = `
      <div class='file-part'>
        <p>${fileName}</p>
        <p>${fileSize}</p>
      </div> 
      <button class='delete-btn' data-id='${file.id}'>
        <i class="fa-solid fa-trash"></i>
      </button>
    `;
    filesList.appendChild(listItem);
  });
});

// ✅ Event delegation for delete buttons
filesList.addEventListener("click", (e) => {
  if (e.target.closest(".delete-btn")) {
    const button = e.target.closest(".delete-btn");
    const id = parseInt(button.dataset.id);

    // Remove the file from the array
    filesCollection = filesCollection.filter((file) => file.id !== id);

    // Update file count
    numberFile.textContent = `${filesCollection.length} Files Selected`;

    // Re-render file list
    filesList.innerHTML = "";
    filesCollection.forEach((file) => {
      let listItem = document.createElement("li");
      let fileName = file.file.name;
      let fileSize = (file.file.size / 1024).toFixed(1);

      if (fileSize >= 1024) {
        fileSize = (fileSize / 1024).toFixed(1) + "MB";
      } else {
        fileSize = fileSize + "KB";
      }

      listItem.innerHTML = `
        <div class='file-part'>
          <p>${fileName}</p>
          <p>${fileSize}</p>
        </div> 
        <button class='delete-btn' data-id='${file.id}'>
          <i class="fa-solid fa-trash"></i>
        </button>
      `;
      filesList.appendChild(listItem);
    });
  }
});
