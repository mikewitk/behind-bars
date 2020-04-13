// Count number of characters
const countCharacters = (namesArr) => {
  const namesAnalysis = [];
  namesArr.forEach((element) => {
    const splitName = element.split(" ");
    const groupName = splitName.join("");
    let count = groupName.length;
    namesAnalysis.push({
      name: element,
      charCount: count,
    });
  });

  return namesAnalysis;
};

// Find highest value in a set of number
const highestValue = (values) => {
  return Math.max(...values);
};
