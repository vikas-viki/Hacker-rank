function balancedSums(arr) {
    // Write your code here
    let has = 'NO';
    var leftArrSum;
    for (let i = 0; i < arr.length - 1; i++) {
        let leftArr = arr.slice(0, i);
        console.log(leftArr, i)
        if (i === 0) {
            leftArrSum = 0;
        } else {

            leftArrSum = leftArr.reduce((acc, cur) => acc + cur);
        }

        let rightArr = arr.slice(i + 1, arr.length);
        console.log(rightArr, i)
        let rightArrSum = rightArr.reduce((acc, cur) => acc + cur);
        if (leftArrSum === rightArrSum) {
            has = 'YES';
        }
    }
    console.log(has)
    return has;
}
balancedSums([2, 0, 0, 0])