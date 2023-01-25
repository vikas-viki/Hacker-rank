/* 
int p: the price of the first game
int d: the discount from the previous game price
int m: the minimum cost of a game
int s: the starting budget
*/
function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let count = 0;
    while (s >= p) {
        s -= p;
        count++;
        p = Math.max(p - d, m);
    }
    return count;

}
howManyGames(100 ,19 ,1, 180)