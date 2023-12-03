const result = input.split("\n").reduce((acc, cur) => {
    const numbers = cur.split("").reduce((a, c) => {
        const digit = parseInt(c, 10);
        if (!isNaN(digit)) {
            a.push(digit);
        }
        return a;
    }, []);

    if (numbers.length) {
        acc += numbers[0] * 10 + numbers[numbers.length - 1];
    }

    return acc;
}, 0);

console.log(result);
