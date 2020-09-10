let color = ["#2ecc71",'#f1c40f', "#9b59b6", "#e67e22"];
let count = 0;
document.querySelector('#clear').addEventListener('click', function () {
    count=count%color.length;
    // let my_color= document.querySelector('#my_color').value;
    // alert(my_color)
    // document.querySelector('#col-code').textContent=my_color;
    document.documentElement.style.setProperty('--main-color', color[count ++]);

})



$(document).ready(function () {

    let firstNumber;
    let secondNumber;
    let operator;
    let step1;
    let step2;


    $('.number').click(function () {



        let result = $('#result').text();
        let currentNumber = $(this).text();


        let digit1 = Number(result + currentNumber);
        $('#result').text(digit1);

    })


    $('.operator').click(function () {

        // Store the first number
        firstNumber = Number($('#result').text());

        // fetch the operator
        operator = $(this).text();

        // history
        step1 = firstNumber;
        if (firstNumber === 0) {
            step1 = "";
        }

        String($('#history').text(step1 + operator));


        // Set the screen to equal to 0
        $('#result').text(0);


    })


    $('#clear').click(function () {
        $('#result').text(0);
        firstNumber = 0;
        $("#history").text("")

    })


    $('#equals').click(function () {
        secondNumber = Number($('#result').text());
        // let s = String(secondNumber)
        // alert(typeof(s), typeof(step1))
        // $('#history').text(step1 + s)
        step2 = secondNumber;
        if (step2 === 0) {
            step2 = "";
        }
        $('#history').text(step1 + operator + step2);



        if (operator === '+') {
            $('#result').text(firstNumber + secondNumber);
        }

        else if (operator === '-') {
            $('#result').text(firstNumber - secondNumber);
        }

        else if (operator === '*') {
            $('#result').text((firstNumber * secondNumber).toFixed(2));
        }

        else if (operator === '/') {
            $('#result').text((firstNumber / secondNumber).toFixed(2));
        }

        else if (operator === "Sin") {
            $('#result').text(Math.sin(secondNumber * Math.PI / 180).toFixed(2));
        }

        else if (operator === "Cos") {
            $('#result').text(Math.cos(secondNumber * Math.PI / 180).toFixed(2));
        }

        else if (operator === "Tan") {

            if (secondNumber != 90) {
                $('#result').text(Math.tan(secondNumber * Math.PI / 180).toFixed(2));
            }

            else {
                $('#result').text("Not Defined").css("font-size", "80px");
            }

        }

        else if (operator === 'ln') {
            $('#result').text(Math.log(secondNumber).toFixed(2));
        }

        else if (operator === '^') {
            $('#result').text(Math.pow(firstNumber, secondNumber).toFixed(2));
        }

        else if (operator === 'X²') {
            $('#result').text(Math.pow(firstNumber, 2).toFixed(2));
        }

        else if (operator === 'X³') {
            $('#result').text(Math.pow(firstNumber, 3).toFixed(2));
        }

        else if (operator === '%') {
            $('#result').text((firstNumber / 100).toFixed(2));
        }

    })



})
