var data; // variable to store the retrieved data

function getData() {
    // make a GET request to the API endpoint
    $.get("https://jsonplaceholder.typicode.com/users", function(response) {
        data = response;
        displayData();
    });
}

function displayData() {
    // display the data on the screen
    var html = "";
    for (var i = 0; i < data.length; i++) {
        html += "<div class='object'>";
        html += "<input type='text' value='" + data[i].name + "' id='name" + i + "' />";
        html += "<input type='text' value='" + data[i].value + "' id='value" + i + "' />";
        html += "<button onclick='saveObject(" + i + ")'>Save Object</button>";
        html += "</div>";
    }
    $("#response").html(html);
}

function saveObject(index) {
    // create an object with the edited values
    var object = {
        name: $("#name" + index).val(),
        value: $("#value" + index).val()
    };
    // make a PUT request to the API endpoint to save the edited object
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users" + index,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(object),
        success: function(response) {
            alert("Object saved successfully");
        },
        error: function(xhr, status, error) {
            alert("Error saving object: " + error);
        }
    });
}
