import {EventEmitter} from "events"
const eventEmitter = new EventEmitter();

/*
Багатократна підписка на одну подію:
Створіть емітер подій.
Підпишіться на подію "click" кілька разів з різними обробниками, які будуть виводити різні повідомлення в консоль.
Запустіть подію "click" і переконайтеся, що всі обробники спрацювали.
*/
console.log('------------TASK 1 START------------')

const handler1 = () => {
    console.log("Handler 1: Click event triggered!");
}
const handler2 = () => {
    console.log("Handler 2: Click event triggered!");
}
const handler3 = () => {
    console.log("Handler 3: Click event triggered!");
}
eventEmitter.on('click', handler1);
eventEmitter.on('click', handler2);
eventEmitter.on('click', handler3);

eventEmitter.emit('click');

console.log('------------TASK 1 END------------')



/*
Видалення обробника подій:
Створіть емітер подій.
Підпишіться на подію "error" кілька разів.
Видаліть один з обробників.
Запустіть подію "error" і переконайтеся, що видалений обробник більше не спрацьовує.
*/
console.log('------------TASK 2 START------------')


const errorHandler1 = () => {
    console.log("Error Handler 1: An error occurred!");
}
const errorHandler2 = () => {
    console.log("Error Handler 2: An error occurred!");
}
const errorHandler3 = () => {
    console.log("Error Handler 3: An error occurred!");
}

eventEmitter.on('error', errorHandler1);
eventEmitter.on('error', errorHandler2);
eventEmitter.on('error', errorHandler3);
eventEmitter.emit('error');

console.log('------------------TASK 2 SEPARATOR-----------------------')

eventEmitter.off('error', errorHandler2);
eventEmitter.emit('error');


console.log('------------TASK 2 END------------')


/*
Створіть клас Dice, який буде емітувати подію rolled зі значенням від 1 до 6 при кожному кидку.
Додайте можливість підписатися на подію rolled і отримувати результат кидка.
Реалізуйте функцію roll, яка буде симулювати кидок кості і емітувати відповідну подію.
*/
console.log('------------TASK 3 START------------')
class Dice extends EventEmitter {
    roll() {
        const result = Math.floor(Math.random() * 6) + 1;
        this.emit('rolled', result);
    }
}

const dice = new Dice();
dice.on('rolled', (result) => {
    console.log(`Roll of the dice: it landed on ${result}`);
});

dice.roll();
dice.roll();
dice.roll();

console.log('------------TASK 3 END------------')


/*
Симуляція системи логування:
Створіть клас Logger, який буде емітувати події для різних типів логів (інформаційні, попередження, помилки).
Додайте можливість підписатися на конкретні типи логів.
Реалізуйте функції для запису різних типів логів.
*/
console.log('------------TASK 4 START------------')
class Logger extends EventEmitter {
    info(message) {
        this.emit('info', message);
    }

    warn(message) {
        this.emit('warn', message);
    }

    error(message) {
        this.emit('error', message);
    }
}

const logger = new Logger();
logger.on('info', (message) => {
    console.log(`INFO: ${message}`);
});
logger.on('warn', (message) => {
    console.log(`WARNING: ${message}`);
});
logger.on('error', (message) => {
    console.log(`ERROR: ${message}`);
});

logger.info('This is an informational message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');


console.log('------------TASK 4 END------------')

