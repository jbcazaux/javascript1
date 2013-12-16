function User(name, login){
    this.name = name;
    this.login = login;
    this.coeff = 3.2;

    this.computeSomething = function(p){
        return p * this.coeff;
    };

    var privateCoeff = 1.1;
    this.getPrivateCoeff = function(){
        return privateCoeff;
    };

    //return this;
};

var u1 = new User("toto", "toto1");
console.log("coeff: " + u1.coeff);
console.log("private coeff: " + u1.privateCoeff);
console.log("get private coeff: " + u1.getPrivateCoeff());


u1.hello = function(name){
    return "hello "  + name;
}
u1.hello("jb");