/* Программа, которая выводит количество делителей числа */

const readline = require('readline-sync');

const n = readline.question('Введите натуральное число: ');

function getDivisorsCnt(n){

    var numDivisors = 1;
    var factor = 2;

    while (factor * factor <= n) {
      if (n % factor === 0) {
        let exponent = 0;
        do {
          n /= factor;
          exponent++;
        } while (n % factor === 0)

        numDivisors *= exponent + 1;
      }

      factor = factor == 2 ? 3 : factor + 2
    }

    if (n > 1) {
      numDivisors *= 2;
    }

    return numDivisors;
}

console.log("Количество делителей числа: " + getDivisorsCnt(n));