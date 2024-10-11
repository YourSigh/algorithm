function solve(n) {
    return Math.pow(2, [...n.toString(2)].filter(bit => bit === '1').length);
}

console.log(solve(5))