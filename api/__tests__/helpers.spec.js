const { subCipher } = require("../helpers");

describe("subCipher function", () => {
  it("returns the correct output for given range of inputs", () => {
    let output = subCipher("23 135 64 12 9 11 3645 64 18 19683 13 5 14");
    expect(output).toEqual("WE LIKE RAMEN");
  });
});
