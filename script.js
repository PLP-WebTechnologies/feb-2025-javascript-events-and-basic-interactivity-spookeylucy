// Button click to change text
document.getElementById("changeTextButton").addEventListener("click", function () {
  this.textContent = "You clicked me! 🎉";
});

// Hover effect to change button color
const hoverBtn = document.getElementById("hoverBtn");
hoverBtn.addEventListener("mouseover", function () {
  this.style.backgroundColor = "hotpink";
});
hoverBtn.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});

// Keypress display
const keypressInput = document.getElementById("keypressInput");
const keypressDisplay = document.getElementById("keypressDisplay");

keypressInput.addEventListener("keydown", function (event) {
  keypressDisplay.textContent = `Yaaah you pressed: ${event.key}`;
});

// Form validation
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("🚫 All fields are required!");
  } else if (!email.includes("@")) {
    alert("📧 Email must be valid!");
  } else if (password.length < 8) {
    alert("🔒 Password must be at least 8 characters!");
  } else {
    alert("✅ Form submitted successfully!");
    this.reset(); // Clear form
  }
});


