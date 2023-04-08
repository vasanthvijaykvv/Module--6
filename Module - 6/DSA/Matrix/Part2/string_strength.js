
//"abcdba"
const find_longest_uniq_substring = (str) => {

  if (!str || str.length === 0) return 0;


  let result = 0;

  const char_set = new Set();

  let left = 0;

  for (let right = 0; right < str.length; right++) {

    const current = str[right];

    while (char_set.has(current)) {
      char_set.delete(str[left]);
      left += 1;
    }

    char_set.add(current);

    result = Math.max(result, right - left + 1) // max(0, 1-0+1)

  }

  return result;

}










const find_string_strength = (str) => {


  let str_strength = 0;

  // do the validation of input

  // find the longest substring with unique characters
  const result = find_longest_uniq_substring(str);

  // compute the strength of the string

  str_strength = result / str.length;

  return str_strength.toFixed(2) * 100;

}


let input = 'abcdabec';
console.log(find_string_strength(input) + "%"); // 5/8