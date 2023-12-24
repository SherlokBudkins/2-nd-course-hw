
let password = 2000;
let password1 = prompt('Введите пароль');
if (password == password1) {
	alert("Пароль введен верно");
	
} else {
	alert("Пароль введен неправильно");
}

let c = 2;
if (0 < c && c < 10) {
	alert('Верно');
} else {
	alert('Неверно');
};


let d = 101;
let e = 11;
if (d > 100 || e > 100) {
	alert('Верно');
} else {
	alert('Неверно');
}

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

let monthNumber = String(prompt('Введите месяц'));
switch(monthNumber) {
	case '1':
	case '2':
	case '12':		
		console.log('Зима');
		break;
	case '3':
	case '4':
	case '5':		
		console.log('Весна');
		break;
	case '6':
	case '7':
	case '8':	
		console.log('Лето');
		break;
	case '9':
	case '10':
	case '11':		
		console.log('Осень');
		break;
	default:
		console.log('Такого месяца нет');
		break;	
}






