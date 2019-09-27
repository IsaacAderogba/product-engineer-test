const { graphql } = require("graphql");
const graphqlSchema = require("../schema");

describe("substitution cipher query", () => {
  it("returns the correct output for a given cipher sequence", async () => {
    const query = `
      query {
        cipher(cipher: "8 5 324 8748 295245 730 23 405 13122 12 108") {
          decodedCipher
        }
      }
    `;

    const { data } = await graphql(graphqlSchema, query);
    expect(data.cipher.decodedCipher).toEqual("HELLO WORLD");
  });
});
