const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

const lines = input.split("\n");
const cards = Array(lines.length).fill(0);

lines.forEach((line, index) => {
  const card = line.split(":")[1];
  const numbers = card.split("|");
  const win = numbers[0]
    .trim()
    .split(" ")
    .filter((n) => n);
  const hand = numbers[1]
    .trim()
    .split(" ")
    .filter((n) => n);

  // original
  cards[index]++;

  const count = hand.reduce((acc, num) => {
    if (win.includes(num)) {
      return acc + 1;
    }

    return acc;
  }, 0);

  for (let i = 0; i < cards[index]; i += 1) {
    for (let j = 0; j < count; j += 1) {
      cards[index + j + 1]++;
    }
  }
});

console.log(cards.reduce((acc, cur) => acc + cur));
