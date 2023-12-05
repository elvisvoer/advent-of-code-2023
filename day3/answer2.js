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

m.forEach((line) => console.log(line.join("")));

let sum = 0;

for (let row = 0; row < m.length; row += 1) {
  for (let col = 0; col < m[row].length; col += 1) {
    let numbers = [];
    if (m[row][col] === "*") {
      // top left
      let i = row - 1;
      let j = col - 1;
      // top left detected
      if (i >= 0 && j >= 0 && !isNaN(m[i][j])) {
        // go left as much as possible
        while (j >= 0) {
          if (!isNaN(m[i][j - 1])) {
            j--;
          } else {
            break;
          }
        }

        // now go back towards right and form the number
        let temp = 0;
        while (j < m[i].length && !isNaN(m[i][j])) {
          temp = temp * 10 + parseInt(m[i][j]);
          // replace digits so we don't count a number twice
          m[i][j] = ".";
          j++;
        }

        numbers.push(temp);
      }

      // top
      i = row - 1;
      j = col;
      // top detected
      if (i >= 0 && !isNaN(m[i][j])) {
        // no need to go left here that is already handled before
        // go towards right and form the number
        let temp = 0;
        while (j < m[i].length && !isNaN(m[i][j])) {
          temp = temp * 10 + parseInt(m[i][j]);
          // replace digits so we don't count a number twice
          m[i][j] = ".";
          j++;
        }

        numbers.push(temp);
      }

      // top right
      i = row - 1;
      j = col + 1;
      // top right detected
      if (i >= 0 && j < m[i].length && !isNaN(m[i][j])) {
        // no need to go left here that is already handled before
        // go towards right and form the number
        let temp = 0;
        while (j < m[i].length && !isNaN(m[i][j])) {
          temp = temp * 10 + parseInt(m[i][j]);
          // replace digits so we don't count a number twice
          m[i][j] = ".";
          j++;
        }

        numbers.push(temp);
      }

      // right
      i = row;
      j = col + 1;
      // right detected
      if (j < m[i].length && !isNaN(m[i][j])) {
        // no need to go left here
        // go towards right and form the number
        let temp = 0;
        while (j < m[i].length && !isNaN(m[i][j])) {
          temp = temp * 10 + parseInt(m[i][j]);
          // replace digits so we don't count a number twice
          m[i][j] = ".";
          j++;
        }

        numbers.push(temp);
      }

      // bottom right
      i = row + 1;
      j = col + 1;
      // bottom right detected
      if (i < m.length && j < m[i].length && !isNaN(m[i][j])) {
        // go left as much as possible
        while (j >= 0) {
          if (!isNaN(m[i][j - 1])) {
            j--;
          } else {
            break;
          }
        }
        // go towards right and form the number
        let temp = 0;
        while (j < m[i].length && !isNaN(m[i][j])) {
          temp = temp * 10 + parseInt(m[i][j]);
          // replace digits so we don't count a number twice
          m[i][j] = ".";
          j++;
        }

        numbers.push(temp);
      }

      // bottom
      i = row + 1;
      j = col;
      // bottom detected
      if (i < m.length && j < m[i].length && !isNaN(m[i][j])) {
        // go left as much as possible
        while (j >= 0) {
          if (!isNaN(m[i][j - 1])) {
            j--;
          } else {
            break;
          }
        }
        // go towards right and form the number
        let temp = 0;
        while (j < m[i].length && !isNaN(m[i][j])) {
          temp = temp * 10 + parseInt(m[i][j]);
          // replace digits so we don't count a number twice
          m[i][j] = ".";
          j++;
        }

        numbers.push(temp);
      }

      // bottom left
      i = row + 1;
      j = col - 1;
      // bottom left detected
      if (i < m.length && j >= 0 && !isNaN(m[i][j])) {
        // go left as much as possible
        while (j >= 0) {
          if (!isNaN(m[i][j - 1])) {
            j--;
          } else {
            break;
          }
        }
        // go towards right and form the number
        let temp = 0;
        while (j < m[i].length && !isNaN(m[i][j])) {
          temp = temp * 10 + parseInt(m[i][j]);
          // replace digits so we don't count a number twice
          m[i][j] = ".";
          j++;
        }

        numbers.push(temp);
      }

      //  left
      i = row;
      j = col - 1;
      //  left detected
      if (i < m.length && j >= 0 && !isNaN(m[i][j])) {
        // go left as much as possible
        while (j >= 0) {
          if (!isNaN(m[i][j - 1])) {
            j--;
          } else {
            break;
          }
        }
        // go towards right and form the number
        let temp = 0;
        while (j < m[i].length && !isNaN(m[i][j])) {
          temp = temp * 10 + parseInt(m[i][j]);
          // replace digits so we don't count a number twice
          m[i][j] = ".";
          j++;
        }

        numbers.push(temp);
      }

      if (numbers.length === 2) {
        sum += numbers[0] * numbers[1];
      }
    }
  }
}

m.forEach((line) => console.log(line.join("")));

console.log(sum);
