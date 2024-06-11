const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const button10 = document.getElementById("0");
const button11 = document.getElementById("+");
const button12 = document.getElementById("-");
const button13 = document.getElementById("*");
const button14 = document.getElementById("/");
const button15 = document.getElementById(".");
const button16 = document.getElementById("=");
const button17 = document.getElementById("C");
const button18 = document.getElementById("(");
const button19 = document.getElementById(")");
const button20 = document.getElementById("x^2");

button1.addEventListener("click", handleButtonClick);
button2.addEventListener("click", handleButtonClick);
button3.addEventListener("click", handleButtonClick);
button4.addEventListener("click", handleButtonClick);
button5.addEventListener("click", handleButtonClick);
button6.addEventListener("click", handleButtonClick);
button7.addEventListener("click", handleButtonClick);
button8.addEventListener("click", handleButtonClick);
button9.addEventListener("click", handleButtonClick);
button10.addEventListener("click", handleButtonClick);
button11.addEventListener("click", handleButtonClick);
button12.addEventListener("click", handleButtonClick);
button13.addEventListener("click", handleButtonClick);
button14.addEventListener("click", handleButtonClick);
button15.addEventListener("click", handleButtonClick);
button16.addEventListener("click", handleButtonClick);
button17.addEventListener("click", handleButtonClick);
button18.addEventListener("click", handleButtonClick);
button19.addEventListener("click", handleButtonClick);
button20.addEventListener("click", handleButtonClick);

function handleButtonClick(event) {
    const clickedButton = event.target;
    console.log("Button clicked: ", clickedButton.id);
    var display_area = document.getElementById("display_area");

    if (clickedButton.id === "=") {
        calculate();
        display_area.value = result;
    } else if (clickedButton.id === "C") {
        display_area.value = "";
    } else if (clickedButton.id === "x^2") {
        display_area.value = display_area.value * display_area.value;
    } else {
        const operators = ["+", "-", "*", "/"];
        const lastChar = display_area.value.slice(-1);
        if (operators.includes(clickedButton.id)) {
            if (operators.includes(lastChar)) {
                display_area.value = display_area.value.slice(0, -1) + clickedButton.id;
            } else {
                display_area.value += clickedButton.id;
            }
        } else {
            display_area.value += clickedButton.id;
            console.log(display_area.value);
        }
    }
}
function calculate() {
    var display_area = document.getElementById("display_area");
    result = eval(display_area.value);
    if (result === undefined) {
        result = "";
    }
    console.log(result);
    display_area.value = result;
}