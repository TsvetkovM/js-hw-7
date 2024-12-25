// 1==================================
const firstArray = [12, 31, 81];
firstArray[1] = 10;
console.log(firstArray);
// 2==================================
const secondArray = ["First string", "Hello world!", "Goodbye world!"];
secondArray.push("Hello world again");
// добавив за допомогою push після уроку 10.12
console.log(secondArray);
// 4==================================
console.log('початок 4 завдання');
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log('кінець 4 завдання');
// 5=============================
console.log(' ');
console.log('початок 5 завдання');
let arrayStrings = ["перший", "другий", "третій", "четвертий", "п'ятий"];
for (let ind = 0; ind < arrayStrings.length; ind++) {
    if (arrayStrings[ind].length > 5) {
        console.log(arrayStrings[ind]);
    }
}
console.log('кінець 5 завдання');
console.log(' ');
// 6=============================
console.log('початок 6 завдання');
let sixthArray = [12, 42, 17, 89, 74, 50, 71, 70, 24, 51];
let maxNumber = sixthArray[0];
for (let ind = 1; ind < sixthArray.length; ind++) {
    if (sixthArray[ind] > maxNumber) {
        maxNumber = sixthArray[ind];
    }
}
console.log(maxNumber);
console.log('Кінець 6 завдання')
// 7======================
console.log(' ');
console.log('початок 7 завдання');
let seventhArray = [11, 5, 67, 29, 28, 46, 79, 30, 34, 21];
for (let ind = 0; ind < seventhArray.length; ind++) {
    if (seventhArray[ind] % 2 === 0) {
        console.log(seventhArray[ind]);
    }
}
console.log('кінець 7 завдання');

