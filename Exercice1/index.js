//votre code ici

export default pairNumbers

function pairNumbers(min, max) {
    let numbers = [];

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            numbers.push(i);
        }
    }
    return numbers.join(",");
}
console.log(pairNumbers(1, 10));