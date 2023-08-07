// Get the form, recent-recipes container, and preview image elements
const addRecipeForm = document.getElementById('add-recipe-form');
const recentRecipesContainer = document.querySelector('.recent-recipes');
const previewImage = document.getElementById('preview-image');

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

// Function to edit a recipe from the modal
function editRecipeFromModal() {
  const recipeName = document.getElementById('modal-recipe-name').textContent;
  const recipeDescription = document.getElementById('modal-recipe-description').textContent;

  document.getElementById('recipe-name').value = recipeName;
  document.getElementById('recipe-description').value = recipeDescription;
  document.getElementById('recipe-image').value = "";

  // Find the corresponding recipe card and remove it
  const recipeCards = Array.from(recentRecipesContainer.children);
  for (let i = 0; i < recipeCards.length; i++) {
    if (recipeCards[i].querySelector('h3').textContent === recipeName &&
      recipeCards[i].querySelector('p').textContent === recipeDescription) {
      recentRecipesContainer.removeChild(recipeCards[i]);
      break;
    }
  }

  // Close the modal
  closeModal();

  // Scroll to the top of the page
  window.scrollTo(0, 0);

  // Save the recipes in local storage after editing
  saveRecipes();
}

// Function to view a recipe
function viewRecipe(event) {
  const recipeCard = event.target.parentNode.parentNode;
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

  // Add event listeners for delete, view, and edit buttons
  deleteButton.addEventListener('click', deleteRecipe);
  viewButton.addEventListener('click', viewRecipe);
  editButton.addEventListener('click', editRecipe);

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

// Add event listener for modal edit button
document.getElementById('modal-edit-button').addEventListener('click', editRecipeFromModal);

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

// Add JavaScript for the modal
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Function to delete a recipe from the modal
function deleteRecipeFromModal() {
  closeModal();
  deleteRecipe();
}

// Add event listeners for modal close button and delete button
span.onclick = closeModal;
document.getElementById('modal-delete-button').addEventListener('click', deleteRecipeFromModal);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}
