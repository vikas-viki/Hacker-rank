
function countingValleys(steps, path) {
    let count = 0, times = 0;
    for (let i = 0; i < steps; i++) {
        if (path[i] === "U") {
            // if it is up and count is equal to -1 which is one step below the sea level , the current step will make it 0 
            // so increment the valleys because he came back to the sea level once.
            if(count === -1){
                times++;
            }
            count++;
        }
        else {
            count--;
        }
    }
    return times;
}

// countingValleys(8,["U","D","D","D","U","D","U","U"]);
// countingValleys(12, ['D','D','U','U','D','D','U','D','U','U','U','D'])
let b = "DDUDUDDUDDUDDUUUUDUDDDUUDDUUDDDUUDDUUUUUUDUDDDDUDDUUDUUDUDUUUDUUUUUDDUDDDDUDDUDDDDUUUUDUUDUUDUUDUDDD".split("");
// let b = "UDUUUDUDDD".split("");
countingValleys(100, b);

