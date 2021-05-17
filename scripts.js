document.addEventListener("DOMContentLoaded", function () {

    // dividers
    let firstNumber = document.getElementById("firstNumber").textContent;
    let secondNumber = document.getElementById("secondNumber").textContent;
    // answer
    let answer = firstNumber / secondNumber;
    // input answer field
    let response = document.getElementById("response");
    response.value = answer;

   
    let $form = $('form');
    $form.submit(function(){
       $.post($(this).attr('action'), $(this).serialize(), function(){
            // submit button
            let btn = document.getElementsByTagName('button')[0];   
            btn.addEventListener("click", function () {
                document.getElementsByClassName("challenge-search")[0].submit();
            });
       },'json');
       return false;
    });
     

    // // dividers
    // let firstNumber = document.getElementById("firstNumber").textContent;
    // let secondNumber = document.getElementById("secondNumber").textContent;
    // // answer
    // let answer = firstNumber / secondNumber;
    // // input answer field
    // let response = document.getElementById("response");
    // response.value = answer;
    // // submit button
    // let btn = document.getElementsByTagName('button')[0];

    // btn.addEventListener("click", function () {
    //     console.log("this worked yay!");
    //     document.getElementsByClassName("challenge-search")[0].submit();
    // });


});