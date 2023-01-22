function encryption(s) {
    // Write your code here
    let spremstr = s.split(" ").join("");
    let row = Number(String(Math.sqrt(spremstr.length)).split(".")[0]);
    let col = row + 1;
    if(!String(Math.sqrt(spremstr.length)).split(".")[1]){
        row = Number(String(Math.sqrt(spremstr.length)).split(".")[0]);
        col = Number(String(Math.sqrt(spremstr.length)).split(".")[0]);
    }

    let arr = [];
    for (i = 0; spremstr.length > 0; i++) {
            arr.push(spremstr.slice(0, col).split(""))
            spremstr = spremstr.slice(col);
    }
    console.log("arr", arr)
    let resArr = [];
    
    for (let j = 0; j < arr[0].length; j++) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
          newArr.push(arr[i][j]);
        }
        resArr.push(newArr.join(""));
      }
      console.log(resArr.join(" "));

    return resArr.join(" ")

}

encryption("iffactsdontfittotheorychangethefacts");
