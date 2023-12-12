function add() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("ans").innerHTML = "Addition is: " + (num1 + num2)
        alert("Answer is: " + (num1 + num2))
    }
}
function mul(num1, num2) {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("ans").innerHTML = "Multiplication is: " + (num1 * num2)
        alert("Answer is: " + (num1 * num2))
    }
}
function sub(num1, num2) {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("ans").innerHTML = "Subtraction is: " + (num1 - num2)
        alert("Answer is: " + (num1 - num2))
    }
}
function div(num1, num2) {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("ans").innerHTML = "Division is: " + (num1 / num2)
        alert("Answer is: " + (num1 / num2))
    }
}