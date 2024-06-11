const buttonIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", ".", "=", "C", "(", ")", "x^2"];

buttonIds.forEach(id => {
    const button = document.getElementById(id);
    button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
    const clickedButton = event.target;
    console.log("Button clicked: ", clickedButton.id);
    const display_area = document.getElementById("display_area");

    switch (clickedButton.id) {
        case "=":
            calculate();
            display_area.value = result;
            break;
        case "C":
            display_area.value = "";
            break;
        case "x^2":
            display_area.value = display_area.value * display_area.value;
            break;
        default:
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
    const display_area = document.getElementById("display_area");
    try {
        result = eval(display_area.value);
        if (result === undefined) {
            result = "";
        }
    } catch {
        result = "Error";
    }
    console.log(result);
    display_area.value = result;
}
