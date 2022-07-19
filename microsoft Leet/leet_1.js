// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrayOfNumbers = [];
    let maxCount = 0;
    let count = 0;
    //walk through the string and separate the blocks
    for (let i = 0, j = 0; i < S.length; i++) {
        if (S[i] === S[j]) {
            count++;
            maxCount = Math.max(count, maxCount);
        } else {
            arrayOfNumbers.push(count);
            count = 1;
            j = i;
        }

        if (i === S.length - 1 && count !== 0) arrayOfNumbers.push(count);
    }
    let result = 0;
    // walk through newly created array and compare the numbers with maxCount and add the difference to the result
    for (let num of arrayOfNumbers) {
        if (num < maxCount) result += maxCount - num;
    }
    return result;
}
solution("ababb")

