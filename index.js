const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    try {
        //console.log(display.value);
        let temp = display.value;
        console.log(temp);
        if (temp.includes("!")) {
            let tempFact = temp.split("!");
            let ans = 1;
            for (let i = 1; i <= tempFact[0]; i++) {
                ans *= i;
            }

            display.value = ans;
            return;
        }
        else if (temp.includes("^")) {
            let tempExp = temp.split("^");
            let base = parseFloat(tempExp[0]);
            let exponent = parseInt(tempExp[1]);
            let ans = Math.pow(base, exponent);
            
            display.value = ans;
            return;
        }
        else if (temp.includes("%")) {
            let tempPercent = temp.split("%");
            //console.log(tempPercent);
            ans = tempPercent[0] / 100;

            display.value = ans;
            return;
        }
        else if (temp.includes("sin")) {
            let tempSine = temp.split(/sin\(|\)/).join('');
            //console.log(tempSine);
            ans = Math.sin(tempSine);

            display.value = ans;
            return;
        }
        else if (temp.includes("π")) {
            let tempMath = temp.split("π");
            //console.log(tempMath);
            let ans = tempMath[0] * Math.PI;

            display.value = ans;
            return;
        }
        else if (temp.includes("cos")) {
            let tempCos = temp.split(/cos\(|\)/).join('');
            //console.log(tempSine);
            ans = Math.cos(tempCos);

            display.value = ans;
            return;
        }
        else if (temp.includes("e")) {
            let tempMath = temp.split("e");
            //console.log(tempMath);
            let ans = tempMath[0] * Math.E;

            display.value = ans;
            return;
        }
        else if (temp.includes("tan")) {
            let tempTan = temp.split(/tan\(|\)/).join('');
            //console.log(tempSine);
            ans = Math.tan(tempTan);

            display.value = ans;
            return;
        }
        else if (temp.includes("√")) {
            let tempSQRT = temp.split(/\√|\(|\)/).join('');
            //console.log(tempSQRT);
            ans = Math.sqrt(tempSQRT);

            display.value = ans;
            return;
        }
        else {
            display.value = eval(display.value);
        }
        
    }
    catch(error) {
        display.value = "Error";
    }
}