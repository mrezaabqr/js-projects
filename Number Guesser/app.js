// let min = 1,
// max = 10,
// winningNum = 2,
// guessesLeft = 3;


// // UI ELEMENT
// const game = document.querySelector('#game'),
// minNum = document.querySelector('.min-num'),
// maxNum = document.querySelector('.max-num'),
// guessBtn = document.querySelector('#guess-btn'),
// guessInput = document.querySelector('#guess-input'),
// message = document.querySelector('.message');

// // Assign UI min and max

// minNum.textContent = min;
// maxNum.textContent = max;


// // listen for guess

// guessBtn.addEventListener('click', function(e) {
//     let guess = Number(guessInput.value);
//     console.log(guess);
//     if(isNaN(guess) || guess < min || guess > max){
//         setMessage(`Please enter a number between ${min} and ${max}`, 'red');
//     }else{
//         setMessage('');
//     }


//     if(guess == winningNum){
//         // guessInput.disabled = true;
//         // guessInput.style.borderColor = 'green';
//         // setMessage(`${winningNum} is correct, YOU WIN :) !!`, 'green')
//         gameOver(true,`${winningNum} is correct, YOU WIN :) !!`)
//     }else{
//         guessesLeft -= 1;
//         if (guessesLeft ===0){
//             gameOver(false, `Game over, you lost.the correct number was ${winningNum} :(`);
//         }else{
//             guessInput.style.borderColor = 'red';

//             guessInput.value = '';

//             setMessage(`${guess} is not correct, ${guessesLeft} guesses left -_-`,'red')
//         }
//     }
// })

// function gameOver(won, msg) {

//     let color;
//     won === true ? color = 'green' : color = 'red';

//     guessInput.disabled = true;
//     guessInput.style.borderColor = color;
//     setMessage(msg)
// }

// function setMessage(msg, color='black') {
//     message.style.color = color;
//     message.textContent = msg;
// };


// Person constructor

function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
}

Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function(){
    return `${this.firstName}  ${this.lastName}`
}




















