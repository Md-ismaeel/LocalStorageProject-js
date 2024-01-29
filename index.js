const textArea = document.getElementById("textArea");

function showData() {
  let texData = localStorage.getItem("text");
  if (texData) {
    textArea.value = texData;
  }
}
function savaData() {
  localStorage.setItem("text", textArea.value);
}

showData();
textArea.addEventListener("input", () => {
  savaData();
});
