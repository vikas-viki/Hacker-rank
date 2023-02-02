function numberToWords(num) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty'];

    if (num < 20) return ones[num];
    return tens[Math.floor(num / 10)] + (num % 10 ? ' ' + ones[num % 10] : '');
}

function timeInWords(h, m) {
    // Write your code here
    let string = '';
    let hrs = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    if (m > 30) {
        let minutes = numberToWords(60 - m );
        if (m === 45) {
            return `quarter to ${numberToWords(h+1)}`;
        }else{
            return `${minutes} minutes to ${numberToWords(h + 1)}`;
        }
    } else {
        if (m === 15) {
            return `quarter past ${numberToWords(h)}`;
        } else if (m === 30) {
            return `half past ${numberToWords(h)}`;
        } else if (m === 0) {
            return `${numberToWords(h)} o' clock`;
        } else {
            if(m === 1){                
            return `${numberToWords(m)} minute past ${numberToWords(h)}`;
            }
            return `${numberToWords(m)} minutes past ${numberToWords(h)}`;
        }
    }
    // console.log(hrs[h]);
}