//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort((a, b) => a.age - b.age));

 //задание 2
 function isPositive(number) { 
    if (number > 0) { 
    return number;
    } 
} 
 function isMale(name, gender) { 
    if (person.gender === 'male') {
     return name + gender; 
    } 
} 
 function filter(array, ruleFunction) { 
    let newArray = []; 
    for (let i = 0; i < array.length; i++) { 
        if (ruleFunction(array[i])) {
            newArray.push(array[i]);
    }
}
    return newArray;
} 
    console.log(filter([3, -4, 1, 9], isPositive));
    const people1 = [
    {name: 'глеб', gender: 'male'},
    {name: 'анна', gender: 'female'},
    {name: 'олег', gender: 'male'},
    {name: 'оксана', gender: 'female'}
    ];

    console.log(filter(people1, isMale));

//Задание 3
let currentDay = new Date();
const timer = (currentDay) => {
    const timeId = setInterval(() => {
        console.log(currentDay);
    }, 1000);

    setTimeout(() => {
        clearInterval(timeId)
        console.log("30 секунд прошло")
    }, 30000);
}
timer(currentDay);

//Задание 4
function delayForSecond(callback) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
    }, 1000);
  callback();
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) { cb(); }
    }, 1000)
}
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'));



