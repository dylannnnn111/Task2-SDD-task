// Get the form, recent-recipes container, and preview image elements
const addRecipeForm = document.getElementById('add-recipe-form');
const recentRecipesContainer = document.querySelector('.recent-recipes');
const previewImage = document.getElementById('preview-image');

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = "none";
}

// Function to delete a recipe from the modal
function deleteRecipeFromModal(event) {
  closeModal();
  deleteRecipe(event);
}

// Function to edit a recipe from the modal
function editRecipeFromModal(event) {
  closeModal();
  editRecipe(event);
}

// Function to delete a recipe
function deleteRecipe(event) {
  const recipeCard = event.target.parentNode.parentNode;
  recentRecipesContainer.removeChild(recipeCard);
  saveRecipes();
}

// Function to edit a recipe
function editRecipe(event) {
  const recipeCard = event.target.parentNode.parentNode;
  document.getElementById('recipe-name').value = recipeCard.querySelector('h3').textContent;
  document.getElementById('recipe-description').value = recipeCard.querySelector('p').textContent;
  document.getElementById('recipe-image').value = "";

  // Remove the existing card after the data has been transferred
  recentRecipesContainer.removeChild(recipeCard);
  saveRecipes();

  // Scroll to the top of the page
  window.scrollTo(0, 0);
}

// Function to view a recipe and show the modal
function viewRecipe(event) {
  const recipeCard = event.target.parentNode.parentNode;
  document.getElementById('modal-recipe-name').textContent = recipeCard.querySelector('h3').textContent;
  document.getElementById('modal-recipe-description').textContent = recipeCard.querySelector('p').textContent;

  const modal = document.getElementById('myModal');
  modal.style.display = "block";

  // Set up the delete button on the modal
  const deleteButton = document.querySelector('.delete-button');
  deleteButton.addEventListener('click', function(event) {
    deleteRecipeFromModal(event);
  });

  // Set up the edit button on the modal
  const editButton = document.querySelector('.edit-button');
  editButton.addEventListener('click', function(event) {
    editRecipeFromModal(event);
  });
}

// Function to save recipes in local storage
function saveRecipes() {
  const recipes = Array.from(recentRecipesContainer.children).map(recipeCard => {
    return {
      name: recipeCard.querySelector('h3').textContent,
      description: recipeCard.querySelector('p').textContent,
      imageSrc: recipeCard.querySelector('img').src
    };
  });
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Function to save user inputs in local storage
function saveUserInputs() {
  const recipeNameInput = document.getElementById('recipe-name').value;
  const recipeDescriptionInput = document.getElementById('recipe-description').value;

  localStorage.setItem('recipeNameInput', recipeNameInput);
  localStorage.setItem('recipeDescriptionInput', recipeDescriptionInput);
}

// Add event listener for form submission
addRecipeForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the recipe name, description, and image values from the form
  const recipeNameInput = document.getElementById('recipe-name');
  const recipeDescriptionInput = document.getElementById('recipe-description');
  const recipeImageInput = document.getElementById('recipe-image');
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

  const recipeImageElement = document.createElement('img');
  recipeImageElement.src = URL.createObjectURL(recipeImageInput.files[0]);
  recipeImageElement.alt = 'Recipe Image';
  recipeImageElement.style.maxWidth = '200px';
  recipeImageElement.style.marginTop = '10px';
  recipeCard.appendChild(recipeImageElement);

  // Create the buttons container
  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.justifyContent = 'space-between';
  buttonContainer.style.marginTop = '10px';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-button';
  buttonContainer.appendChild(deleteButton);

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit Recipe';
  editButton.className = 'edit-button';
  buttonContainer.appendChild(editButton);

  const viewButton = document.createElement('button');
  viewButton.textContent = 'View Recipe';
  viewButton.className = 'view-button';
  buttonContainer.appendChild(viewButton);

  recipeCard.appendChild(buttonContainer);

  // Add the recipe card to the recent-recipes container
  recentRecipesContainer.appendChild(recipeCard);

  // Clear the input fields after adding the recipe
  recipeNameInput.value = '';
  recipeDescriptionInput.value = '';
  recipeImageInput.value = '';

  // Save the recipes in local storage after adding
  saveRecipes();

  // Save the user inputs in local storage after adding
  saveUserInputs();
});

// Add event listener for click events on recentRecipesContainer (using event delegation)
recentRecipesContainer.addEventListener('click', function (event) {
  const target = event.target;

  if (target.classList.contains('delete-button')) {
    // Delete button is clicked
    const recipeCard = target.parentNode.parentNode;
    recentRecipesContainer.removeChild(recipeCard);
    saveRecipes();
  } else if (target.classList.contains('edit-button')) {
    // Edit button is clicked
    const recipeCard = target.parentNode.parentNode;
    document.getElementById('recipe-name').value = recipeCard.querySelector('h3').textContent;
    document.getElementById('recipe-description').value = recipeCard.querySelector('p').textContent;
    document.getElementById('recipe-image').value = "";
    recentRecipesContainer.removeChild(recipeCard);
    saveRecipes();
    window.scrollTo(0, 0);
  } else if (target.classList.contains('view-button')) {
    // View button is clicked
    viewRecipe(event);
  }
});

// Load saved recipes and user inputs on page load
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

    const recipeImageElement = document.createElement('img');
    recipeImageElement.src = recipe.imageSrc;
    recipeImageElement.alt = 'Recipe Image';
    recipeImageElement.style.maxWidth = '200px';
    recipeImageElement.style.marginTop = '10px';
    recipeCard.appendChild(recipeImageElement);

    // Create the buttons container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.marginTop = '10px';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    buttonContainer.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Recipe';
    editButton.className = 'edit-button';
    buttonContainer.appendChild(editButton);

    const viewButton = document.createElement('button');
    viewButton.textContent = 'View Recipe';
    viewButton.className = 'view-button';
    buttonContainer.appendChild(viewButton);

    recipeCard.appendChild(buttonContainer);

    // Add event listeners for delete, view, and edit buttons
    deleteButton.addEventListener('click', deleteRecipe);
    viewButton.addEventListener('click', viewRecipe);
    editButton.addEventListener('click', editRecipe);

    // Add the recipe card to the recent-recipes container
    recentRecipesContainer.appendChild(recipeCard);
  });

  // Load saved user inputs
  const recipeNameInputValue = localStorage.getItem('recipeNameInput') || '';
  const recipeDescriptionInputValue = localStorage.getItem('recipeDescriptionInput') || '';

  document.getElementById('recipe-name').value = recipeNameInputValue;
  document.getElementById('recipe-description').value = recipeDescriptionInputValue;

  // Clear the input field for recipe image since we don't store it directly in local storage.
  document.getElementById('recipe-image').value = '';
});

// Save the recipes when the page is about to be unloaded (refreshed or closed)
window.addEventListener('beforeunload', function() {
  saveRecipes();
});
