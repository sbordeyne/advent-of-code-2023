const fs = require('fs');

const file = fs.readFileSync('./1-javascript/input.txt', 'utf8');
const lines = file.split('\n');

let sum = 0;
for (const line of lines) {
    const numbers = Array.from(line).filter((c) => c.match(/[0-9]/)).map((c) => parseInt(c));
    const firstDigit = numbers[0];
    const lastDigit = numbers[numbers.length - 1];
    if (firstDigit !== undefined && lastDigit !== undefined) {
        sum += firstDigit * 10 + lastDigit;
    }
}

console.log("part1 sum=", sum);

sum = 0;

for (const line of lines) {
    // replace all words with numbers
    // We add the first and last letter of the corresponding word
    // so that on replace, we handle the case where one letter from a word is the start of another word
    // e.g. "one" and "two", as twone would be 2, 1 in the end (the o is shared)
    const numbers = Array.from(
        line
        .replace(/one/g, 'o1e')
        .replace(/two/g, 't2o')
        .replace(/three/g, 't3e')
        .replace(/four/g, 'f4r')
        .replace(/five/g, 'f5e')
        .replace(/six/g, 's6x')
        .replace(/seven/g, 's7n')
        .replace(/eight/g, 'e8t')
        .replace(/nine/g, 'n9e')
        .replace(/zero/g, 'z0o')
    ).filter((c) => c.match(/[0-9]/)).map((c) => parseInt(c));
    console.log(line, numbers);
    const firstDigit = numbers[0];
    const lastDigit = numbers[numbers.length - 1];
    if (firstDigit !== undefined && lastDigit !== undefined) {
        sum += firstDigit * 10 + lastDigit;
    }
}

console.log("part2 sum=", sum);
