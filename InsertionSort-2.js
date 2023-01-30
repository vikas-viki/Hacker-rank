function insertionSort2(n, arr) {
    // Write your code here
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            console.log(...arr);
            continue;
        } else {
            for (let j = i; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }
            }
            console.log(...arr);
        }
    }
}