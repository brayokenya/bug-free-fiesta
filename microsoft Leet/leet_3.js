function Interval(x, y) {
    this.x = x;
    this.y = y;
}

function solution(A, B) {
    var intervals = [];
    for (let i = 0; i < A.length; i++) {
        intervals.push(new Interval(A[i], B[i]));
    }
    intervals.sort((intervalA, intervalB) => intervalA.x - intervalB.x);

    var stack = [];
    stack.push(intervals[0]);

    for (let i = 1, j = 0; i < intervals.length; i++) {
        if (intervals[i].x > stack[j].y) {
            stack.push(intervals[i]);
            j++;
        } else if (intervals[i].y > stack[j].y) {
            stack[j].y = intervals[i].y;
        }
    }

    return stack.length;
}