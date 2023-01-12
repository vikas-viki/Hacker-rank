
function pageCount(n, p) {
    /*
    https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true
    Qn -> minimum how many times the pages must be turned to get the the specified page
    n -> number of pages in the book.
    p -> page to be found by turning pages
    the last two pages of the book will be printed with n and n-1 if the n%2 !==0
    else it will only be printed with n
    Math.trunc() -> only returns the integral part of the floating point number.

    6, 5 1/2 = 0
    */
    let count, i;
    if (p === 1 || p === n || p === n - 1 && n % 2 > 0) {
        return 0;

    } else if (n % 2 === 0 && p === n - 1) {
        return 1;
    }
    else if (p <= Math.trunc(n / 2)) {
        count = 1;
        for ( i = 1; i < n; i++) {
            count += 2;
            if (p <= count) {
                return i;
            }
        }
    } else {
        count = n - 2;
        for (i = 1; i < n; i++) {
            if (p >= count || p >= count - 1) {
                return i;
            }

            count -= 2;
        }
    }

}
// pageCount(6, 5);

// best answer
/*
    6,5 -> 5/2 -> 2
    5,4
    front  -> 4/2 -> 2
    back -> 5-4 /2 ->0

*/
function pageCount(n, p) {
    let frontCount = Math.floor(p / 2);
    let backCount = 0;
    if (n % 2 === 1) {
        backCount = Math.floor((n - p) / 2);
    } else {
        backCount = Math.floor((n - p + 1) / 2);
    }
    console.log( Math.min(frontCount, backCount));
    return Math.min(frontCount, backCount);

}
pageCount(6, 5);