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

})(jQuery);