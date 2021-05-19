document.addEventListener("DOMContentLoaded", function () {
    let firstNumber = document.getElementById("firstNumber").textContent;
    let secondNumber = document.getElementById("secondNumber").textContent;
    let answer = firstNumber / secondNumber;

    function inputAnswer() {
        let response = document.getElementById("response");
        response.value = answer;
    }
    inputAnswer();

    function submitAnswer() {
        if (answer !== firstNumber / secondNumber) {
            let challengeError = document.getElementsByClassName("challenge-error")[0];
            challengeError.style.display = "block";
        }
    }
    submitAnswer();
});