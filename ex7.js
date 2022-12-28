let odd = 0;
let even = 0;

array.map(a => typeof a === 'number' ? a % 2 === 0 ? even++ : odd++ : a);
console.log(odd, even);
