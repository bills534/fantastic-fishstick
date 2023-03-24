const apiURL = "https://jsonplaceholder.typicode.com/users";
const responseList = document.querySelector("#response-list");
const select = document.querySelector("select");
const submitBtn = document.querySelector("#submit-btn");

// Populate the drop-down list with options
for (let i = 1; i <= 10; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  select.appendChild(option);
}

// Handle the click of the submit button
submitBtn.onclick = function() {
  // Clear the previous responses
  // responseList.innerHTML = "";
  // Get the selected option from the drop-down list
  const userInput = select.value;
  console.log(userInput);
  // Set the headers
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("X-Custom-Header", "MyValue");
  // Fetch the data from the API
  fetch(`${apiURL}/${userInput}`, {
    method: "GET",
    headers: headers
  })
    .then(response => {
      // Check for a successful response
      console.log(response);
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
