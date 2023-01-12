// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let energy = 100;
    let count = 0;
    let index;
    while (index !== 0 ) {
      count === 0 && (index = 0);
      index = (index + k) % c.length;
      energy = c[index] > 0 ? energy - 3 : energy - 1;
      count++;
      console.log(energy, index)
    }
    
    return energy;
  }
// jumpingOnClouds([1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1], 19)
// jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3)
jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)