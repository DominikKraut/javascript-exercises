const sumAll = function (integrer1, integrer2) {
  let array = [];
  if (integrer1 < 0 || integrer2 < 0) return "ERROR";
  if (typeof integrer1 != "number" || typeof integrer2 != "number") return "ERROR";
  //pokud je integer1 větší začni odtatmud, pokud je integer2 větší začni počítat z něj  //pokud je integer1 větší začni odtatmud, pokud je integer2 větší začni počítat z něj
  if (integrer1 > integrer2) {
    for (let i = integrer2; i <= integrer1; i++) {
      array.push(i);
    }
  }
  if (integrer2 > integrer1) {
    for (let i = integrer1; i <= integrer2; i++) {
      array.push(i);
    }
  }
  return array.reduce((a, b) => a + b);
};
// dej integer 1 jako start a integer 2 jako konec loopy
// každou iteraci pushni do array
// reduce array aby vznikl součet

// Do not edit below this line
module.exports = sumAll;
