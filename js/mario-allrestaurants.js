(function($, mario){

    $(function(){
        init();
    });

    function init(callback){
        $.get('/mario/data/restaurants.json', function(data){
            $.each(data, displayRestaurant);
        }).always(callback);
    }
    mario.initAllRestaurants = init;

    function displayRestaurant(i, restaurant){
        var link = mario.createLink('restaurant.html?r=' + restaurant.id, restaurant.name);
        var li = $('<li></li>').html(link);
        $('.pizzerias ul').append(li);
    }



})(jQuery, mario);