window.onload = function() {
    var storedRecipes = JSON.parse(localStorage.getItem('recipes'));
  
    var recipeList = document.getElementById('recipe-list');
    
    for(var i = 0; i < storedRecipes.length; i++) {
      var recipe = storedRecipes[i];
      
      var recipeItem = document.createElement('div');
      
      var recipeName = document.createElement('h2');
      recipeName.textContent = recipe.name;
      
      var recipeDescription = document.createElement('p');
      recipeDescription.textContent = recipe.description;
      
      recipeItem.appendChild(recipeName);
      recipeItem.appendChild(recipeDescription);
      
      recipeList.appendChild(recipeItem);
    }
  }
  