function processData(...input) {
    let inputs = input[0].split('\n');
    for (let i = 1; i < inputs.length; i++) {
        let f1 = 1, f2 = 1, f3 = 0, count = 2;
        while (String(f3).length < Number(inputs[i])) {
            f3 = f1 + f2;
            f1 = f2;
            f2 = f3;
            count++;
        }
        console.log(count);
    }
}
processData('2\n4999\n 3000')