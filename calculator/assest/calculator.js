function suma() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var result = number1 + number2;

    document.getElementById("result").value = result;
}