function jansNotation(data) {
    let operationEnum = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    }
    let result = [];
    let numbers = [];
    let operators = [];

    for (let el of data) {
        if (typeof (el) === "number") {
            numbers.push(el)
        } else {
            operators.push(el)
        }
    }

    if (numbers.length <= operators.length) {
        console.log("Error: not enough operands!");
        return;
    } else if (operators.length === 0 || numbers.length - 1 > operators.length) {
        console.log("Error: too many operands!");
        return;
    }

    for (let el of data) {
        if (typeof (el) === "number") {
            result.push(el)
        } else {
            let numB = result.pop();
            let numA = result.pop();
            let res = operationEnum[el](numA, numB)
            result.push(res);
        }
    }

    console.log(result.join());

}

jansNotation([3, 4, '+'])
console.log("-----");
jansNotation([5, 3, 4, '*', '-'])