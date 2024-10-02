// Code your solutions in this file
const messages = [];
//function that accepts two arguments an array of string names, and an event name
function writeCards(array, name) {
    for(let i = 0;i < array.length;i++) { 
        const message = (`Thank you, ${array[i]}, for the wonderful ${name} gift!`)    
        messages.push(message);
    }
    return messages;
}
//function that takes in any positive integer and counts down to zero
function countDown(anyInt) {
    while(anyInt >= 0) {
        console.log(anyInt--);
    }
}
countDown(10);