/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let stack = [];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == "C") {
            stack.pop();
        }
        else if (operations[i] == "D") {
            stack.push(stack[stack.length - 1] * 2);
        }
        else if (operations[i] == "+") {
            let first = stack[stack.length - 1];
            let second = stack[stack.length - 2];
            stack.push(first + second);
        }
        else {
            stack.push(Number(operations[i]));
        }
    }

    let total = 0;

    while (stack.length) {
        total += stack.pop();
    }

    return total;
};