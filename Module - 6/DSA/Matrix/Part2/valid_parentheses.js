
const isEmpty = (stack) => {

  return stack.length === 0;

}

const peek = (stack) => {

  if (!isEmpty(stack)) {
    const len = stack.length;
    return stack[len - 1];
  }

  return -Infinity;

}


const isValidParentheses = (parentheses) => {

  let isValid = false;

  if (!parentheses || parentheses.length === 0 || parentheses.length % 2 !== 0) {
    return false;
  }

  const stack = [];


  let idx = 0;
  console.log("Processing input...")
  while (idx < parentheses.length) {

    const current = parentheses[idx]; // {,},[,],(,)
    if (isEmpty(stack)) {

      stack.push(current);
      idx++;
      continue;
    }

    idx++;
    const topElementOnStack = stack.pop();

    switch (current) {

      case ']':

        if (topElementOnStack !== '[') {
          stack.push(topElementOnStack);
          stack.push(current);
        }
        break;
      case '[':
        stack.push(topElementOnStack);
        stack.push(current);
        break;

      case '}':

        if (topElementOnStack !== '{') {
          stack.push(topElementOnStack);
          stack.push(current);
        }
        break;
      case '{':
        stack.push(topElementOnStack);
        stack.push(current);
        break;

    }


  }


  isValid = isEmpty(stack);

  return isValid;

}

let input = "[][]"
input = "[][{]"
console.log(isValidParentheses(input))