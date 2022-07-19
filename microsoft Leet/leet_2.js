function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length;
    let first,
        second,
        cost = Number.MAX_SAFE_INTEGER;

    if (len <= 2) return 0;

    for (let i = 1; i < len - 1; i++) {
        first = A[i];
        for (let j = i + 2; j < len - 1; j++) {
            second = A[j];
            if (first + second < cost) {
                cost = first + second;
            }
        }
    }
    return cost;
}