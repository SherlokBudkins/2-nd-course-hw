let i = 0;
while (i < 2){
alert ('Привет');
i++;
}

let n = 1;
while (n < 6){
	console.log (n);
	n++;
}

for(let k = 7; k < 23; k++){
	console.log (k);
}


let obj= {
'Коля': '200',
'Вася': '300',
'Петя': '400',
};
for (let key in obj){
	alert(`${key} — зарплата ${obj[key]} долларов`);
}


let number = 1000;
let counter = 0;
for (;number >= 50; number /= 2){
	counter++;
}
console.log(`Получилось число ${number}. Количество интераций равно ${counter} `);


for (let dayNumber = 1; dayNumber <= 31; dayNumber += 7){
		console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`)
}

