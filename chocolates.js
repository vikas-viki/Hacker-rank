function chocolateFeast(n, c, m) {
    // Write your code here
    let chocolates = 0, wrappers = 0;  
    let noOfChoclatesHeCanEatByMoney = Math.trunc(n / c);
    chocolates += noOfChoclatesHeCanEatByMoney; 
    wrappers = + noOfChoclatesHeCanEatByMoney;
    
    // console.log(wrappers);

    while (Math.trunc(wrappers / m) > 0) {
        let wrapperToChoclates = Math.trunc(wrappers / m);
        // console.log(wrapperToChoclates);
        wrappers = (wrappers % m) + (wrapperToChoclates);  // wrappers = remainingWrappersAfterConvertingToCholate + wrappersOfConvertedChocolates.
        chocolates += wrapperToChoclates;
        // console.log(wrappers);
    }
    // console.log(chocolates)
    return chocolates;
}
chocolateFeast(
    6, 2, 2
);

// 1163 