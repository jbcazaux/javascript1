

var foreach = function(arr, callback){
    for (var i in arr){
        callback.apply(arr[i], [i, arr[i]]);
        //callback.call(arr[i], i, arr[i]);
    }
}


foreach(["a","b","c","d"], function(i){
    console.log(i + " : " + this);
});
