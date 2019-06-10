(function ($) {
    $.fn.extend({
        drag: (function () {
            let startX_, startY_;
            return function (opts) {
                let onMousemove, onMouseup;

                onMousemove = function (e) {
                    $.isFunction(opts.move) ? opts.move({
                        x: e.clientX - startX_,
                        y: e.clientY - startY_
                    }) : '';
                }

                onMouseup = function () {
                    $.isFunction(opts.end) ? opts.end() : '';
                    $(document).off('mouseup', onMouseup)
                    $(document).off('mousemove', onMousemove)
                }

                this.on('mousedown', function (e) {
                    $.isFunction(opts.start) ? opts.start() : '';
                    startX_ = e.clientX;
                    startY_ = e.clientY;
                    $(document).on('mousemove', onMousemove)
                    $(document).on('mouseup', onMouseup)
                })
            }
        })()
    });
})(jQuery);