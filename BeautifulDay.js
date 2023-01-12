function beautifulDays(i, j, k) {
    // Write your code here
    let count = 0;
    for (let n = i; n <= j; n++) {
        let reverse = Number(String(n).split('').reverse().join(''));
        let fractional = (n - reverse) / k;
        if( fractional % 1 === 0.00){ 
            count++;
        }
    }
    // console.log(count)
    return count;
}
beautifulDays(20,23,6);