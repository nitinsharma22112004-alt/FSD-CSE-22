const num = [1, 2, 3, 4, 5];
const even = num.filter((n) => n % 2 === 0);
console.log("num=", num);
console.log("even=", even);
const square = even.map((i) => i * i);
console.log("square=", square);