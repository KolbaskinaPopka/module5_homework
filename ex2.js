let x = {};

switch (typeof x) {
  case 'number':
    return console.log('number');
  case 'string':
    console.log('string');
    break;
  case 'boolean':
    console.log('boolean');
    break;
  default:
    return console.log('Тип x не определён');
}
