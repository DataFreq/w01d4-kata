const repeatNumbers = arr => {
  let print = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i][1]; j++) print += arr[i][0];
    if (arr.length !== 1 && i !== arr.length - 1) print += ', ';
  }
  return print;
};

console.log(repeatNumbers( [ [1, 10] ] )); // [0][0]

console.log(repeatNumbers( [ [1, 2], [2, 3] ] )); // [0][0], [0][1]

console.log(repeatNumbers( [ [10, 4], [34, 6], [92, 2] ] )); // [0][0], [0][1], [0][2]

console.log("=====[PROCESS ONE COMPLETE]=====");
console.log("1111111111\n11, 222\n10101010, 343434343434, 9292");
console.log("=====[EXPECTED OUTPUT]=====");