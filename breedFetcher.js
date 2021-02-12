//Dynamic Breed Input
const userBreedInput = process.argv.slice(2)[0]; //Array with one input i.e. the breed

const request = require("request");
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
const endPoint = userBreedInput;

//Send a request to get the breed info, then extract the info from the property method (need to convert from JSON to Object)
request(`${url}${endPoint}`, (error, response, body) => {
  if (error) {
    console.log("Error is:", error);
    return process.exit;
  }
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  if (body === "[]") {
    console.log("Sorry this breed is not yet in our database!");
    process.exit;
  } else {
    const data = JSON.parse(body);
    const description = data[0].description;
    console.log(description);
  }
});
