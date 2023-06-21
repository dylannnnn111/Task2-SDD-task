document.addEventListener("DOMContentLoaded", function() {
    var apiKey = "644f2b75347d438b8eda2eed10c93404";
    var url = "https://api.spoonacular.com/recipes/complexSearch";  // replace with the actual API URL

    fetch(url, {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        var recipeContainer = document.getElementById('recipeContainer');
        data.recipes.forEach(recipe => {
            var recipeElement = document.createElement('div');
            recipeElement.innerHTML = `
                <h2>${recipe.name}</h2>
                <p>${recipe.description}</p>
            `;
            recipeContainer.appendChild(recipeElement);
        });
    })
    .catch(error => console.error('Error:', error));
});
