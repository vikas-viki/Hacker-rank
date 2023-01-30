function insertionSort1(n, arr) {
    // Write your code here
    var i;
    let toSort = arr[arr.length - 1];
    for (i = n - 2; i >= 0; i--) {
        if (toSort > arr[i]) {
            arr[i + 1] = toSort;
            console.log(...arr);
            break;
        }else {
            arr[i + 1] = arr[i];
            console.log(...arr);
        }
    }
    if (i+1 === 0) {
        arr[0] = toSort;
        console.log(...arr)
    } 
}
insertionSort1(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1])