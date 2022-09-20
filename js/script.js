document.addEventListener('DOMContentLoaded', () => {
//minimum
//1 Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
    let a = 0.1;
    let b = 0.2;
    let result = (a+b).toFixed(1);
    alert(`Result: ${result}`);

//2 Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
    let c = '1';
    let d = 2;
    let result_2 = +(c[0])+d;
    alert(`Result: ${result_2}`);

//3 Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
    const onegb = 1000;
    const mb = 820;
    let gb = +prompt(`Введіть кількість гігабайт: `);
    let result_3 = gb*onegb/mb;
    alert(`На флешку поміщається ${Math.round(result_3)} файлів розміром 820мб`);

//normal
//1 Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
    let money = +prompt('Введіть кількість грошей: ');
    let chocolate = +prompt('Введіть ціну шоколадки: ');
    let result_4 = Math.floor(money/chocolate);
    let change = Math.round(money/(chocolate*result_4));
    alert(`Ви можете придбати ${result_4} шоколадок, Ваша решта ${change}`);

//2 Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
    let number = prompt('Введіть тризначне число: ');
    let reverse_number = number[2] + number[1] + number[0];
    alert(`${reverse_number}`);
    //доробити

//maximum
//1 Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків. 
    const percent = 5;
    const time = 2;
    const year = 12;
    let deposit = +prompt('Введіть суму вкладу: ');
    let profit = (((percent/year)*time)/100)*deposit;
    alert(`Сума по нарахованим відсоткам: ${profit.toFixed(2)}`);

//2 Що повернуть вирази:
    let auto_1 = 2 && 0 && 3;
    alert(auto_1);

    let auto_2 = 2 || 0 || 3;
    alert(auto_2);

    let auto_3 = 2 && 0 || 3;
    alert(auto_3);
});