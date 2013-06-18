var User = function(login){
    this.login = login;
    this.coeff = 3.2;

    this.getPrivateCoeff = function(){
        return privateCoeff;
    };
};

User.prototype.computeSomething = function(p){
    return p * this.coeff;
};

var u1 = new User("toto", "toto1");
console.log("coeff: " + u1.coeff);
console.log("compute 2: " + u1.computeSomething(2));
u1.coeff = 0;
console.log("set coeff to : " + u1.coeff);
console.log("compute 2: " + u1.computeSomething(2));


//------------------------
//------------------------


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
