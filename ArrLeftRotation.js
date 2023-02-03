function rotate(arr, d) {
    var rotated = arr;
    while(d > 0){
        rotated.push(rotated.shift());
        d--;
    }
    console.log(rotated);
}

rotate([1, 2, 3, 4, 5], 4);