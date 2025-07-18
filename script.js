document.getElementById("joinForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("message").innerText = "✅ Submitted successfully! Welcome to GreenSteps! 🌿";
});