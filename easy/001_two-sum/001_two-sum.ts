const two_sum = (a: number[], target: number): number[] => {
  for (let i = 0; i <= a.length; i++) {
    for (let j = i + 1; j <= a.length; j++) {
      if (a[i] + a[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
};

// Test cases
console.log(two_sum([2, 7, 11, 15], 9)); // [0, 1]
console.log(two_sum([3, 2, 4], 6)); // [1, 2]
console.log(two_sum([3, 3], 6)); // [0, 1]
