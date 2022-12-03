const calculateLetterValues = (arr) => {
  return arr.map((letter) => {
    if (letter === letter.toUpperCase()) {
      return letter.charCodeAt(0) - 38;
    } else {
      return letter.charCodeAt(0) - 96;
    }
  });
};

const sumLetterValues = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

module.exports = { calculateLetterValues, sumLetterValues };
