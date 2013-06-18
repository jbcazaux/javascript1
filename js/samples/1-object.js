var styloRouge = {brand: "super pen", color : "red"};

var user1 = {
    login: "user1",
    coeff: 3.2,
    computeSomething: function(p){ return p * this.coeff},
    stylo : styloRouge
};


var petInJson = {"name": "merlin", "age": 3, "food": [
    {"desc": "boite miaou", "price" : 12.30},
    {"desc": "croquettes miaou", "price" : 19.46}
]};