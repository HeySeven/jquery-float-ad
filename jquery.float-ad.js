(function ($) {
    $.fn.floatAd = function (options) {
        var defaults = {
            speed: 10 //漂浮速度 单位毫秒
        };
        var options = $.extend(defaults, options);
        var obj = $(this);
        obj.css('position', 'fixed');
        function init() {
            var x = 0,
                y = 0,
                xin = true,
                yin = true,
                step = 1;
            var float = function () {
                var L = T = 0,
                OW = obj.width(), //当前广告的宽
                OH = obj.height(), //高
                DW = $(window).width(), //浏览器窗口的宽
                DH = $(window).height();

                x = x + step * (xin ? 1 : -1);
                if (x < L) {
                    xin = true;
                    x = L;
                }
                if (x > DW - OW - 1) { //-1为了ie
                    xin = false;
                    x = DW - OW - 1;
                }

                y = y + step * (yin ? 1 : -1);
                if (y > DH - OH - 1) {

                    yin = false;
                    y = DH - OH - 1;
                }
                if (y < T) {
                    yin = true;
                    y = T;
                }

                var left = x;
                var top = y;

                obj.css({
                    'top': top,
                    'left': left
                });
            }
            var itl = setInterval(float, options.speed);
            obj.mouseover(function () {
                clearInterval(itl)
            });
            obj.mouseout(function () {
                itl = setInterval(float, options.speed)
            })
        }

        init();

    }; //autoMove

})(jQuery);