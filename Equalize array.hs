function equalizeArray(arr) {
    // Write your code here
    let arrmap = new Map(), i;
    for(i=0;i<arr.length;i++){
        if(!arrmap.has(arr[i])){
            arrmap.set(arr[i], 1);
        }else{
            arrmap.set(arr[i], arrmap.get(arr[i])+1);
        }
    }
    var h =  arrmap.get(arr[0]);
    for(let [key,val] of arrmap.entries()){
        if(val > h){
            h = val;
        }
    }
    return arr.length - h;
}