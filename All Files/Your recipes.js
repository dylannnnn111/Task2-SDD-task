// Get the form and recent-recipes container elements
const addRecipeForm = document.getElementById('add-recipe-form');
const recentRecipesContainer = document.querySelector('.recent-recipes');

// Function to delete a recipe
function deleteRecipe(event) {
  const recipeCard = event.target.parentNode;
  recentRecipesContainer.removeChild(recipeCard);
  saveRecipes();
}

// Function to view a recipe
function viewRecipe(event) {
  const recipeCard = event.target.parentNode;
  alert(`Recipe: ${recipeCard.querySelector('h3').textContent}\n\nDescription: ${recipeCard.querySelector('p').textContent}`);
}

// Function to save recipes in local storage
function saveRecipes() {
  const recipes = Array.from(recentRecipesContainer.children).map(recipeCard => {
    return {
      name: recipeCard.querySelector('h3').textContent,
      description: recipeCard.querySelector('p').textContent
    };
  });
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Add event listener for form submission
addRecipeForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the recipe name and description values from the form
  const recipeNameInput = document.getElementById('recipe-name');
  const recipeDescriptionInput = document.getElementById('recipe-description');
  const recipeName = recipeNameInput.value;
  const recipeDescription = recipeDescriptionInput.value;

  // Create a new recipe card
  const recipeCard = document.createElement('div');
  recipeCard.className = 'recipe-card';

  const recipeNameHeading = document.createElement('h3');
  recipeNameHeading.textContent = recipeName;
  recipeCard.appendChild(recipeNameHeading);

  const recipeDescriptionParagraph = document.createElement('p');
  recipeDescriptionParagraph.textContent = recipeDescription;
  recipeCard.appendChild(recipeDescriptionParagraph);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-button';
  recipeCard.appendChild(deleteButton);

  const viewButton = document.createElement('button');
  viewButton.textContent = 'View Recipe';
  viewButton.className = 'view-button';
  recipeCard.appendChild(viewButton);

  // Add event listeners for delete and view buttons
  deleteButton.addEventListener('click', deleteRecipe);
  viewButton.addEventListener('click', viewRecipe);

  // Add the recipe card to the recent-recipes container
  recentRecipesContainer.appendChild(recipeCard);

  // Clear the input fields after adding the recipe
  recipeNameInput.value = '';
  recipeDescriptionInput.value = '';

  // Save the recipes in local storage
  saveRecipes();
});

// Load saved recipes on page load
window.addEventListener('load', function() {
  const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  recipes.forEach(function(recipe) {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';

    const recipeNameHeading = document.createElement('h3');
    recipeNameHeading.textContent = recipe.name;
    recipeCard.appendChild(recipeNameHeading);

    const recipeDescriptionParagraph = document.createElement('p');
    recipeDescriptionParagraph.textContent = recipe.description;
    recipeCard.appendChild(recipeDescriptionParagraph);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    recipeCard.appendChild(deleteButton);

    const viewButton = document.createElement('button');
    viewButton.textContent = 'View Recipe';
    viewButton.className = 'view-button';
    recipeCard.appendChild(viewButton);

    deleteButton.addEventListener('click', deleteRecipe);
    viewButton.addEventListener('click', viewRecipe);

    recentRecipesContainer.appendChild(recipeCard);
  });
});

function storeRecipe() {
  event.preventDefault();
  var recipeName = document.getElementById('recipe-name').value;
  var recipeDescription = document.getElementById('recipe-description').value;
  
  var recipe = {
      name: recipeName,
      description: recipeDescription
  };
  
  if(localStorage.getItem('recipes') === null) {
      localStorage.setItem('recipes', JSON.stringify([recipe]));
  } else {
      var existingRecipes = JSON.parse(localStorage.getItem('recipes'));
      existingRecipes.push(recipe);
      localStorage.setItem('recipes', JSON.stringify(existingRecipes));
  }
  
  document.getElementById('recipe-name').value = "";
  document.getElementById('recipe-description').value = "";
}
// Function to view a recipe
function viewRecipe(event) {
  const recipeCard = event.target.parentNode;
  document.getElementById('modal-recipe-name').textContent = recipeCard.querySelector('h3').textContent;
  document.getElementById('modal-recipe-description').textContent = recipeCard.querySelector('p').textContent;

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Show the modal
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
