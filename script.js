// Get the form element
const form = document.querySelector("form");

// Add event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Perform validation or further processing here
  // Replace the placeholder comment with actual code

  // Display the input values
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);

  // Reset the form
  form.reset();
});
