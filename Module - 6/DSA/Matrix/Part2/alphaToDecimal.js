
const alphaToDecimal = (alpha) => { //ABC

  let decimal_val = 0;

  for (let i = 0; i < alpha.length; i++) {

    const exponentValue = Math.pow(26, alpha.length - i - 1);
    const current = alpha[i];
    const unitValue = current.charCodeAt(0) - 64;

    decimal_val += (exponentValue * unitValue);

  }

  return decimal_val;

}

let input = "ABC";
input = "AB"
console.log(alphaToDecimal(input));