function squares(a, b) {
    
    let firstRoot = 0;
    while (a <= b) {
        if (String(Math.sqrt(a)).split(".").length == 1) {
            firstRoot = Math.sqrt(a);
            break;
        }
        a++;
    }
    let lastRoot = 0;
    while (b >= a) {
        if (String(Math.sqrt(b)).split(".").length == 1) {
            lastRoot = Math.sqrt(b);
            break;
        }
        b--;
    }
    if(firstRoot !== 0){
        return lastRoot - firstRoot + 1;
    }
    return 0;
}
squares(17, 24);
// https://www.hackerrank.com/challenges/sherlock-and-squares/problem?isFullScreen=true
/* 
    take the first and last root between the range and subtract it to get the actual number of roots between them.
*/