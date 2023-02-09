document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("user-input");
    const btn = document.getElementById("submit-btn");
    const list = document.getElementById("response-list");
  
    // Generate options for the select element
    for (let i = 1; i <= 10; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      select.appendChild(option);
    }
  
    btn.addEventListener("click", function() {
      const selectedValue = select.value;
  
      fetch(`https://jsonplaceholder.typicode.com/users/${selectedValue}`)
        .then(response => response.json())
        .then(data => {
          // Clear previous response
          list.innerHTML = "";
  
          const li = document.createElement("li");
          li.textContent = `ID: ${data.id} | Name: ${data.name}`;
          list.appendChild(li);
        })
        .catch(error => {
          console.error(error);
        });
    });
  });
  