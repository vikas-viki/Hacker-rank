function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let money = [];
    for (let i = 0; i < keyboards.length; i++) {
        
        for(let j = 0; j < drives.length; j++){
            if(keyboards[i]+drives[j] < b){
                money.push(keyboards[i]+drives[j]);
            }
        }
    }
    const max = Math.max(...money);
    return money.length > 0 ? max : -1;
}
getMoneySpent([3, 1], [5, 2, 8,], 10);