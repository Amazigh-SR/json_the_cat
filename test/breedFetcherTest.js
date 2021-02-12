// breedFetcherTest.js

const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it("returns an error message when an invalid breed/non-existent breed is passedin, via callback", (done) => {
    fetchBreedDescription("toyotaBMW", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(desc, null);

      const expectedDesc =
        "Sorry this breed is not yet defined in our database!";

      // compare returned description
      assert.equal(expectedDesc, err.trim());

      done();
    });
  });
});
