document.getElementById("cta-button").addEventListener("click", function () {
  const input = document.getElementById("cta-input");
  const newText = input.value.trim();
  if (newText) {
    document.getElementById("cta").textContent = newText;
    input.value = "";
  }
});