// Get the container element

// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  // Create a new div element for each number
  const newDiv = document.createElement("div");
  newDiv.textContent = i;
  // Append the new div to the container
  document.getElementById("number-list").appendChild(newDiv);
  // Check if the number is even or odd and apply the appropriate class
  if (i % 2 == 0) {
    newDiv.classList.add("even");
  } else {
    newDiv.classList.add("odd");
  }
  // Add highlight to the clicked number
  newDiv.addEventListener("click", () => {
    newDiv.classList.add("highlight");
  });
  if (newDiv.classList.contains("highlight")) {
    newDiv.addEventListener("click", () => {
      newDiv.classList.remove("highlight");
    });
  }
}

// Add an event listener to highlight the number when clicked

// Remove highlight from all numbers
