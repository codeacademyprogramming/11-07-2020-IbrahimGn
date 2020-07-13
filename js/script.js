let solution = document.getElementById("solution");
let inputs = document.getElementsByTagName("input");

for (var input of inputs) {
    input.value = "";
}
// -----------------CHECKING INPUTS-------------

function checkInput(inputs, button) {
    for (const input of inputs) {
        if (input.getAttribute("data-index") == button.getAttribute("data-index")) {
            continue;
        }
        input.value = "";
    }
}

// -------------CALCULATE ACTIONS-------------

function getSquareValue(input) {
    if (isNaN(input.valueAsNumber)) {
        return "Please fill input or type number";
    } else {
        return Math.sqrt(input.valueAsNumber);
    }
}

function getHalfValue(input) {
    if (isNaN(input.valueAsNumber)) {
        return "Please fill input or type number";
    } else {
        return input.valueAsNumber / 2;
    }
}

function getPercentValue(input1, input2) {
    if (input2.valueAsNumber === 0) {
        return "Cannot divide by zero";
    }
    if (isNaN(input1.valueAsNumber) || isNaN(input2.valueAsNumber)) {
        return "Please fill input or type number";
    } else {
        return input1.valueAsNumber / input2.valueAsNumber;
    }
}

function getAreaValue(input) {
    if (isNaN(input.valueAsNumber)) {
        return "Please fill input or type number";
    } else {
        return Math.round(Math.PI * Math.pow(input.valueAsNumber, 2));
    }
}


// --------------BUTTON ACTIONS----------------

const squareInput = document.getElementById("square-input");
const squareButton = document.getElementById("square-button")

squareButton.addEventListener("click", function() {
    checkInput(inputs, this);
    solution.innerText = getSquareValue(squareInput);
})

const halfInput = document.getElementById("half-input");
const halfButton = document.getElementById("half-button");

halfButton.addEventListener("click", function() {
    checkInput(inputs, this);
    solution.innerText = getHalfValue(halfInput);
})

const percent1Input = document.getElementById("percent1-input");
const percent2Input = document.getElementById("percent2-input");
const percentButton = document.getElementById("percent-button");

percentButton.addEventListener("click", function() {
    checkInput(inputs, this);
    solution.innerText = getPercentValue(percent1Input, percent2Input);
})

const areaInput = document.getElementById("area-input");
const areaButton = document.getElementById("area-button");

areaButton.addEventListener("click", function() {
    checkInput(inputs, this);
    solution.innerText = getAreaValue(areaInput);
})


// -------------CHECKING ENTER KEY--------------

function checkEnterKey(value, event) {
    if (event.keyCode === 13) {
        solution.innerText = value;
    }
}


// -------------ENTER KEY ACTIONS----------------

squareInput.addEventListener("keyup", function(event) {
    checkEnterKey(getSquareValue(squareInput), event);
    checkInput(inputs, this);
})

halfInput.addEventListener("keyup", function(event) {
    checkEnterKey(getHalfValue(halfInput), event);
    checkInput(inputs, this);
})

percent1Input.addEventListener("keyup", function(event) {
    checkEnterKey(getPercentValue(percent1Input, percent2Input), event)
    checkInput(inputs, this);
})

percent2Input.addEventListener("keyup", function(event) {
    checkEnterKey(getPercentValue(percent1Input, percent2Input), event)
    checkInput(inputs, this);
})

areaInput.addEventListener("keyup", function(event) {
    checkEnterKey(getAreaValue(areaInput), event);
    checkInput(inputs, this);
})