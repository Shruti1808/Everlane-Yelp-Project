﻿$(document).ready(function () {
    //event.preventDefault();
    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=23295033.c28206a.c07982e46a2343189debaa91dfaffd9b",
        success: function (data) {
            console.log(data);
            for (var i = 0; i < 20; i++) {
                $('.images').append('<a target="_blank" href="' + data.data[i].link + '"><img src="' + data.data[i].images.standard_resolution.url + '"></a>');
            }
        }
    });

});