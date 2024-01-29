const textArea = document.getElementById("textArea");

function savaData() {
  localStorage.setItem("text", textArea.value);
}

function showData() {
  let texData = localStorage.getItem("text");
  if (texData) {
    textArea.value = texData;
  }
}

showData();

textArea.addEventListener("input", () => {
  savaData();
});
