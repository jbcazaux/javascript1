//-------------------
// PROTOTYPE
//-------------------

var User = function(name){
    this.name = name;
//    this.echo = function(e){return e};
}
//better to do:
User.prototype.hello = function(name){return "hello " + name};
User.prototype.echo= function(e){return e};

var simpleUser = new User('simple');
console.log("simple hello: " + simpleUser.hello('simple'));


//SUPER USER
var SuperUser = function(age){
    this.age = age;
    this.ftest = function(){return "test"};
};

SuperUser.prototype = new User();
//override
SuperUser.prototype.hello = function(){return "super hello"};

var superUtilisateur = new SuperUser(12);
console.log(superUtilisateur.echo("coucou"));
console.log(superUtilisateur.hello("me"));



//-------------------
// APPLY
//-------------------
function MegaUser(name){
    User.apply(this, [name]);
    this.boom = function(){return "boum"};
}
var toto = new MegaUser(25);
console.log(toto.echo("yop"));



//--------------------
//jq.extend
//--------------------
function UltimateUser(name){
    this.name = name;
    $.extend(this, new User());
}
var titi = new UltimateUser('titi');
console.log(titi.echo(titi.name));
console.log(titi.hello(titi.name));

