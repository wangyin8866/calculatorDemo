/**
 * Created by wy on 2016/12/12.
 */

var displayVale;//文本框对象
var previous;
var next;
var flag ;
var currentValue;
function init() {
    displayVale = document.getElementById("textValue");

}
function btn(event) {
    switch (event.value) {
        case "POWER":

            break;
        case "Clear":
             displayVale.value = "";
            break;
        case "Back":
           var value= displayVale.value;
            displayVale.value = value.substr(0, value.length - 1);
            break;
        case "1":
            displayVale.value += 1;

            break;
        case "2":
           displayVale.value += 2;
            break;
        case "3":
            displayVale.value += 3;
            break;
        case "4":
             displayVale.value += 4;
            break;
        case "5":
           displayVale.value += 5;
            break;
        case "6":
             displayVale.value += 6;
            break;
        case "7":
           displayVale.value += 7;
            break;
        case "8":
            displayVale.value += 8;
            break;
        case "9":
             displayVale.value += 9;
            break;
        case "0":
             displayVale.value += 0;
            break;
        case ".":
            break;
        case "=":
            next=displayVale.value;
            switch (flag) {
                case "+":
                    currentValue = parseInt(previous) + parseInt(next);
                    displayVale.value = currentValue;
                    break;
                case "-":
                    currentValue = parseInt(previous) - parseInt(next);
                    displayVale.value = currentValue;
                    break;
                case "*":
                    currentValue = parseInt(previous) * parseInt(next);
                    displayVale.value = currentValue;
                    break;
                case "/":
                    currentValue = parseInt(previous) / parseInt(next);
                    displayVale.value = currentValue;
                    break;
            }
            break;
        case "+":
            flag = "+";
            previous = displayVale.value;
            displayVale.value = "";
            break;
        case "-":
            flag = "-";
            previous = displayVale.value;
            displayVale.value = "";
            break;
        case "*":
            flag = "*";
            previous = displayVale.value;
            displayVale.value = "";
            break;
        case "/":
            flag = "/";
            previous = displayVale.value;
            displayVale.value = "";
            break;


    }
}




