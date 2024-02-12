//Задание 8
function numMonth() {
    let userNum = Number(prompt('Введит число, а я скажу к какому времени года он относится'));
    (userNum === 3) || (userNum === 4) || (userNum === 5) ? alert('Весна') :
    (userNum === 6) || (userNum === 7) || (userNum === 8) ? alert('Лето') :
    (userNum === 9) || (userNum === 10) || (userNum === 11) ? alert('Осень') :
    (userNum === 12) || (userNum === 1) || (userNum === 2) ? alert('Зима') :
    alert('Некорректное число')
}


// Задание 11
function rememberWords() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let fruit = fruits.sort(() => Math.random() - 0.5);
    alert(fruit.join(' '));

    let oneQuestion = prompt('Чему равнялся первый элемент массива?');

    if (oneQuestion === null) {
        alert ('Вы отменили ввод');
    return;
    }

    let twoQuestion = prompt('Чему равнялся последний элемент массива?');

    if (twoQuestion === null) {
        alert ('Вы отменили ввод');
        return;
    }

    if (!oneQuestion.trim() || !twoQuestion.trim()) {
        alert ('Строка пустая или состоит только из пробелов');
        return;
    }

    if (oneQuestion === fruits[0] && twoQuestion === fruits[fruits.length - 1]) {
        alert("Поздравляем! Вы угадали оба слова.");
    } else if (oneQuestion === fruits[0] || twoQuestion ===fruits[fruits.length - 1]) {
        alert("Вы были близки к победе!");
    }else{
        alert("Вы не угадали ни одного слова.");
    }
}