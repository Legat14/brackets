module.exports = function check(str, bracketsConfig) {
  let restBrackets = str;
  let chenged = true;
  while (chenged) {
    chenged = false;
    bracketsConfig.forEach((pairOfBrackets) => {
      let pairOfBracketsStr = pairOfBrackets[0] + pairOfBrackets[1];
      let compare = restBrackets;
      restBrackets = restBrackets.replaceAll(pairOfBracketsStr, '');
      if (restBrackets !== compare) {
        chenged = true;
      }
    });
  }
  return !restBrackets;
}