var Charles = {};
var Liz = {};


var tiyStudents = [Charles, Liz, Will = {}];

tiyStudents[0].name = "Charles";
tiyStudents[0].talent = "Climbing";
tiyStudents[0].birthPlace = "California";

tiyStudents[1].name = "Liz";
tiyStudents[1].talent = "banjo";
tiyStudents[1].birthPlace = "Texas";

tiyStudents[2].name = "Will";
tiyStudents[2].talent = "Major soccer stats nut";
tiyStudents[2].birthPlace = "Virginia";

var perfectSquaresArr = [];
var funcArr = [GaussFunc, diffFunc, powerFunc];

for(i=0;i<101;i++) {
    var square = i*i;
    perfectSquaresArr.push(square);
}

var GaussFunc = function(x) {
    if (typeof x === "number") {
        return x*(x+1)/2;
    }
    else {
        return console.log("This funciton takes one input: a single number");
    }
}

var diffFunc = function(x,y) {
    if ((typeof x === typeof y === true) && (typeof x === "number")) {
        return x - y;
    }
    else {
        return console.log("It didn't work, enter two numbers");
    }
}

var powerFunc = function(x,y) {
    var expo = x;
    for(i=0;i<(y-1);i++) {
        expo = expo*x;
    }
    return expo;
}

var list = {
    numbersList: [i, 18, -2.4, 3/4],
    stringsList: ["one", "18", "negative tow and four tenths", "3/4"],
    booleansList: [true, false],
    arraysList: ["tiyStudents", "perfectSquaresArr", "funcArr", "and the previous properties of this object"],
    objectsList: ["Charles", "Liz", "Will"],
    funcList: ["GaussFunc", "diffFunc", "powerFunc"],
}

console.log("Type 'list' to see the different variables and data types available")
