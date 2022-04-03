/**********************************Функция возвращает массив с первым и последним элементоми */
// function getExtremeElements(array) {
// const lastElementIndex = array.length -1;
//     const newArray = [array[0], array[lastElementIndex]];
//     console.log(newArray);
//     return newArray;

// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["tesla","bmw", 'tyota', "honda"]);


/***********************************Напиши тело функции, чтобы она возвращала общую стоимость 
 * гравировки всех слов в строке. */
// function calculateEngravingPrice(message, pricePerWord) {
//     const wordCount = message.split(" ").length;
//   const totalSum = wordCount * pricePerWord;
//     console.log(totalSum);
//     return totalSum;
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20)


/***********************************Напиши функцию slugify(title) которая принимает заголовок статьи, 
 * параметр title, и возвращает slug, созданный из этой строки.
Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире */

// function slugify(title) {
//     const normalizedToLowerCase = title.toLowerCase();
//     const stringToSlug = normalizedToLowerCase.split(" ").join("-");
//     console.log(stringToSlug);
//     return stringToSlug;
// };

// slugify("Arrays for begginers");
// slugify("English for developer");


/*************************************Дополни код так, чтобы переменные содержали частичные копии 
 * исходного массива fruits.
firstTwoEls - массив из первых двух элементов
nonExtremeEls - массив из всех элементов кроме первого и последнего
lastThreeEls - массив из трёх последних элементов */

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];


// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length -1);
// const lastThreeEls = fruits.slice(2);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


/***************************************Напиши функцию makeArray(firstArray, secondArray, maxLength) для 
 * создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength 
 * содержит максимально допустимую длину нового массива.
Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной 
maxLength элементов. В противном случае функция должна вернуть новый массив целиком. */

// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = firstArray.concat(secondArray);

//     if (newArray.length > maxLength) {
//         const newShortArray = newArray.slice(0, maxLength);
//         return newShortArray;
//     }
//     return newArray;
// }
  
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)


/****************************************Напиши функцию calculateTotal(number), которая принимает целое
 *  число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, 
 * если number равно 3, то сумма это 1 + 2 + 3, то есть 6. */

// function calculateTotal(number) {
// let totalSum = 0;
// for (let i = 1; i <= number; i += 1) {
// totalSum  += i;
// }
//     console.log(totalSum);
//     return totalSum;
// };

// calculateTotal(7);


/*****************************************Напиши функцию calculateTotalPrice(order), которая принимает один 
 * параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна 
 * сохраняться в переменной total, которая возвращается, как результат работы функции. */

// function calculateTotalPrice(order) {
//   let total = 0;
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];

//     }
//     console.log(total);
//   return total;
// }
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([12, 85, 37, 4])


/*******************************************Напиши функцию findLongestWord(string) которая принимает 
 * произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое 
 * длинное слово в этой строке. */

// function findLongestWord(string) {
//     const arrayOfWords = string.split(' ');
//      let longestWord = arrayOfWords[0];
//     for (let i = 0; i < arrayOfWords.length; i += 1) {
//         if (arrayOfWords[i].length > longestWord.length) {
//            longestWord = arrayOfWords[i];
//         } else longestWord;
//     }
//     console.log(longestWord);
//     return longestWord;
// };

// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("I love my dog a lot");


/****************************************Дополни код функции createArrayOfNumbers(min, max) так, 
 * чтобы она возвращала массив всех целых чисел от значения min до max. */

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//       console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34)


/****************************************Напиши функцию filterArray(numbers, value), которая принимает 
 * массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива
 *  numbers, которые больше чем значение параметра value (число). */

// function filterArray(numbers, value) {
//     const newArray = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             newArray.push(numbers[i])
//         }
//     }
//     console.log(newArray);
//     return newArray;
// };

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


/**********************************************Напиши функцию getCommonElements(array1, array2) которая 
 * получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, 
 * состоящий из тех элементов, которые присутствуют в обоих исходных массивах. */

// function getCommonElements(array1, array2) {
//     const commonElements = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         if (array2.includes(array1[i])) {
//             commonElements.push(array1[i])
//         }
//     }
//     console.log(commonElements);
//     return commonElements;
// };

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])


/***********************************************Напиши функцию getEvenNumbers(start, end) которая возвращает 
 * массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка
 *  (10 % 2 === 0). */

// function getEvenNumbers(start, end) {
//     const evenNumbersArray = [];
//     for (let i = start; i <= end; i += 1) {
//         if ((i % 2 === 0)) {
//             evenNumbersArray.push(i);
//        }
//     }
//     console.log(evenNumbersArray);
//     return evenNumbersArray;
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);


/**********************************************Напиши функцию includes(array, value), которая делает тоже
 *  самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, 
 * возвращая true если есть и false в противном случае.
При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение). */

// function includes(array, value) {
// let isValue;
//     for (const item of array) {
//         if (item === value) {
//             isValue = true;
//             break;
//         } else isValue= false;
//     }
//     console.log(isValue);
//   return isValue;
// }

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");


/***************************************************Дополни код обновив значения 
 * свойств объекта apartment:
-цену в свойстве price на 5000;
-рейтинг квартиры в свойстве rating на 4.7;
-имя владельца во вложенном свойстве name на "Henry Sibola";
-массив тегов в свойстве tags добавив в конец строку "trusted". */

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");


/**********************************************Добавь объекту apartment несколько новых свойств:
-area - площадь в квадратных метрах, число 60;
-rooms - количество комнат, число 3;
-location - местоположение квартиры, обьект со следующими вложенными свойствами;
-country - страна, строка "Jamaica";
-city - город, строка "Kingston". */

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// };


/*******************************************Перебери объект apartment используя цикл for...in и запиши в 
 * массив keys все его ключи, а в массив values все значения его свойств. */

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for(const key in apartment) {
// keys.push(key);
// values.push(apartment[key]);
// }
// console.log(keys);


/****************************************Напиши функцию countProps(object), которая считает и возвращает 
 * количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения 
 * количества свойств объекта. */

// function countProps(object) {
//     let propCount = 0;
//     const arrayOfPropertys = [];
//     for (const property in object) {
//         if (object.hasOwnProperty(property)) {
//             arrayOfPropertys.push(property);
//             propCount = arrayOfPropertys.length;
//      }
//     }
//     console.log(propCount);
//   return propCount;
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });


/***********************************************Выполни рефакторинг функции countProps(object)
 *  используя метод Object.keys() и, возможно, но необязательно, цикл for...of. */

// function countProps(object) {
//     let propCount = 0;
//     const keys = Object.keys(object);
//     // console.log(keys.length);
//     for (const key of keys) {
//         propCount += 1;
//     }

// console.log(propCount);
//   return propCount;
 
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })


/**********************************************Напиши функцию countTotalSalary(salaries) которая
 *  принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. 
 * Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary 
 * для хранения общей суммы зарплаты. */

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//     const arrayOfValues = Object.values(salaries);
//     for (const value of arrayOfValues) {
//         totalSalary += value;
//     }
//    console.log(totalSalary);
//   return totalSalary;
// }
// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });


/*********************************************Перебери массив объектов colors используя цикл for...of.
 *  Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех 
 * объектов массива colors. */

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb)
// }
// console.log(hexColors);
// console.log(rgbColors);

/***************************************Напиши функцию getProductPrice(productName) которая принимает один 
 * параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в 
 * массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден,
 *  функция должна возвращать null. */

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   let nameValuesArray = [];
//   for (const product of products) {
//     nameValuesArray.push(product.name);
//     if (nameValuesArray.includes(productName) && product.name === productName) {
//       console.log(product.price);
//     }
//   }
//   console.log(null);
//   return null;
// }
// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine")


/*******************************************Напиши функцию getAllPropValues(propName) которая принимает
 *  один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с 
 * таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция 
 * должна вернуть пустой массив. */

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let valuesArray = [];
//   for (const product of products) {
//     const values = product[propName];
//     const propertys = Object.keys(product);

//     if (!propertys.includes(propName)) {
//        valuesArray;
//     } else  valuesArray.push(values);
//   }
//   console.log(valuesArray);
//   return valuesArray;
// };
// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");


/*******************************************Напиши функцию calculateTotalPrice(productName) которая 
 * принимает один параметр productName - название товара. Функция должна вернуть общую стоимость
 *  (цена * количество) товара с таким именем из массива products. */

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalSum = 0;
//   for (const product of products) {
//     if (product.name === productName)
//       totalSum = product.price * product.quantity;
//   }
//   console.log(totalSum);
//   return totalSum;
// };
// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");


/******************************************* Пришел трёхдневный прогноз максимальных температур и мы 
 * считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, 
 * today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.*/

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// const { yesterday, today, tomorrow } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;


/***************************************************Мы получили прогноз погоды на два дня,
 *  с минимальными и максимальными температурами, а также необязательными иконками. 
 * Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. 
 * Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - 
 * строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". */

//  const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//     today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//     tomorrow: {low: lowTomorrow, high: highTomorrow, icon:tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
// } = forecast;

// console.log(tomorrowIcon);

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;


/************************************************Напиши функцию makeTask(data) которая принимает один 
 * параметр data - объект со следующими свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.
Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. 
В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

В параметре data гарантированно будет только свойство text, а остальные два, category и priority, 
могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть 
значения по умолчанию, хранящиеся в одноимённых локальных переменных. */

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     let newTaskObj = {completed, category, priority, ...data};
//   // Change code above this line
//     console.log(newTaskObj);
//     return newTaskObj;
// }
// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });


/**************************************************Используя операцию rest дополни код функции add() так, 
 * чтобы она принимала любое количество аргументов, считала и возвращала их сумму. */

// function add(...args) {
//     let sum = 0;
//     for (const arg of args) {
//        sum += arg
//     }
//     console.log(sum);
//     return sum;
// }
// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);


/*************************************************Функция addOverNum() считает сумму всех аргументов. 
 * Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, 
 * которые больше чем заданное число. Это число должно быть первым параметром функции. */


// function addOverNum(number, ...args) {
//   let total = 0;

//     for (const arg of args) {
//         if (arg > number) {
//            total += arg;
//       }
//   }
//  console.log(total);
//     return total;
   
// };
// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);


/*********************************************Функция findMatches() принимает произвольное количество
 *  аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, 
начиная со второго, которые есть в массиве первого аргумента.

Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они 
есть в массиве первого аргумента. */


// function findMatches(arrayOfNumbers, ...restNumbers) {
//   const matches = [];
//     for (const number of restNumbers) {
//         if (arrayOfNumbers.includes(number)) {
//             matches.push(number)
//         }
//     }
//   console.log(matches);
//   return matches;
// };
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);


/************************************************ Дополни метод updateBook(oldName, newName) так,
 *  чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, 
 * чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент*/

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//       const bookToReplace = this.books.indexOf(oldName);
//       this.books.splice(bookToReplace, 1, newName)
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles");


/******************************************** Заказчица хочет чтобы каждое зелье было представлено не 
 * только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в 
 * свойстве potions будет храниться массив объектов со следующими свойствами.

{
  name: "Dragon breath",
  price: 700
}
Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, 
а с массивом объектов.

getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, 
но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на 
newName в массиве potions.*/


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
 
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const { name, price } = newPotion;
//     let arrayOfPotions = [];
//     for (const potion of this.potions) {
//       arrayOfPotions.push(potion.name);
//     };
//      if (arrayOfPotions.includes(name)) {
//       return `Error! Potion ${name} is already in your inventory!`;
//       }
//     this.potions.push(newPotion);
//     return `Potion ${name} added to array potions`
//   },

//   removePotion(potionName) {
//     let arrayOfPotions = [];
//     for (const potion of this.potions) {
//       arrayOfPotions.push(potion.name)
//     }
//     const potionIndex = arrayOfPotions.indexOf(potionName);
//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//     return `Potion ${potionName} removed from array potions`
//   },

//   updatePotionName(oldName, newName) {
//     const arrayOfPotions = [];
//     for (const potion of this.potions) {
//       arrayOfPotions.push(potion.name);
//     }
//     const potionIndex = arrayOfPotions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//     const potionObjToUpdate = this.potions[potionIndex];
//     potionObjToUpdate.name = newName;
//     this.potions.splice(potionIndex, 1, potionObjToUpdate);
//     return `Potion ${oldName} was updated to ${newName}`
//   },
 
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));

// console.log(atTheOldToad.potions);









