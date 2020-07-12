let solution = document.getElementById("solution");
let inputs = document.getElementsByTagName("input");


// -----------------check Input-------------

function checkInput(inputs, button) {
    for (const input of inputs) {
        if (input.getAttribute("data-index") == button.getAttribute("data-index")) {
            continue;
        }
        input.value = "";
    }
}


// ----------------check Empty input----------------

function checkEmptyInput(value) {
    if (isNaN(value)) {
        solution.innerText = "Please fill input!"
    } else {
        solution.innerText = value;
    }
}


// -------------Calculate actions-------------

function squareVal(input) {
    return Math.sqrt(input.valueAsNumber);
}

function halfVal(input) {
    return input.valueAsNumber / 2;
}

function percentVal(input2, input1) {
    if (isNaN(input2.valueAsNumber)) {
        input2.valueAsNumber = 0;
    }
    if (isNaN(input1.valueAsNumber)) {
        input1.valueAsNumber = 0;
    }
    return (`${input2.valueAsNumber}.${input1.valueAsNumber}`);
}

function areaVal(input) {
    return Math.round(Math.PI * Math.pow(input.valueAsNumber, 2));
}


// --------------Button actions----------------

const squareInput = document.getElementById("square-input");
const squareButton = document.getElementById("square-button")

squareButton.addEventListener("click", function() {
    checkInput(inputs, this);
    checkEmptyInput(squareVal(squareInput));

})

const halfInput = document.getElementById("half-input");
const halfButton = document.getElementById("half-button");

halfButton.addEventListener("click", function() {
    checkInput(inputs, this);
    checkEmptyInput(halfVal(halfInput));
})

const percent1Input = document.getElementById("percent1-input");
const percent2Input = document.getElementById("percent2-input");
const percentButton = document.getElementById("percent-button");

percentButton.addEventListener("click", function() {
    checkInput(inputs, this);
    checkEmptyInput(percentVal(percent2Input, percent1Input));
})

const areaInput = document.getElementById("area-input");
const areaButton = document.getElementById("area-button");

areaButton.addEventListener("click", function() {
    checkInput(inputs, this);
    checkEmptyInput(areaVal(areaInput));
})


// -------------check Enter key--------------

function checkEnterKey(value, event) {
    if (event.keyCode === 13) {
        solution.innerText = value;
    }
}


// -------------Enter key actions----------------

squareInput.addEventListener("keyup", function(event) {
    checkInput(inputs, this);
    checkEnterKey(squareVal(squareInput), event);
})

halfInput.addEventListener("keyup", function(event) {
    checkInput(inputs, this);
    checkEnterKey(halfVal(halfInput), event);
})

percent1Input.addEventListener("keyup", function(event) {
    checkInput(inputs, this);
    checkEnterKey(percentVal(percent2Input, percent1Input), event)
})

percent2Input.addEventListener("keyup", function(event) {
    checkInput(inputs, this);
    checkEnterKey(percentVal(percent2Input, percent1Input), event)
})

areaInput.addEventListener("keyup", function(event) {
    checkInput(inputs, this);
    checkEnterKey(areaVal(areaInput), event);
})