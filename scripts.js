document.addEventListener("DOMContentLoaded", function () {
    
    // dividers
    let firstNumber = document.getElementById("firstNumber").textContent;
    let secondNumber = document.getElementById("secondNumber").textContent;
    // answer
    let answer = firstNumber / secondNumber;
    // input answer field
    let response = document.getElementById("response");
    response.value = answer;
    // submit button
    let btn = document.getElementsByTagName('button')[0];
   
    btn.addEventListener("click", function() {
        console.log("this worked yay!");
    });
    
    console.log("firstNumber: " + firstNumber);
    console.log("secondNumber: " + secondNumber);
    console.log("answer: " + answer);
    console.log("response.value: " + response.value);

});