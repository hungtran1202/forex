/**
 * Created by hungtran on 8/10/16.
 */
jQuery(document).ready(function () {
    (function ($) {

        $('.banner .slider').bxSlider({
            pager: false,
            speed: 1000,
            controls: false,
            touchEnabled: true,
            adaptiveHeight: false,
            preventDefaultSwipeX: true,
            preventDefaultSwipeY: false,
            mode: 'horizontal',
            auto: true,
            pause: 5000,
            onSliderLoad: function (currentIndex) {
                $('.slider').removeClass('slider-loading');
            }
        });
//

    })(jQuery);
});