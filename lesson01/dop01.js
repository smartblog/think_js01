console.log('Таблица умножения:');

let strMain = ' ';

for ( let a = 1; a < 10; a++ ) {
    if ( a.toString().length < 2 ) {
      strMain += '  ' + a;
    } else {
      strMain += a;
    }
}

console.log(strMain);

for ( let a = 1; a < 10; a++ ) {
    let str2 = '' + a;
    for ( let b = 1; b < 10; b++ ) {
      c = a * b;
      if ( c.toString().length < 2 ) {
        str2 += '  ' + c;
      } else {
        str2 += ' ' + c;
      }
    }
    console.log(str2);
}
