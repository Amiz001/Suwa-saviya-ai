// Automatically switch from Screen 1 to Screen 2 after 3 seconds
setTimeout(() => {
    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden");
}, 3000);

// JavaScript to handle additional functionality if needed
document.addEventListener("DOMContentLoaded", () => {
  const emergencyButton = document.getElementById("emergency-button");

  emergencyButton.addEventListener("click", () => {
    alert("1990 ගිලන් රථ සේවාවට ඇමතුමක් ලබා දෙන්න!");
  });
});

