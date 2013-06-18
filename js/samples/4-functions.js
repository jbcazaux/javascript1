//-------------------------
//RETURN A FUNCTION
//-------------------------

function adder(a){

    function add(b){
        return a + b;
    }

    return add;
}

var add7 = adder(7);
console.log("add7(4) = " + add7(4) );


function functionWithName(){return "hello"};
var anonymFunction = function(){return "hello"};


//-------------------------
// FUNCTION AS PARAMETER
//-------------------------

function sayHi(){
    console.log('hey there !');
}

function doIt(f){
    f();
};

doIt(sayHi);



//-------------------------
// CALL BY NAME
//-------------------------

function doEveryThing(name){
    if (arguments.length === 0){
        return "hello world"
    }
    if (arguments.length === 1 && isNaN(arguments[0]) ){
            return "hello " + arguments[0];
    }

    var sum = 0;
    for (var i in arguments){
        sum += arguments[i]
    }
    return sum;
}

console.log(doEveryThing(1,2,3));