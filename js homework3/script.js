// Let's bring some of the form elemnts from html file 

// This is FizzBuzz program using DOM

const elFizzBuzzForm = document.querySelector(".js-FizzBuzz-form");
const elFizzBuzzInput = elFizzBuzzForm.querySelector(".js-FizzBuzz-input");
const elFizzBuzzResult = document.querySelector(".js-FizzBuzz-result");

elFizzBuzzResult.textContent = "Result: "

elFizzBuzzForm.addEventListener("submit", function(evt) {

    evt.preventDefault();

    const inputVal = elFizzBuzzInput.value;

    if(inputVal % 3 == 0 && inputVal % 5 == 0) {
        elFizzBuzzResult.textContent = "FizzBuzz"
    } else if(inputVal % 5 == 0) {
        elFizzBuzzResult.textContent = "Fizz"
    } else if(inputVal % 3 == 0) {
        elFizzBuzzResult.textContent = "Buzz"
    } else {
        elFizzBuzzResult.textContent = "Siz kiritgan raqam 3ga ham 5ga ham bo'linmaydi"
    }

})

// This is the FizzBuzz program using PROMPT

// const enteredNumber = Number(prompt("Enter the number"));

//    if(enteredNumber % 3 == 0 && enteredNumber % 5 == 0) {
//         console.log("FizzBuzz");
//    } else if(enteredNumber % 5 == 0) {
//         console.log(("Fizz"));
//    } else if(enteredNumber % 3 == 0) {
//         console.log("Buzz");
//    } else {
//         console.log("Siz kiritgan raqam 3ga ham 5ga ham bo'linmaydi");
//    }



// This is the second task

var elUsername = document.querySelector(".js-username");
var elSurname = document.querySelector(".js-surname");
var elAge = document.querySelector(".js-age");
var elEmailAddress = document.querySelector(".js-emailAddress");
var elEntredDOLLOR = document.querySelector(".js-entryDollor");

var userName = prompt("Enter your name");
var familyName = prompt("Enter your surname");
var userAge = prompt("What is your age");
var userEmail = prompt("What is your email address");
var entryDOLLOR = prompt("How much dollor$ you have");

var ExchangeToSom = entryDOLLOR * 12400;

elUsername.textContent = `Your name is: ${userName}`;
elSurname.textContent = `Your surname is: ${familyName}`;
elAge.textContent = `Your age is: ${userAge}`;
elEmailAddress.textContent = `Your email address is: ${userEmail}`;
elEntredDOLLOR.textContent = `Your Dollor would be: ${ExchangeToSom} in som`;



