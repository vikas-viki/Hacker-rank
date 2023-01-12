function maximumSum(a, m) {
    const getCombinations = (arr = []) => {
        const combine = (sub, ind) => {
           let result = []
           let i, l, p;
           for (i = ind, l = arr.length; i < l; i++) {
              p = sub.slice(0);
              p.push(arr[i]);
              result = result.concat(combine(p, i + 1));
              result.push(parseInt(p.join('')));
           };
           return result;
        }
        return combine([], 0);
     };
    let subr = getCombinations(a);
    console.log(subr.split())

    let sumsArray = [];
    for(let i=0; i<subr.length;i++){
        
            sumsArray.push((subr[i].reduce(a,b => a+b))%m);
        
    }
    console.log(sumsArray)
    // Math.max(...sumsArray)
    
    // console.log(JSON.stringify(getSubArrays(arr)));

}
maximumSum([1, 2, 3], 2)