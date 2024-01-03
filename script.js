//Задание 1
function comparison(a, b) {
	if (a <= b) {
		return a;
	} else {
		return b;
	}
}

console.log(comparison(8, 4));
console.log(comparison(6, 6));


//задание 2
function num(a) {
	if (a % 2 == 0) {
        return `Число четное`;
    } else {
        return `Число нечетное`;
    }	
}

console.log(num(6));
console.log(num(5));



//Задание 3
function square(a) {
    a**2;
}

console.log (square(5));

function square(a) {
    return a**2;
}

console.log (square(5));


//задание 4
let age = prompt("Сколько Вам лет?");

if (age <= 12) {
    function printMessage () {
        console.log("Привет, друг");
    }
} else {
    function printMessage () {
        console.log("Добро пожаловать!");
    }
}
if (age < 0) {

    function printMessage () {
        console.log("Вы ввели неправильное значение!");
}
}

printMessage();


//Задание 5
function check(a , b) {
    if (isNaN(a) || isNaN(b)) {
        return(`Одно или оба значения не являются числом`);
    } else {
        return a * b;
    }
}
console.log(check(8 , 5));
console.log(check(8 , `k`));




//Задание 6
function num1() {
    let userNum = prompt('Введи число');
    let squared = userNum ** 3;
    isNaN(userNum) ? console.log('Переданный параметр не является числом') : console.log(`${userNum} в кубе равняется ${squared}`);
}
num1();



// Задание 7
function getArea() {
    return 3.14 * (this.radius ** 2);
}

function getPerimeter() {
    return 2 * 3.14 * this.radius;
}

const circle1 = {
    radius: 5,

    getArea: getArea,
    getPerimeter: getPerimeter,
};

const circle2 = {
    radius: 4,

    getArea: getArea,
    getPerimeter: getPerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

