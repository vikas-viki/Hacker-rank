// the question is to return the missing elements in the first array. if there are any multiple occurences return only once.





// This uses brute force method and set to stroe only unique values (set allows only unique values)
{/*function missingNumbers(arr, brr) {
    for (let i = 0; i < arr.length; i++) {
        const index = brr.indexOf(arr[i]);
        brr.splice(index, 1);
    }
    let ary = brr.sort(function (a, b) {
        return a - b;
    });
    return [...new Set(ary)];
}
missingNumbers([203, 204, 205, 206, 207, 208, 203, 204, 205, 206], [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]);
*/}


// below one is using map datastructure.
function missingNumbers(arr, brr) {
    let nmap = new Map();
    let missarr = [];
    // Setting all the key(array element) and values (number of times) in the array.
    for(let i=0; i< brr.length; i++){
        if(nmap.has(brr[i])){
            nmap.set(brr[i], nmap.get(brr[i])+1);
        }else{
            nmap.set(brr[i],1);
        }
    }
    // console.log(nmap)
    // decrementing the values of key based on first array
    for(let i=0;i<arr.length; i++){
        if(nmap.has(arr[i])){
            nmap.set(arr[i], nmap.get(arr[i])-1)
        }
    }

    // pushing all the non zero elements to new array
    for([key,values] of nmap){
        if(values !== 0){
            missarr.push(key);
        }
    }
    // console.log(missarr);
    // Sorting and returning the array elements.
    let ary = missarr.sort(function (a, b) {
        return a - b;
    });
    // console.log(ary);
    return ary;
}

missingNumbers([203, 204, 205, 206, 207, 208, 203, 204, 205, 206], [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]);
