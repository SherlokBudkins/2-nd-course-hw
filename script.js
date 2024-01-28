//Задание 1
let str = 'js';
console.log(new String(str).toUpperCase());

//Задание 2
function stringFilter(arr, str1) {
    return arr.filter(item => item.toLowerCase().startsWith(str1.toLowerCase()));
}

console.log(stringFilter(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
console.log(stringFilter(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
console.log(stringFilter(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []


//Задание 3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//Задание 4
const nums = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...nums));
console.log(Math.max(...nums));

//Задание 5
function getRandomInt(minValue, maxValue) {
    let randomNumbs = Math.round(Math.random() * 10);

    console.log(randomNumbs);
}

getRandomInt();
getRandomInt();
getRandomInt();


//Задание 6
function getRandomArrNumbers(num) {
    const result = [];
    for (let i = 0; i < Math.floor(num / 2); i++) {
        result.push(Math.round(Math.random() * num))
    }
    return result
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//Задание 7
function getRandomNum(min, max) {
    let randomNumber = Math.round(Math.random() * (max - min) + min);
    console.log(randomNumber);
}

getRandomNum(3, 5);

//Задание 8
console.log(new Date());

//Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10
function formatedDateAndTime(inputDate) {
    const daysOfWeeks = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const dayOfTheWeek = daysOfWeeks[inputDate.getDay()];

    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    const month = months[inputDate.getMonth()];

    const year = inputDate.getFullYear();
    const day = inputDate.getDate();
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const seconds = inputDate.getSeconds();

    const formatedDate = `Дата: ${day} ${month} ${year} - это ${dayOfTheWeek}`;
    const formatedTime = `Время: ${hours}:${minutes}:${seconds}`;

    return `${formatedDate}\n${formatedTime}`;

}
console.log(formatedDateAndTime(new Date()));


//Задание 11 смотреть в SideScript.js