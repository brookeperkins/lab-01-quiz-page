// import functions and grab DOM elements
import { translateToAYes } from './utils.js'

const button = document.getElementById('button');
console.log ()
const result = document.getElementById('result');
console.log()

// initialize state

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const name = prompt('What is your name?');
    console.log(name);
 
    const confirm = confirm('Are you really ready for this?')
    
}