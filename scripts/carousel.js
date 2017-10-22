$(function(){
    $('#niceCarousel').carousel({
        interval: 3000,
        pause: 'false'
    });

    $('#playButton').click(function () {
        $('#niceCarousel').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#niceCarousel').carousel('pause');
    });
});
