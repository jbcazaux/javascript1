function Box(name, arg1, arg2, arg3){
    this.name = name;
    this.next = null;
    this.toto = 1;
}

Box.prototype.on = function(player){
    return;
}

function Start(){
    Box.call(this, "Départ");
}
Start.prototype = new Box();
Start.prototype.on = function(player){
    player.money += 100;
    return player;
}


function Property(name, price, rent){
    Box.call(this, name);
    this.owner = null;
    this.price = price;
    this.rent = rent;
}
Property.prototype = new Box();
Property.prototype.on = function(player){
    if (!this.owner){
        if (player.money >= this.price){
            this.owner = player;
            player.money -= this.price;
        }
    } else if (player.id != this.owner.id){
        player.money -= this.rent;
    }
}