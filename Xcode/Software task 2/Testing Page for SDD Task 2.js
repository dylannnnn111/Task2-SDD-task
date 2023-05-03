const apiKey = '644f2b75347d438b8eda2eed10c93404';
const apiUrl = `https://spoonacular.com/food-api=$apiKey`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // do something with the data, such as printing it to the console
    console.log(data);
  })
  .catch(error => {
    // handle any errors that occurred during the fetch request
    console.error('Error fetching data:', error);
  });
