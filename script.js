// ! 8

/* function greet(name){
    return `Hello, ${name} how are you doing today?`
  } */


// ! 8

/* function reverseList(list) {

    console.log(list.reverse());
}

reverseList([1, 'test', true]); */


// !8

/* function arrFix(num) {

    var minVal = num[0];
    var maxVal = num[num.length - 1];

    const arrNew = [];

    var current = minVal;


    while (current <= maxVal) {
        arrNew.push(current);
        current++;
    }
    console.log(arrNew);

}

arrFix([1,4,9,15]); */


// !8

/* function maps(x) {
    return x.map(function (num) {
        console.log(num * 2);
        // return num * num
    })
} */

/* function maps(x){
    console.log(x.map(n => n * 2));
  }

maps([1, 2, 10, 50]) */


// !8

/* function problem(x){
    //your code here
    if(typeof x === 'string') {
        console.log('err');
    }
    else  {
        console.log(x * 50 + 6);
    }
  }
  problem(10) */


// !8

/* function peopleWithAgeDrink(old) {
    if (old < 14) {
        console.log('Kids drink toddy');
    }
    else if (old >= 14 && old < 18) {
        console.log('Teens drink coke');
    }
    else if (old >= 18 && old < 21) {
        console.log('Young adults drink beer');
    }
    else if (old >= 21) {
        console.log('Adults drink whisky');
    }
};
peopleWithAgeDrink(17) */


// !8

/* function countPositivesSumNegatives(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }

    let countPositives = 0;
    let sumNegatives = 0;

    for (let num of arr) {
        if (num > 0) {
            countPositives++;
        }
        else if (num < 0) {
            sumNegatives += num;
        }
    }

    console.log([countPositives, sumNegatives]);
}

countPositivesSumNegatives([1, 2, 3, 4, -1, -3]) */


// !8

/* var number = function (array) {
    console.log(array.map((value, index) => `${index + 1}: ${value}`));
}

number(['str1', 'str2', 'str3']) */


// !8

/* function addUp(num) {
    let sum = 0;
    let i = 1;
    while (i <= num) {
        sum += i;
        i++;
    }
    console.log("Сумма арифметической прогрессии:", sum);
}

addUp(5) */


// !8

/* function countTrue(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }
    console.log(count);
}

countTrue([true,false,true,true]) */


// !8

/* function findNeedle(arr) {
    var index;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            index = i;
            console.log(`элемент найден на позиции ${index}`);
            break;
        }
    }
}

findNeedle([1, 2, 3, 4, 5]) */


/* function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const position = findIndex([1, 2, 4, 5, 3], 3);
console.log("Позиция элемента:", position); */


// !8

/* function friend(friends) {
     console.log(friends.filter(s => s.length === 4));
}

friend([1,'Alex']); */


// !8

/* function friend(array) {
    let res = []
    for (itm of array) {
        res.push(-itm)
    }
    console.log(res);
}

friend([1, -2, 3, 4, -5]) */


// !8

/* function between(a, b) {
    const arrNew = [];
    for (let i = a; i <= b; i++) {
        arrNew.push(i);
    }
    return arrNew;
}
console.log(between(-3, 5)); */


// !8

/* function repeatString(n, s) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result = result + s;
    }
    return result;
}

console.log(repeatString(2, "I"));
console.log(repeatString(5, "Hello")); */


// !8

/* function toCsvText(array) {
    let x = array.map(row => row.join(',')).join('\n');
    console.log(x);
}

toCsvText([[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]) */


// !8

/* function monkeyCount(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        res.push(i);
    }
    console.log(res);
}

monkeyCount(5); */


// !8

/* function grow(x) {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
        res = res * x[i]
    }
    console.log(res);
}

grow([1, 2, 3, 4, 5]) */


// !8 Counting true...

/* function countSheeps(sheep) {
    let count = 0;
    for (elm of sheep) {
        if (elm === true) {
            count++;
        }
    }
    console.log(count);
}

countSheeps([1, 'true', true, false, true, true, true]) */


// !8 Well of Ideas...

/* function well(x) {
    let fail = 0;
    let publish = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'bad') {
            fail++;
        }
        else if (x[i] === 'good') {
            publish++;
        }
    }

    if (publish === 0) {
        return 'Fail!';
    } else if (publish <= 2) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }

    // return publish === 0 ? 'Fail!' : publish <= 2 ? 'Publish!' : 'I smell a series!';
}

well(['bad', 'bad', 'bad',])
well(['good', 'good', 'good', 'str', 'goodstr']) */


// !8 Find numbers which are divisible by given number...

/* function divisibleBy(numbers, divisor) {
let res = [];
    for (num of numbers) {
        if(num % divisor === 0) {
            res.push(num)
        }
    }
    console.log(res);
}

divisibleBy([1, 2, 3, 4, 5, 6], 2) */


// !8 calculate the downward rounded average of the marks array

/* function getAverage(marks) {
    let sum = marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let res = Math.floor(sum / marks.length);
    console.log(res);
}

getAverage([5, 5, 5, 4, 4]); */


// !8 Sum Mixed Array...

/* function sumMix(x) {
    var res = 0;
    for (el of x) {
        if (typeof el === 'string') {
            res += parseInt(el);
        } else {
            res += el;
        }
    }
    console.log("Сумма: " + res);
    console.log("Тип данных: " + typeof res);
}

sumMix(['7', 6, '8']); */


// !8 Merging sorted integer arrays (without duplicates)...

/* function mergeArrays(a, b) {
    var comb = [...a, ...b];
    var res = comb.sort((a, b) => a - b);


    const uniqueArr = [];
    for (let i = 0; i < res.length; i++) {
        if (!uniqueArr.includes(res[i])) {
            uniqueArr.push(res[i]);
        }
    }
    console.log(uniqueArr);
}

mergeArrays([9, 8, 3, 1], [5, 3, 1]) */


// !8 Printing Array elements with Comma delimiters

/* function printArray(array) {
    let res = array.join(', ');
    console.log(res);
}

printArray(["h", "o", "l", "a"]); */


// !8 Enumerable Magic #1 - True for All?

/* function all(arr, func) {
    return arr.every(func);
}

function lessThan9(x) {
    return x < 9;
}

console.log(all([1, 2, 3, 4, 5], lessThan9)); */


// !8 Convert number to reversed array of digits

/* function digit(n) {
    let str = String(n);           // Преобразуем число в строку
    let res = str.split('');        // Разбиваем строку на массив символов
    let rev = res.reverse().map(Number); // Разворачиваем массив и преобразуем каждый элемент в число
    console.log(rev);               // Выводим результат
}

function digitize(n) {
    console.log(String(n).split('').reverse().map(Number));
}

digitize(35231);*/


// !8 Return the day

/* function whatday(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Wrong, please enter a number between 1 and 7";
  }
}

console.log(whatday(7)); */


// !8 Unfinished Loop - Bug Fixing #1

/* function createArray(number) {
  const newArray = [];
  for (let counter = 1; counter <= number; counter++) {
      newArray.push(counter);
  }
  return newArray;
}

console.log(createArray(3)); */


// !8 Polish alphabet

/* function replacePolishLetters(input) {
  // Создаем объект для сопоставления польских букв с их заменами
  const polishLetters = {
      'ą': 'a',
      'ć': 'c',
      'ę': 'e',
      'ł': 'l',
      'ń': 'n',
      'ó': 'o',
      'ś': 's',
      'ź': 'z',
      'ż': 'z'
  };

  // Заменяем каждую польскую букву в строке
  return input
      .split('') // Разбиваем строку на массив символов
      .map(char => polishLetters[char] || char) // Заменяем символ, если он есть в объекте
      .join(''); // Собираем массив обратно в строку
}

console.log(replacePolishLetters("ściana")); */


// !8 Failed Sort - Bug Fixing #4

/* var sortArray = function(value) {
  return value.split('').sort((z, x) => Number(z) - Number(x)).join('');
}

console.log(sortArray('214365879')); */


// !8 Switch/Case - Bug Fixing #6

/* function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case '+': result = value.a + value.b; break;
    case '-': result = value.a - value.b; break;
    case '/': result = value.a / value.b; break;
    case '*': result = value.a * value.b; break;
    case '%': result = value.a % value.b; break;
    case '^': result = Math.pow(value.a, value.b); break;
  }
  return result;
}

console.log(evalObject({ a: 1, b: 3, operation: '+' })); */


// !8 String Templates - Bug Fixing #5

/* function buildString(...template){
  return `I like ${template.join(',')}!`;
}

console.log(buildString('JS')); */


// !8 Multiplication table for number

/* function multiTable(number) {
  let results = [];
  for (let index = 1; index <= 10; index++) {
    results.push(`${index} * ${number} = ${index * number}`);
  }
  return results.join('\n');
}

console.log(multiTable(2)); */


// !8 No zeros for heroes

/* function noBoringZeros(n) {
  let numStr = n.toString();

  let i = numStr.length - 1;
  while (i > 0 && numStr[i] === '0') {
    i--;
  }

  if (numStr === '0') {
    return 0;
  }

  const resultStr = numStr.slice(0, i + 1);

  return parseFloat(resultStr);
}

console.log(noBoringZeros(1450));
console.log(noBoringZeros(960000)); */


// !8 Tip Calculator

/* function calculateTip(totalBill, rating) {
  const tipPercentages = {
      "terrible": 0,
      "poor": 5,
      "good": 10,
      "great": 15,
      "excellent": 20
  };

  const normalizedRating = rating.toLowerCase();

  if (!(normalizedRating in tipPercentages)) {
      return "Rating not recognised";
  }

  const tipPercentage = tipPercentages[normalizedRating];
  const tipAmount = (totalBill * tipPercentage) / 100;

  const roundedTip = Math.ceil(tipAmount);

  return roundedTip;
}

console.log(calculateTip(100, "Great")); // Output: 15
console.log(calculateTip(150, "POOR"));  // Output: 8
console.log(calculateTip(200, "Excellent")); // Output: 40
console.log(calculateTip(50, "Average")); // Output: "Rating not recognised" */


// !8 Sum of Multiples

/* function sumMul(n, m) {
  if (n <= 0 || m <= 0 || !Number.isInteger(n) || !Number.isInteger(m)) {
    return "INVALID";
  }

  let sum = 0;

  for (let i = n; i < m; i += n) {
    sum += i;
  }

  return sum;
}

console.log(sumMul(2, 9));   // Output: 20 (2 + 4 + 6 + 8)
console.log(sumMul(3, 13));  // Output: 30 (3 + 6 + 9 + 12)
console.log(sumMul(4, 123)); // Output: 1860
console.log(sumMul(4, -7));  // Output: "INVALID"
console.log(sumMul(0, 10));  // Output: "INVALID"
console.log(sumMul(5, 5));   // Output: 0 (нет чисел, кратных 5 и меньше 5) */


// !8 Training JS #10: loop statement --for

/* function pickIt(arr) {
  let odd = [];
  let even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { // Проверяем, является ли число чётным
      even.push(arr[i]); // Если да, добавляем его в массив even
    } else { // В противном случае число нечётное
      odd.push(arr[i]); // Добавляем его в массив odd
    }
  }

  return { odd: odd, even: even };
}

console.log(pickIt([1, 2, 3, 4, 5, 6]));

console.log(pickIt([10, 23, 35, 44, 55])) */


/* const nameShuffler = (str) => {
    return str.split(" ").reverse().join(" ");
}
console.log(nameShuffler('nikita E')); */


/* function contamination(text, char) {
    return text.replace(/ /g, char)
}
console.log(contamination('nikita', '')); */


/* function formatMoney(amount){
    return `$${amount.toFixed(2)}`;
}
console.log(formatMoney(3.)); */

/* function billboard(name, price = 30) {
    return name.length * price;
}
console.log(billboard('niki'));

// ! рекурсия
function billboard(name, price = 30) {
    if (name.length === 0) return 0;
    return price + billboard(name.slice(1), price);
}
 */

/* function repeatString(n, s) {
    if (n === 0) {
      return "";
    }
    return s + repeatString(n - 1, s);
  }
  console.log(repeatString(2,'niki')); */

/* String.prototype.isUpperCase = function () {
        return this.valueOf() === this.toUpperCase();
};
console.log(String.prototype.isUpperCase('niki'));
 */

/* function stringClean(s) {
    return s.replace(/\d/g, ''); // delet numbers
}
console.log(stringClean('n1k1'));
 */

/* function uefaEuro2016(teams, scores) {
    if (scores[0] > scores[1]) {
        return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    }
    else if (scores[0] < scores[1]) {
        return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    }
    else {
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }
}
console.log(uefaEuro2016(['Germany', 'Ukraine'], [1,2])); */

/* function isVow(a) {
    const vowelCodes = {
        97: 'a',
        101: 'e',
        105: 'i',
        111: 'o',
        117: 'u'
    };

    return a.map(num => vowelCodes[num] || num);
}
console.log(isVow([1,2,97,101])); */


/* function check(a, x) {
    return a.includes(x);
  }
console.log(check([1,2,3], 1)); */

/* function reverseWords(str) {
    const words = str.split(' ');
    const reversedWords = words.reverse();
    return reversedWords.join(' ');
}
console.log(reverseWords('niki e')); */

/* function stringy(size) {
    let result = ''; // Создаем пустую строку для результата
    for (let i = 0; i < size; i++) { // Проходим по каждому индексу от 0 до size - 1
        if (i % 2 === 0) { // Если индекс четный
            result = result + '1'; // Добавляем '1' к результату
        } else { // Если индекс нечетный
            result = result + '0'; // Добавляем '0' к результату
        }
    }
    return result; // Возвращаем собранную строку
}
console.log(stringy(2)); */

/* function well(x) {
    const words = x.filter(w => w === 'good')
    if (words.length === 1 || words.length === 2) {
        return 'Publish!';
    }
    else if (words.length > 2) {
        return 'I smell a series!'
    }
    else {
        return 'Fail!'
    }
}
console.log(well(['good', 'good', 'good', 'bad'])); */

/* function well(x) {
    let goodCount = 0;

    x.flat().forEach(idea => {
        if (typeof idea === 'string' && idea.toLowerCase() === 'good') {
            goodCount++;
        }
    });
    if (goodCount === 0) {
        return 'Fail!';
    } else if (goodCount <= 2) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}
console.log(well([['good', 'bad', 'BAD'], ['bad', 'bad', 'GOOD'], ['bad']]));
console.log(well([['GOOD', 'bad'], ['gOOd', 'bad'], ['good', 'bad']]));
console.log(well([['bad', 'BAD'], ['bad']]));  */

/* function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalizeWord('niki')); */

/* function sayHello(name, city, state) {
    const fullName = name.join(' ')
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}
console.log(sayHello(['Nikita', 'Eremin'], 'Saratov', 'Russia')); */

/* function solution(a, b) {
    if (a.length > b.length) {
        return b+a+b;
    }
    else if (a.length < b.length) {
        return a+b+a;
    }
};
console.log(solution('00', '1')); */