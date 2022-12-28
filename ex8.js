let map = new Map();
map.set('1', 'one').set(123, 18).set(true, ['lala']);

for(let [key, value] of map) {
  console.log(`Ключ - ${key}, значение - ${value}`);
}