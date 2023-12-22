const z = '20';
alert(z);

const phone = '2007';
alert(phone);

const creator = 'Брендан Эйх';
alert(creator);

const x = Number ('10');
const y = Number ('2');
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

let result = Number (y**5);
alert(result);

const a = Number ('9');
const b = Number ('2');
let result2 = Number (a % b);
alert(result2);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

const age1 = prompt ('Сколько вам лет?');
alert(age1);

const user = {
	name: String ('Petr'),
	age: Number ('100'),
	isAdmin: Boolean ('true'), 
}
user['city of residence'] = "Moscow";
user.age = Number ('50');
delete user['city of residence'];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

let userName = prompt('Ваше имя');
alert(`Привет, ${userName}!`);





