function taumBday(b, w, bc, wc, z) {
    // Write your code here
    b = BigInt(b);
    w = BigInt(w);
    bc = BigInt(bc);
    wc = BigInt(wc);
    z = BigInt(z);


    if (wc > (bc + z)) {
        console.log("1", (b * bc) + ((bc + z) * w));
        return (b * bc) + ((bc + z) * w);


    } else if (bc > (wc + z)) {
        console.log("2", (w * wc) + ((wc + z) * b));
        return (w * wc) + ((wc + z) * b);


    } else {
        console.log("3", (b * bc) + (w * wc));
        return (b * bc) + (w * wc);
    }
}
// 617318315833461267
//          b           w         bc        wc        z
taumBday(742407782, 90529439, 847666641, 8651519, 821801924)