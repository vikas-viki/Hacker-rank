function viralAdvertising(n) {
    // Write your code here
    let day = 1, likes = 0, people = 5;
    while(day <= n){
        likes += Math.floor(people / 2);
        day++;
        people = Math.floor(people / 2) * 3;
    }
    return likes;

}
//https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true
viralAdvertising(3);