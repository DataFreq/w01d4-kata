const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ [PASS] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 [ERR] Assertion Failed: ${actual} !== ${expected}`);
  }
};

const camelCase = input => {
  let arr = input.split('');
  for (let i = 0; i < input.length; i++) {
    if (arr[i] === ' ') {
      arr[i] = '';
      arr[i + 1] = arr[i + 1].toUpperCase();
    }
  }
  let str = (arr).join("");
  return str;
};

assertEqual(camelCase("this is a string"), "thisIsAString");
assertEqual(camelCase("loopy lighthouse"), "loopyLighthouse");
assertEqual(camelCase("supercalifragalisticexpialidocious"), "supercalifragalisticexpialidocious");