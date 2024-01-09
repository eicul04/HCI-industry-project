const express = require('express');
const app = express();
const port = 3000;

// add get x, y from server
// mock 5,5 for false and 20,20 for true
let answer = getValidationResult(20, 20);
console.log(answer);
// anpassen auf async/callback function etc. warten mit ausführung bis available
app.get('/validateposition', async (req, res) => {
    res.send(answer);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// GET Request für x/y coordinate links oben Ecke
// Trigger validation of coordinate when?? When ID could be read??
// Trigger with Button in UI?

function getValidationResult(x, y) {
    return validatePosition(x, y);
}

function validatePosition(x, y) {
    return checkIfPositionPossible(getGridCoordinate(x, y));
}

function setValidationResult(x, y) {
    document.getElementById("validationResult").innerHTML = getValidationResult(x, y);
}

function getGridCoordinate(x, y) {
    let numberGridValue = getNumberGridValue(x);
    let alphabetGridValue = getAlphabetGridValue(y);
    //string concat ??
    return alphabetGridValue + numberGridValue;
}

function getNumberGridValue(x) {
    switch (true) {
        case x < 12:
            return "1";
        case x < 24:
            return "2";
        default:
            return "0"
    }
}

function getAlphabetGridValue(y) {
    switch (true) {
        case y < 12:
            return "A";
        case y < 24:
            return "B";
        default:
            return "0"
    }
}

// check in database if position possible
// mocked
function checkIfPositionPossible(gridCoordinate) {
    console.log(gridCoordinate);
    switch (true) {
        case gridCoordinate === "B2":
            return true;
        case gridCoordinate === "D4":
            return true;
        case gridCoordinate === "C1":
            return false;
        default:
            return false
    }
}

// Info where object should be placed by Co-pilot
// NEEDED??
function getSuggestedPosition() {
    return document.getElementById("copilotSuggestion").value
}

