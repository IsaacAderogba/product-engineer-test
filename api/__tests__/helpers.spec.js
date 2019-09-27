const { subCipher } = require("../helpers");

describe("subCipher function", () => {
  it("returns the correct output for given range of inputs", () => {
    let output = subCipher("23 135 64 12 9 11 3645 64 18 19683 13 5 14");
    expect(output).toEqual("WE LIKE RAMEN");

    output = subCipher("4374 243 14 20 5 59049 8");
    expect(output).toEqual("FINTECH");

    output = subCipher("16 12 567 486 1 12 64 27 243");
    expect(output).toEqual("PLURAL AI");
  });

  it("Returns an error message for an incorrect input", () => {
    try {
      subCipher("4374 243 14 20 5 59049 8 1 & A");
    } catch (err) {
      expect(err.message).toEqual(
        "Text must contain numbers seperated by spaces"
      );
    }
  });
});
