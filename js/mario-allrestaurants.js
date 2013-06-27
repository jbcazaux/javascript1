(function($, mario){
    "use strict"

    $(function(){
        $.get('/mario/data/restaurants.json').done(function(data){
            $.each(data, displayRestaurant);
        });
    });

    function displayRestaurant(i, restaurant){
        var link = mario.createLink('restaurant.html?r=' + restaurant.id, restaurant.name);
        var li = $('<li></li>').html(link);
        $('.pizzerias ul').append(li);
    }

})(jQuery, mario);