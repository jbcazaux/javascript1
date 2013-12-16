function Dice(){
    this.value = 1;
}
Dice.prototype.throws= function(){
    return this.value= Math.floor(Math.random()*6)+1;
}

function Cup(){
    this.dice = new Dice();
    this.dice1 = 1;
    this.dice2 = 1;
}
Cup.prototype.throws = function(){
    this.dice1 = this.dice.throws();
    this.dice2 = this.dice.throws();
    return this.dice1+this.dice2;
}
Cup.prototype.isDouble = function(){
    return this.dice1 == this.dice2;
}
