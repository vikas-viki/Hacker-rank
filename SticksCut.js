function cutTheSticks(arr) {
    // Write your code here
    let sticksCut = [];
    function cutSticks(array) {
        let cutedArray = [];
        let min = Math.min(...array);
        for (let i = 0; i < array.length; i++) {
            if (array[i] - min > 0) {
                cutedArray.push(array[i] - min);
            }
        }
        if (cutedArray.length > 0) {
            sticksCut.push(cutedArray.length);
        }
        if (cutedArray.length > 0) {
            cutSticks(cutedArray);
        }
    }
    sticksCut.push(arr.length);
    cutSticks(arr);
    console.log(sticksCut)
    return sticksCut;
}
cutTheSticks([5, 4, 4, 2, 2, 8]);