const readlineSync = require('readline-sync'); // зчитування інформації, яку ввів користувач

let random1 = `${Math.floor(Math.random() * 10)}`; // Math.floor - округлення, Math.random - число в діапазоні від 0 до 1
let random2 = `${Math.floor(Math.random() * 10)}`;
let random3 = `${Math.floor(Math.random() * 10)}`;
let random4 = `${Math.floor(Math.random() * 10)}`; 

while (random2 == random1) {
    random2 = `${Math.floor(Math.random() * 10)}`;
}
while (random3 == random2 || random3 == random1) {
    random3 = `${Math.floor(Math.random() * 10)}`;
}
while (random4 == random3 || random4 == random2 || random4 == random1) {
    random4 = `${Math.floor(Math.random() * 10)}`;
}

let prescribedNumber = random1 + random2 + random3 + random4; // Загадане число (строка)
// console.log(prescribedNumber);

let attemptToGuess = readlineSync.question('\nYou should guess the 4-digit number:\nAttempt: ');

let attemptCounter = 1;

while (attemptToGuess != prescribedNumber) {
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < attemptToGuess.length; i++) {
        if (attemptToGuess[i] == prescribedNumber[i]) {
            bulls++;
        } else {
            for (let j = 0; j < prescribedNumber.length; j++) { // Перебір серед всіх цифр загаданого числа
                if (attemptToGuess[i] == prescribedNumber[j]) {
                    cows++;
                }
            }
        }
    }

    console.log(`bulls: ${bulls}, cows: ${cows}`);
    attemptToGuess = readlineSync.question('Attempt: ');
    
    attemptCounter++;
}

if (attemptCounter == 1) {
    console.log('You guessed the number! You made 1 attempt.');
    process.exit();
} 

console.log(`You guessed the number! You made ${attemptCounter} attempts.`);