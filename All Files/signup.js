document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to a new page or update the UI to show a successful signup
            window.location.href = "/successPage";
        } else {
            // Show the error to the user
            alert(data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
