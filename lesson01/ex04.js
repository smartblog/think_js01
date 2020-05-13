let sum = 0;
let count = 0;

for (;;) {
  num = prompt("Введите число");
  if ( num === '' ) {
    break;
  }
  sum += parseInt(num);
  count += 1;

  console.log('sum = ' + sum);
  console.log('count = ' + count);
}

avg = sum / count;

alert(`Сумма чисел = ${sum}\nкол-во чисел = ${count}\naverage = ${avg}`);
