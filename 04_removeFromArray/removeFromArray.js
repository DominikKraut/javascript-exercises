const removeFromArray = function (arr, ...args) {
  let items = arr;
  const valuesToRemove = Array.from(args);
  return (items = items.filter((i) => !valuesToRemove.includes(i)));
};

// Do not edit below this line
module.exports = removeFromArray;
