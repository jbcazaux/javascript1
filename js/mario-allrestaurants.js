(function($, mario){

    $(function(){
        $.get('/mario/data/restaurants.json', function(data){
            $.each(data, displayRestaurant);
        });
    });

    function displayRestaurant(i, restaurant){
        var link = mario.createLink('restaurant.html?r=' + restaurant.id, restaurant.name);
        var li = $('<li></li>').append(link);
        $('.pizzerias ul').append(li);
    }

})(jQuery, mario);