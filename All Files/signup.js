// Add an event listener to the form with the id "signup-form"
document.getElementById('signup-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (refreshing the page)
    event.preventDefault();

    // Get the values entered by the user in the form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Send a POST request to the '/signup' endpoint with the user data
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // Convert the user data to a JSON string and include it in the request body
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
    // After the POST request, process the response as JSON
    .then(response => response.json())
    .then(data => {
        // Check if the server returned a success flag
        if (data.success) {
            // If the signup was successful, redirect the user to a new page
            window.location.href = "/successPage";
        } else {
            // If there was an error, display the error message to the user
            alert(data.message);
        }
    })
    .catch((error) => {
        // If an error occurred during the fetch or processing of the response, log the error to the console
        console.error('Error:', error);
    });
});
