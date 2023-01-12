
function climbingLeaderboard(ranked, player) {
const resArr = [];
    const arrSet = [...new Set(ranked)];  // Creating new set for distinct ranking.
    let index = arrSet.length -1;
    for(const score of player){             // Looping through the scores.
        while(index >= 0){                  // Looping until the index becomes 0.
            if(score >= arrSet[index]){     // if the score is greater than the last element than increase the rank because it is greater.
                index --;
            }else{
                resArr.push(index + 2);     // if it is less than the current element then push the index t result array.
                break;                      // break because we already have worked with score.
            }
        }
        if(index < 0 ){                     // if index is less than 0 it shows that it is the greatest element in the array.
            resArr.push(1);                 // so push 1.
        }
    }
    return resArr;
}