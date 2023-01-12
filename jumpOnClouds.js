function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0, i = 0, counter = 0;
    while(counter < c.length){
         if (c[i + 2] == 0 && i + 2 <= c.length) {
            jumps++;
            i += 2;
        } else if (c[i + 1] == 0 && i + 1 <= c.length) {
            jumps++;
            i+=1;
        }
        console.log(i);
        counter++;
    }
    console.log(jumps )
    return jumps ;
}
jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])

/* 
There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.
*/