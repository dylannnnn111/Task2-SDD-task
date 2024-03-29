const recipes = [
  {
    name: "Classic Spaghetti Bolognese",
    ingredients: "400g spaghetti, 500g ground beef, 1 onion, finely chopped, 2 garlic cloves, minced, 2 cans (400g each) crushed tomatoes, 2 tablespoons tomato paste, 1 teaspoon dried oregano, 1 teaspoon dried basil, 1/2 teaspoon red pepper flakes (optional), Salt and pepper to taste, Grated Parmesan cheese for serving",
    instructions: "Cook the spaghetti in a large pot of boiling salted water according to the package instructions. Drain and set aside. In a separate large pan, brown the ground beef over medium heat until fully cooked. Drain any excess fat. Add the chopped onion and minced garlic to the pan with the beef. Cook until the onion is soft and translucent. Stir in the crushed tomatoes, tomato paste, oregano, basil, red pepper flakes (if using), salt, and pepper. Simmer for 15-20 minutes, stirring occasionally. Serve the Bolognese sauce over the cooked spaghetti and top with grated Parmesan cheese.",
    image: "https://www.example.com/image1.jpg",
  },
  {
    name: "Lemon Herb Roasted Chicken",
    ingredients: "1 whole chicken (about 1.5 kg), 2 lemons, sliced, 4-5 sprigs of fresh thyme, 4-5 sprigs of fresh rosemary, 4 cloves of garlic, minced, 2 tablespoons olive oil, Salt and pepper to taste",
    instructions: "Preheat the oven to 190°C (375°F). Rinse the chicken and pat it dry with paper towels. In a small bowl, mix together the minced garlic, olive oil, salt, and pepper. Rub the garlic mixture all over the chicken, including under the skin and inside the cavity. Place the lemon slices, thyme, and rosemary inside the chicken cavity. Tie the legs together with kitchen twine and tuck the wings under the body. Place the chicken in a roasting pan and roast in the preheated oven for about 1 hour and 30 minutes or until the internal temperature reaches 75°C (165°F). Let the chicken rest for 10 minutes before carving. Serve with your favorite side dishes.",
    image: "https://www.example.com/image2.jpg",
  },
  {
    name: "Creamy Garlic Butter Shrimp Pasta",
    ingredients: "300g linguine or fettuccine, 500g large shrimp, peeled and deveined, 4 tablespoons unsalted butter, 4 cloves garlic, minced, 1 cup heavy cream, 1/2 cup chicken broth, 1/2 cup grated Parmesan cheese, 1 tablespoon fresh parsley, chopped, Salt and pepper to taste",
    instructions: "Cook the pasta in a large pot of boiling salted water according to the package instructions. Drain and set aside. In a large skillet, melt the butter over medium heat. Add the minced garlic and cook for about 1 minute until fragrant. Add the shrimp to the skillet and cook for 2-3 minutes per side until pink and opaque. Remove the shrimp from the skillet and set aside. In the same skillet, pour in the heavy cream and chicken broth. Bring to a simmer, stirring occasionally. Stir in the grated Parmesan cheese and let the sauce thicken for a couple of minutes. Return the cooked shrimp to the skillet and toss with the creamy sauce. Add the cooked pasta to the skillet, toss everything together until well combined. Season with salt, pepper, and chopped parsley. Serve hot.",
    image: "https://www.example.com/image3.jpg",
  },
  {
    name: "Vegetarian Quinoa Stuffed Bell Peppers",
    ingredients: "4 large bell peppers (any color), 1 cup quinoa, rinsed, 2 cups vegetable broth, 1 tablespoon olive oil, 1 small onion, finely chopped, 2 cloves garlic, minced, 1 can (400g) black beans, drained and rinsed, 1 can (400g) diced tomatoes, 1 cup corn kernels (fresh, frozen, or canned), 1 teaspoon ground cumin, 1 teaspoon chili powder, Salt and pepper to taste, 1 cup shredded cheddar cheese (optional)",
    instructions: "Preheat the oven to 190°C (375°F). Cut the tops off the bell peppers and remove the seeds and membranes. Set aside. In a medium saucepan, bring the vegetable broth to a boil. Add the quinoa, reduce the heat to low, cover, and simmer for 15-20 minutes or until the quinoa is cooked and fluffy. In a separate pan, heat the olive oil over medium heat. Add the chopped onion and minced garlic, sauté until soft and translucent. Stir in the black beans, diced tomatoes, corn, ground cumin, chili powder, salt, and pepper. Cook for another 5 minutes, allowing the flavors to blend. Mix the cooked quinoa into the vegetable mixture, combining well. Stuff the bell peppers with the quinoa and vegetable mixture, pressing it down gently. Place the stuffed bell peppers in a baking dish and cover with aluminum foil. Bake in the preheated oven for about 25 minutes. If using cheese, remove the foil, sprinkle shredded cheddar cheese on top of the peppers, and bake for an additional 5 minutes or until the cheese melts and turns golden brown. Serve the stuffed bell peppers hot.",
    image: "https://www.example.com/image4.jpg",
  },
  {
    name: "Beef and Vegetable Stir-Fry",
    ingredients: "500g beef sirloin, thinly sliced, 2 tablespoons soy sauce, 2 tablespoons oyster sauce, 1 tablespoon hoisin sauce, 2 tablespoons vegetable oil, divided, 1 onion, sliced, 2 bell peppers (any color), sliced, 2 cups broccoli florets, 2 carrots, thinly sliced, 3 cloves garlic, minced, 1-inch piece of fresh ginger, grated, 2 green onions, chopped (for garnish)",
    instructions: "In a bowl, combine the sliced beef with soy sauce, oyster sauce, and hoisin sauce. Let it marinate for at least 15 minutes. In a wok or large skillet, heat 1 tablespoon of vegetable oil over high heat. Add the marinated beef and stir-fry until it's cooked to your desired level of doneness. Remove the beef from the wok and set aside. In the same wok, add the remaining tablespoon of oil. Stir-fry the sliced onion, bell peppers, broccoli, and carrots for a few minutes until they start to soften but still have a crisp texture. Add the minced garlic and grated ginger to the vegetables, continuing to stir-fry for another minute. Return the cooked beef to the wok and toss everything together, allowing the flavors to blend for a minute or two. Garnish with chopped green onions and serve the stir-fry over steamed rice or noodles.",
    image: "https://www.example.com/image5.jpg",
  },
  {
    name: "Chicken Avocado Salad",
    ingredients: "2 cups cooked chicken breast, shredded or cubed, 2 ripe avocados, diced, 1 cup cherry tomatoes, halved, 1/4 cup red onion, finely chopped, 1/4 cup fresh cilantro, chopped, Juice of 1 lime, 2 tablespoons olive oil, Salt and pepper to taste",
    instructions: "In a large bowl, combine the shredded or cubed cooked chicken, diced avocados, halved cherry tomatoes, chopped red onion, and chopped cilantro. In a separate small bowl, whisk together the lime juice, olive oil, salt, and pepper to make the dressing. Pour the dressing over the chicken and avocado mixture, tossing everything together until well coated. Adjust seasoning to taste and refrigerate for at least 15 minutes to let the flavors meld before serving.",
    image: "https://www.example.com/image6.jpg",
  },
  {
    name: "Spinach and Feta Stuffed Chicken Breast",
    ingredients: "4 boneless, skinless chicken breasts, 2 cups fresh baby spinach, 1/2 cup crumbled feta cheese, 2 cloves garlic, minced, 1 tablespoon olive oil, Salt and pepper to taste, Toothpicks or kitchen twine (to secure the stuffed chicken)",
    instructions: "Preheat the oven to 190°C (375°F). Butterfly each chicken breast by slicing horizontally through the thickest part, but not all the way through, to create a pocket for the stuffing. In a skillet, heat the olive oil over medium heat. Add the minced garlic and sauté for a minute until fragrant. Add the baby spinach to the skillet and cook until wilted. Remove from heat. Stuff each chicken breast with a handful of sautéed spinach and a generous amount of crumbled feta cheese. Secure the openings of the stuffed chicken breasts with toothpicks or tie them with kitchen twine. Season the stuffed chicken breasts with salt and pepper on both sides. Heat a large oven-safe skillet over medium-high heat. Add a little olive oil to the skillet and sear the stuffed chicken breasts on each side until browned. Transfer the skillet to the preheated oven and bake for about 20-25 minutes or until the chicken is cooked through and no longer pink in the center. Let the chicken rest for a few minutes before serving.",
    image: "https://www.example.com/image7.jpg",
  },
  {
    name: "Baked Salmon with Lemon and Dill",
    ingredients: "4 salmon fillets (about 150g each), 2 tablespoons olive oil, 2 tablespoons fresh dill, chopped, Zest of 1 lemon, Juice of 1/2 lemon, Salt and pepper to taste, Lemon slices (for garnish)",
    instructions: "Preheat the oven to 200°C (400°F). Place the salmon fillets on a baking sheet lined with parchment paper or foil. In a small bowl, mix together the olive oil, chopped dill, lemon zest, and lemon juice. Drizzle the dill and lemon mixture over the salmon fillets, spreading it evenly. Season the salmon with salt and pepper. Place lemon slices on top of each salmon fillet for extra flavor. Bake the salmon in the preheated oven for about 12-15 minutes or until it's cooked to your desired level of doneness. Serve the baked salmon with your favorite side dishes or a fresh salad.",
    image: "https://www.example.com/image8.jpg",
  },
  {
    name: "Creamy Tomato Basil Soup",
    ingredients: "2 tablespoons butter, 1 onion, chopped, 2 cloves garlic, minced, 2 cans (800g total) crushed tomatoes, 2 cups vegetable broth, 1 cup heavy cream, 1/4 cup fresh basil, chopped, Salt and pepper to taste, Croutons or grated Parmesan cheese (for garnish)",
    instructions: "In a large pot, melt the butter over medium heat. Add the chopped onion and minced garlic, sauté until the onion is soft and translucent. Pour in the crushed tomatoes and vegetable broth, bringing the mixture to a simmer. Let it cook for about 10 minutes. Using an immersion blender or regular blender, puree the tomato mixture until smooth. Stir in the heavy cream and chopped basil, letting the soup simmer for another 5 minutes to combine the flavors. Season the soup with salt and pepper to taste. Ladle the creamy tomato basil soup into bowls and garnish with croutons or grated Parmesan cheese.",
    image: "https://www.example.com/image9.jpg",
  },
  {
    name: "Easy Chocolate Chip Cookies",
    ingredients: "1 cup unsalted butter, softened, 1 cup granulated sugar, 1 cup brown sugar, packed, 2 large eggs, 1 teaspoon vanilla extract, 3 cups all-purpose flour, 1 teaspoon baking soda, 1/2 teaspoon salt, 2 cups chocolate chips",
    instructions: "Preheat the oven to 180°C (350°F). In a large mixing bowl, cream together the softened butter, granulated sugar, and brown sugar until smooth. Beat in the eggs, one at a time, then add the vanilla extract, mixing until well combined. In a separate bowl, whisk together the all-purpose flour, baking soda, and salt. Gradually add the dry ingredients to the wet ingredients, mixing until a cookie dough forms. Stir in the chocolate chips until they are evenly distributed throughout the dough. Drop rounded tablespoons of dough onto a baking sheet lined with parchment paper, spacing them about 2 inches apart. Bake the cookies in the preheated oven for 10-12 minutes or until the edges are lightly golden. Remove the cookies from the oven and let them cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely.",
    image: "https://www.example.com/image10.jpg",
  },
  {
    name: "Creamy Garlic Mashed Potatoes",
    ingredients: "1.5 kg potatoes (e.g., Russet or Yukon Gold), peeled and cut into chunks, 4 tablespoons unsalted butter, 1 cup milk, 4 cloves garlic, minced, Salt and pepper to taste, Chopped fresh parsley (for garnish)",
    instructions: "In a large pot, add the peeled and chopped potatoes. Fill the pot with enough cold water to cover the potatoes. Bring the water to a boil over medium-high heat. Reduce the heat to medium and let the potatoes simmer until they are fork-tender (about 15-20 minutes). While the potatoes are cooking, melt the butter in a small saucepan over low heat. Add the minced garlic and cook for a minute or until fragrant. Set aside. Drain the cooked potatoes and return them to the pot. Mash the potatoes using a potato masher or a hand mixer until they reach your desired consistency. Stir in the garlic butter mixture and gradually add the milk, mixing until the mashed potatoes are smooth and creamy. Season with salt and pepper to taste. Serve the creamy garlic mashed potatoes with a sprinkle of chopped fresh parsley on top.",
    image: "https://www.example.com/image11.jpg",
  },
  {
    name: "Fruit Salad with Honey-Lime Dressing",
    ingredients: "2 cups diced watermelon, 2 cups diced cantaloupe, 2 cups diced pineapple, 1 cup halved seedless grapes, 1 cup sliced strawberries, 1/4 cup fresh mint leaves, chopped, 2 tablespoons honey, Juice of 1 lime",
    instructions: "In a large serving bowl, combine the diced watermelon, cantaloupe, pineapple, halved grapes, and sliced strawberries. In a separate small bowl, whisk together the honey and lime juice to make the dressing. Drizzle the honey-lime dressing over the fruit salad, tossing gently to coat the fruit. Sprinkle the chopped fresh mint leaves on top of the salad for a burst of flavor and freshness. Chill the fruit salad in the refrigerator for at least 30 minutes before serving.",
    image: "https://www.example.com/image12.jpg",
  },
];

const recipesPerPage = 3;
let currentWeek = 1;
let currentRecipeIndex = (currentWeek - 1) * recipesPerPage;

function displayRecipes() {
  const recipeContainer = document.getElementById('recipeContainer');
  recipeContainer.innerHTML = '';

  for (let i = 0; i < recipesPerPage; i++) {
    const recipeIndex = (currentRecipeIndex + i) % recipes.length;
    const recipe = recipes[recipeIndex];
    const recipeElement = document.createElement('div');
    recipeElement.className = "recipe-card"; // Add the class name for styling
    // Create the HTML structure for displaying the recipe
    recipeElement.innerHTML = `
      <div class="carousel-item">
        <div class="owl-carousel recipe-carousel">
          <img src="${recipe.image}" alt="Recipe Image">
        </div>
        <h3>${recipe.name}</h3>
        <p>Ingredients: ${recipe.ingredients}</p>
        <p>Instructions: ${recipe.instructions}</p>
        <a href="Recipe${recipeIndex + 1}.html" class="button">View Recipe ${recipeIndex + 1}</a>
      </div>
    `;
    recipeContainer.appendChild(recipeElement);
  }

  currentWeek++;
  currentRecipeIndex = (currentWeek - 1) * recipesPerPage;
  if (currentRecipeIndex >= recipes.length) {
    currentWeek = 1;
    currentRecipeIndex = 0;
  }
}

// Call the function initially to display the first set of recipes
displayRecipes();

// Initialize the Owl Carousel for each recipe
$(".recipe-carousel").owlCarousel({
  items: 1,
  loop: true,
  dots: true,
  nav: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});

// Add an event listener to the "load" event of the window to refresh the recipes on page load
window.addEventListener('load', displayRecipes);
