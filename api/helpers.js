const subCipher = cipher => {
  return cipher
    .trim()
    .split(" ")
    .map(char => {
      num = parseInt(char);
      while (num >= 27) num = num / 27;
      // adding 64 to num  will give the correct ascii value
      // which will ultimately return the correct letter
      num += 64;
      return Number.isInteger(num) ? String.fromCharCode(num) : " ";
    })
    .join("");
};

module.exports = {
  subCipher
}
