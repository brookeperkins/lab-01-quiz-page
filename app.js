import { translateToAYes } from './utils.js';
const quizButton = document.getElementById('button');
const scoreBox = document.getElementById('scorebox');

quizButton.addEventListener('click', () => {
    const name = prompt('What is your name?'); 
    if (!confirm('Are you really ready for this?')) return;

    let score = 0;
  
    const question1 = prompt('Is Nomi four years old?');
    const question2 = prompt('Is Leaf a black cat?');
    const question3 = prompt('Is Nomi a Leo?');
    const question4 = prompt('Is Leaf into tuna?');

    if (translateToAYes(question1)) score++;
    if (!translateToAYes(question2)) score++;
    if (translateToAYes(question3)) score++;
    if (translateToAYes(question4)) score++;
    alert('You made it through!');
    
    const correctGuesses = (score / 4) * 100;
    const percentCorrect = Math.round(correctGuesses);
    
    quizButton.style.display = 'none';
    scoreBox.style.display = 'block';
        
    if (score > 1) {
        scoreBox.textContent = 
        `Cat cuddles for life, ${name}! 
        You scored ${percentCorrect}%! 🎉`;
    } else {
        scoreBox.textContent = 
        `Okay ${name}, you scored ${percentCorrect}% 
        which is... I mean, it's fine. Whatever. 😿`;
    }
});

