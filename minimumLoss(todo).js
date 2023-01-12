function minimumLoss(price) {
    // Write your code here
    // let sorted = price.sort(function(a,b) {return a-b});
    // console.log(sorted);
    // console.log(price[1]-price[0]);
    // return price[1] - price[0];
    let minArr = [];
    for(let i=0;i<price.length;i++){
        for(let j=1; j<price.length;j++){
            if(price[i]-price[j] > 1){
                minArr.push(price[i]- price[j]);
            }
        }
    }
    let min = Math.min(...minArr);
    console.log(minArr, min)
    return min
}
minimumLoss([20, 7, 8, 2, 5])