const apiURL = "https://jsonplaceholder.typicode.com/users";
const responseList = document.querySelector("#response-list");
const input = document.querySelector("input");
const submitBtn = document.querySelector("#submit-btn");

// Handle the click of the submit button
submitBtn.onclick = function() {
  // Clear the previous responses
  responseList.innerHTML = "";
  // Get the value from the input box
  const userInput = input.value;
  // Fetch the data from the API
  fetch(`${apiURL}/${userInput}`)
    .then(response => {
      // Check for a successful response
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then(data => {
      // Add the data to the page
      const li = document.createElement("li");
      const name = document.createElement("h3");
      name.innerHTML = `Name: ${data.name}`;
      const username = document.createElement("p");
      username.innerHTML = `Username: ${data.username}`;
      const email = document.createElement("p");
      email.innerHTML = `Email: ${data.email}`;
      li.appendChild(name);
      li.appendChild(username);
      li.appendChild(email);
      responseList.appendChild(li);
    })
    .catch(error => {
      // Log the error in the console
      console.error(error);
    });
};
