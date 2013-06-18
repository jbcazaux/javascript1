//USER
var User = function(name){
    this.name = name;
    this.echo = function(e){return e}
}
//better to do:
User.prototype.echo = function(e){return e}
User.prototype.hello = function(name){return "hello " + name};


//SUPER USER
var SuperUser = function(age){
    this.age = age
};
SuperUser.prototype = User.prototype;
//override
SuperUser.prototype.hello = function(){return "super hello"};

var jb = new SuperUser(12);
//jb.hello = function(msg){return "super hello " + msg};
console.log(jb.echo("coucou"));
console.log(jb.hello("me"));


//with APPLY
function MegaUser(name){
    User.apply(this, [name]);
    this.boom = function(){return "boum"};
}
var toto = new MegaUser(25);
console.log(toto.echo("yop"));