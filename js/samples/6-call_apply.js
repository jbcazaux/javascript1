

var foreach = function(arr, callback){
    for (var i in arr){
        callback.apply(arr[i], [i, arr[i]]);
        //callback.call(arr[i], i, arr[i]);

    }
}


foreach(["a","b","c","d"], function(i, value){
    console.log(i + " : " + this);
});

foreach({a: 1,b : 2,c : 3}, function(i, value){
    console.log(i + " : " + this);
});
