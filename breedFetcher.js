//Dynamic Breed Input
const request = require("request");

// -------------------------------------------------------------//

const fetchBreedDescription = function (breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=";

  request(`${url}${breedName}`, (error, response, body) => {
    console.log("statusCode:", response && response.statusCode); // Print the response status code

    //If an error occurs:
    if (error) {
      return callback(error, null);
    }

    //When no errors - 2 cases can happen either breed is defined or not
    const data = JSON.parse(body);
    let breed = data[0];

    //Search query results in a empty array
    if (!breed) {
      callback("Sorry this breed is not yet defined in our database!");
      process.exit;
      //Everything went smooth and the search query had a matching breed in the DB
    } else {
      callback(null, breed.description);
    }
  });
};

module.exports = { fetchBreedDescription };
