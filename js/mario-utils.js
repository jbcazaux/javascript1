window.mario = window.mario || {};

(function($){

    mario.createEmailLink = function(email){
        return $('<a></a>').attr('href', 'mailto:' + email).text(email);
    }

    mario.createLink = function(url, text){
        return $('<a></a>').attr('href', url).text(text || url);
    }

    mario.getURLParameter = function(name) {
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
        );
    }

    mario.foreach = function(arr, callback){
        for (var i in arr){
            callback.apply(arr[i], [i, arr[i]]);
            //callback.call(arr[i], i, arr[i]);
        }
    }
})(jQuery);