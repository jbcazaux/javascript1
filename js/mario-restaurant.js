(function($, mario){

    $(function(){
        var restaurantid = mario.getURLParameter('r');
        $.get('/mario/data/restaurant/' + restaurantid + '.json', displayRestaurant);
    });

    function displayRestaurant(data){
        $('.title').text(data.name);
        $('.welcomemsg').text(data.title);
        $('.infos .adresse').text(data.contact.address);
        $('.infos .tel').text(data.contact.tel);
        $('.infos .email').text(data.contact.email);

        $.each(data.openings, function(i, opening){
            var tr = $('.infos .horaires tr').eq(i);
            $('td', tr).eq(1).text(opening.am);
            $('td', tr).eq(2).text(opening.pm);
        });
    }





})(jQuery, mario);