// Open letter (index.html)
const button = document.getElementById("openLetter");
const letter = document.getElementById("letter");

if (button && letter) {
  button.addEventListener("click", () => {
    letter.style.display = "block";
    button.style.display = "none";
  });
}

// Moving NO button (no2.html only)
const noBtn = document.getElementById("move-random");

if (noBtn) {
  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * 70 + 10;
    const y = Math.random() * 70 + 10;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "%";
    noBtn.style.top = y + "%";
  });
}