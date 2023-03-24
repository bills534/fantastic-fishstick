var data; // variable to store the retrieved data

function getData() {
    // set the headers you want to send to the API
    var headers = {
        "Authorization": "Bearer <your_access_token>",
        "X-Custom-Header": "Custom Value"
    };
    // make a GET request to the API endpoint with the headers
    $.ajax({
        url: "https://example.com/api/data",
        type: "GET",
        headers: headers,
        success: function(response) {
            data = response;
            displayData();
        },
        error: function(xhr, status, error) {
            alert("Error retrieving data: " + error);
        }
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
