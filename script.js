// Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 0) break;
	console.log(numbs[i]);
}


//Задание 2
const numbs2 = [1, 5, 4, 10, 0, 3];
console.log(numbs2.indexOf(4));

//Задание 3
const numbs3 = [1, 3, 5, 10, 20];
console.log(numbs3.join(' '));

//Задание 4
let arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];
console.log(arr);

//Задание 5
let arr2 = [1, 1, 1];
arr2.push(2, 2, 2);
console.log(arr2);

//Задание 6
let arr3 = [9, 8, 7, 'a', 6, 5];
arr3.sort();
arr3.pop(String);
console.log(arr3);

//Задание 7
let arr4 = [9, 8, 7, 6, 5];
if (arr4.includes(Number(prompt('Угадай число')))) {
    console.log('Угадал');
} else {
    console.log('Не угадал');
}

//Задание 8
let greetings = 'abcdef';
let arrayGreetings = greetings.split('');
arrayGreetings.reverse();
arrayGreetings = arrayGreetings.join('');
console.log(arrayGreetings);

//Задание 9
const arr5 = [
    [1, 2, 3],
    [4, 5, 6],
];
const flat = arr5.flat();
console.log(flat);

//Задание 10
const arr6 = [3, 4, 5, 6, 7];

for(let i = 0; i < arr6.length; i++) {
    console.log(arr6[i] + arr6[i + 1]);
}


//Задание 11
const mult = [2, 3, 4, 5, 6];
const tax = mult.map(el => el**2);
console.log(tax);


//Задание 12
function arrSum(num) {
    for (let i = 0; i < num.length; i++) {
    console.log(num[i].length);
} 
} 
arrSum(['слово', '', 'слог', 'длинное предложение', 'буква']); 

//Задание 13
function filterPositive(array) {
    const negative = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negative.push(array[i])
        }
    }
    return negative
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));