const result = input.split("\n").reduce((acc, cur) => {
  const numbers = cur.match(/one|two|three|four|five|six|seven|eight|nine|\d/g).map(el => {
    return ({
      "one": 1,
      "two": 2,
      "three": 3,
      "four": 4,
      "five": 5,
      "six": 6,
      "seven": 7,
      "eight": 8,
      "nine": 9
    })[el] || parseInt(el, 10);
  });

  if (numbers.length) {
    acc += numbers[0] * 10 + numbers[numbers.length - 1];
  }

  return acc;
}, 0);

console.log(result);

