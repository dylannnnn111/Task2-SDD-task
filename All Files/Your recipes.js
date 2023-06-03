document.getElementById('add-recipe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the values from the form inputs
    var recipeName = document.getElementById('recipe-name').value;
    var recipeDescription = document.getElementById('recipe-description').value;
    
    // Create a new recipe card
    var recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    
    var recipeHeading = document.createElement('h3');
    recipeHeading.textContent = recipeName;
    
    var recipePara = document.createElement('p');
    recipePara.textContent = recipeDescription;
    
    recipeCard.appendChild(recipeHeading);
    recipeCard.appendChild(recipePara);
    
    // Add the recipe card to the recent recipes section
    var recentRecipes = document.querySelector('.recent-recipes');
    recentRecipes.appendChild(recipeCard);
    
    // Reset the form inputs
    document.getElementById('recipe-name').value = '';
    document.getElementById('recipe-description').value = '';
  });
  