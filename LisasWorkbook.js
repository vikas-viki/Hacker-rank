function checkForSpecial(currentproblems, pages, k) {
    let subPages = pages;
    let special = 0;
    let count = 0;
    let pagesToTurn = String(Number(currentproblems.length / k)).split(".").length > 1 ? Math.trunc(currentproblems.length / k) + 1 : currentproblems.length / k;
    
    while(count < pagesToTurn){
        firstPageProblem = currentproblems.slice(0,k);
        if(firstPageProblem.includes(subPages)){
            special++;
        }
        subPages++;
        currentproblems = currentproblems.slice(k, currentproblems.length);
        count++;
    }
    return {special, subPages};
}


function workbook(n, k, arr) {
    let specialProblems = 0;
    let pages = 1;
    let probs = Array.from({ length: Math.max(...arr) }, (_, i) => i + 1);
    for (let i = 0; i < n; i++) {

        let currentproblems = probs.slice(0, arr[i]);
        let { special, subPages } = checkForSpecial(currentproblems, pages, k);
        specialProblems += special;
        pages = subPages;
    }
    console.log(specialProblems, pages);
    return specialProblems;
}
workbook(5, 3,
    [4, 2, 6, 1, 10])