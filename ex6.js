let array = ['hello', 12, 13, 14, 15, 16, 18, '19', { a: '1', b: 1 }, ['hi'], 'Bye', true];

console.log(array.every((a, i) => a[0] === a[i]));