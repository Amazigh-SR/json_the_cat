const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv.slice(2)[0]; //Array with one input i.e. the breed

//This is the cat callback
const catCb = (error, description) => {
  if (error) {
    console.log("Error is:", error);
    return process.exit;
  } else {
    console.log(description);
  }
};

fetchBreedDescription(breedName, catCb);
