/**
 * jQuery countdownRedirect Plugin
 * Narong Rammanee
 * ranarong@gmail.com
 *
 * Latest Release: Sep 2012
 * 
 */

(function ($) {
    'use strict';

    // countdownRedirect methods.
    var CR = {
        seconds : 10,
        url     : null,
        div     : null,

        // Initialize
        init : function (options) {
            return this.each(function () {              // For each query element
                var self, settings;

                self     = $(this);                     // This element to jqeury obj
                settings = $.extend({
                    url     : 'http://www.google.co.th',
                    seconds : 10,
                    css     : null
                }, options);

                CR.seconds = settings.seconds;
                CR.url     = settings.url;
                CR.div     = self;

                self.css(settings.css).addClass("box").appendTo(document.body);

                CR.countdown();
            });
        },

        countdown : function () {
            if (CR.seconds >= 1) {
                CR.div.text("...กำลังพาท่านไปยังเว็บไซต์  " + CR.url + " กรุณารอ " + CR.seconds + " วินาที...");
                setTimeout(CR.countdown, 1000);
            } else {
                // Redirect here
                document.location = CR.url;
            }

            CR.seconds -= 1;
        }
    };

    $.fn.countdownRedirect = function () {
        return CR.init.apply(this, arguments);
    };

}(jQuery));