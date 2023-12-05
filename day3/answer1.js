const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

const m = input.split("\n").map((line) => line.split("").map((s) => s));

for (let row = 0; row < m.length; row += 1) {
  for (let col = 0; col < m[row].length; col += 1) {
    if (m[row][col] !== "." && isNaN(m[row][col])) {
      // top left
      if (row - 1 >= 0 && col - 1 >= 0 && !isNaN(m[row - 1][col - 1])) {
        m[row - 1][col - 1] = +m[row - 1][col - 1];
      }

      // top
      if (row - 1 >= 0 && !isNaN(m[row - 1][col])) {
        m[row - 1][col] = +m[row - 1][col];
      }

      // top right
      if (
        row - 1 >= 0 &&
        col + 1 < m[row].length &&
        !isNaN(m[row - 1][col + 1])
      ) {
        m[row - 1][col + 1] = +m[row - 1][col + 1];
      }

      // right
      if (col + 1 < m[row].length && !isNaN(m[row][col + 1])) {
        m[row][col + 1] = +m[row][col + 1];
      }

      // bottom right
      if (
        row + 1 < m.length &&
        col + 1 < m[row].length &&
        !isNaN(m[row + 1][col + 1])
      ) {
        m[row + 1][col + 1] = +m[row + 1][col + 1];
      }

      // bottom
      if (row + 1 < m.length && !isNaN(m[row + 1][col])) {
        m[row + 1][col] = +m[row + 1][col];
      }

      // bottom left
      if (row + 1 < m.length && col - 1 >= 0 && !isNaN(m[row + 1][col - 1])) {
        m[row + 1][col - 1] = +m[row + 1][col - 1];
      }

      // left
      if (col - 1 >= 0 && !isNaN(m[row][col - 1])) {
        m[row][col - 1] = +m[row][col - 1];
      }
    }
  }
}

let sum = 0;
m.forEach((line) => {
  let num = 0;
  let isValid = false;
  for (let i = 0; i < line.length; i += 1) {
    if (typeof line[i] === "number") {
      isValid = true;
    }

    if (!isNaN(+line[i])) {
      num = 10 * num + +line[i];
    } else {
      if (isValid) {
        sum += num;
      }

      isValid = false;
      num = 0;
    }
  }

  // in case the number was at end of line
  if (isValid) {
    sum += num;
  }
});

console.log(sum);

// m.forEach((line) => console.log(line.join("")));
