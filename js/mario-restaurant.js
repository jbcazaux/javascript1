(function($, mario){

    $(function(){
        var restaurantid = mario.restId || mario.getURLParameter('r');
        $.get('/mario/data/restaurant/' + restaurantid + '.json', displayRestaurant);
        $.get('/mario/data/restaurant/' + restaurantid + '/team.json', loadTeam);
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

    function loadTeam(teamates){
        $.each(teamates, function(){
            $.get('/mario/data/employee/' + this + '.json', displayEmployee);
        });
    }

    function displayEmployee(employee){
        var name = $('<div></div>').text(employee.name);
        var msg = $('<div></div>').text(employee.infos);

        var li = $('<li></li>').append(name).append(msg);
        $('.equipe ul').append(li);
    }



})(jQuery, mario);