function getSubArrays(arr, m) {
  let sumSubs = [...arr];
  console.log(sumSubs)
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      sumSubs.push(arr[i]);
    } else {
      sumSubs.push((sumSubs[i - 1] + arr[i]));
    }
  }
  for (let j = 0; j < sumSubs.length; j++) {
    sumSubs[j] = sumSubs[j] % m;
  }
  return Math.max(...sumSubs);
}
getSubArrays([3, 3, 9, 9, 5], 7);