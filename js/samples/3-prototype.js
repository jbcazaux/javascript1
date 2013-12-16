//same example but computeSomething is declared in the prototype
var User = function(login){
    this.login = login;
    this.coeff = 3.2;
};

var u1 = new User("toto1");


User.prototype.computeSomething = function(p){
    return p * this.coeff;
};

console.log("coeff: " + u1.coeff);
console.log("compute 2: " + u1.computeSomething(2));
u1.coeff = 0;
console.log("set coeff to : " + u1.coeff);
console.log("compute 2: " + u1.computeSomething(2));


//------------------------
//ORDER OF RESOLUTION
//------------------------

console.log("--------------------------------");
var WeirdUser = function(login){
    this.login = login;

    this.computeSomething = function(p){
        return 5;
    };
};

WeirdUser.prototype.computeSomething = function(p){
    return 10;
};
var u2 = new WeirdUser("tata");
console.log("compute weird: " + u2.computeSomething(2));



//--------------------------------
//MODIFY PROTOTYPE AFTER INSTANCIATION
//--------------------------------
console.log("--------------------------------");
Object.prototype.return777 = function(){return 777};
console.log("u2.return777: " + u2.return777());
console.log("u2.hasOwnProperty('return777'): " + u2.hasOwnProperty("return777"));
console.log("u2.hasOwnProperty('computeSomething'): " + u2.hasOwnProperty("computeSomething"));