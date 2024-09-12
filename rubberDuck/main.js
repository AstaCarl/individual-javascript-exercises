const myButton = document.querySelector("#my-button");
const myList = document.querySelector("#my-list");
const myInput = document.querySelector("#my-input");

// Adding event listener to the button
myButton.addEventListener("click", () => addQuestion());

// Function to add a new question to the list
const addQuestion = () => {
  if (myInput.value) {
    const localList = JSON.parse(localStorage.getItem("list")) || [];
    localList.push(myInput.value);
    localStorage.setItem("list", JSON.stringify(localList));
    myInput.value = "";
    myList.innerHTML = "";
    populateList();
  }
};

// Function to format the date
const formatDate = () => {
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

// Function to populate the list from localStorage
const populateList = () => {
  const localList = JSON.parse(localStorage.getItem("list")) || [];
  myList.innerHTML = ""; // Clear the current list
  localList.forEach((item) => {
    const listElement = document.createElement("li");
    listElement.innerText = item;
    myList.append(listElement);
    // Adding a title attribute to the list element so it hovers with the current date
    listElement.setAttribute("title", formatDate());
  });
};

// Initialize the list when the page loads
populateList();

// Adding event listener to the input to handle Enter keypress
myInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addQuestion();
  }
});

// fetching jokes from jokeAPI
async function fetchJokeJSON() {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit"
  );
  const jokes = await response.json();
  return jokes;
}

const jokes = await fetchJokeJSON();

console.log(jokes.setup);
console.log(jokes.delivery);

const jokeButton = document.getElementById("answer-button");
const jokeDiv = document.getElementById("jokes");

// Adding event listener to the button, and displaying the joke
jokeButton.addEventListener("click", () => {
  const jokeSetup = jokes.setup;
  const jokeDelivery = jokes.delivery;
  const newP = document.createElement("p");
  newP.innerHTML = jokeSetup + "<br/>" + jokeDelivery;
  jokeDiv.appendChild(newP);
});

// Get the user from localStorage
const user = JSON.parse(localStorage.getItem("user")) || {};
console.log(user);

//show the user if its there
if (user.username) {
  const userDiv = document.getElementById("username");
  const newSpan = document.createElement("span");
  newSpan.innerHTML = user.username;
  userDiv.appendChild(newSpan);
}

// Log out functionality, clears the localStorage and reloads the page
const logOutButton = document.getElementById("log-out");

logOutButton.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

// Adding event listener to the duck image

const duckImg = document.getElementById("duck-img");

duckImg.addEventListener("mouseenter", function (event) {
  tooltip.classList.add("visible");
});

duckImg.addEventListener("mousemove", function (event) {
  tooltip.style.left = `${event.clientX + 10}px`; // Position relative to viewport
  tooltip.style.top = `${event.clientY + 10}px`; // Position relative to viewport
});

duckImg.addEventListener("mouseleave", function () {
  tooltip.classList.remove("visible");
});
