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

});