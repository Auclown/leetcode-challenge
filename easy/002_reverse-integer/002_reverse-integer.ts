const reverseInteger = (x: number): number => {
  if (x < -231 || x > 230) {
    return 0;
  }

  if (x == 0) {
    return 0;
  }

  const numString: string = x.toString();

  let num: number = reverse(numString);

  return num;
};

const reverse = (a: string): number => {
  const aSplit: string[] = a.split("");
  let result: number;
  let sign: number = 1;

  const reversed: string[] = aSplit.reverse();
  result = parseInt(reversed.join(""));

  if (a[0] == "-") {
    sign = -1;
  }

  return sign * result;
};

// Test cases
console.log(reverseInteger(123)); // 321
console.log(reverseInteger(-123)); // -321
console.log(reverseInteger(120)); // 21
console.log(reverseInteger(0)); // 0
