document.addEventListener("DOMContentLoaded", function () {

    // dividers
    let firstNumber = document.getElementById("firstNumber").textContent;
    let secondNumber = document.getElementById("secondNumber").textContent;
    // answer
    let answer = firstNumber / secondNumber;
    // input answer field
    let response = document.getElementById("response");
    response.value = answer;
    // error message
    let errorMessage = document.getElementsByClassName('challenge-error')[0];
    // submit btn
    let btn = document.getElementsByTagName("button")[0];
    
    btn.addEventListener("click", function () {
        if (response.value === answer) {
            errorMessage.style.display = "block";
        }
    })

});