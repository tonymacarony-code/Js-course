let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null)  {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();


var appData = {
  budget: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце?', ''),
            b = prompt('Во сколько обойдется?', '');
        if ( typeof(a)==='string' && (typeof(a) != null) && (typeof(b) != null) && a != '' && b != '' && a.length < 50 ) {
            appData.expenses[a] = b;    
        } else {
    
        }
        
    }
}
chooseExpenses();


appData.moneyPerDay = (appData.budget/30).toFixed(1);
alert('ежедневный бюджет: ' + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
// console.log('Минимальній уровень достатка');
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
//     console.log('Средний уровень достатка');
// } else if (appData.moneyPerDay > 2000) {
//     console.log('Высокий уровень достатка');
// } else {
//     console.log('Шото не то');
// }


function calc(a,b) {
    return (a + b);
}
console.log(calc(3,4));

function retWar() {
    let num = 50;
    return num

}