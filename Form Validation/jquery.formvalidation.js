(function ($) {
    $.fn.Validate = function (userOptions) {
        var options = $.extend({
            errorDivClass: 'errorMsgs',
            fieldNameAttr: 'name',
            errorPosition: 'prepend'
        }, userOptions);

        var emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
        var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;
        var requireRegex = /([^\s]+)/;

        var startWith = function (str, prefix) {
            return (str.slice(0, prefix.length) == prefix);
        }

        this.each(function () {
            var frm = $(this);
            var errorDiv = $('<div>').addClass('alert alert-info');

            frm.submit(function (ev) {
                var errors = [];

                var fields = $(this).find("input[data-vld], textarea[data-vld]");
                fields.each(function () {
                    var field = $(this);
                    var vldStrings = field.attr('data-vld').split('|');
                    for (i in vldStrings) {
                        var vldStr = vldStrings[i].trim();
                        if (vldStr === 'required') {
                            if (!requireRegex.test(field.val())) {
                                errors.push("-Field " + field.attr(options.fieldNameAttr) + ' is required !');
                                if (!field.next().is('span.required-star')) {
                                    field.after('<span class="required-star">*</span>')
                                }

                            } else {
                                field.next('span.required-star').remove()
                            }
                        } else if (vldStr === 'email') {
                            if (!emailRegex.test(field.val())) {
                                errors.push("-Field " + field.attr(options.fieldNameAttr) + " is not a Valid Email")
                            }
                        } else if (vldStr === 'url') {

                        } else if (startWith(vldStr, "minlen_")) {
                            var len = Number(vldStr.split("_")[1]);
                            if (field.val().length < len) {
                                errors.push("-Minimum length of field  " + field.attr(options.fieldNameAttr) + " is " + len + " character !")
                            }
                        } else if (startWith(vldStr, "maxlen_")) {
                            var len = Number(vldStr.split("_")[1]);
                            if (field.val().length > len) {
                                errors.push("-Maximum length of field  " + field.attr(options.fieldNameAttr) + " is " + len + " character !")
                            }
                        } else if (startWith(vldStr, "min_")) {
                            var num = Number(vldStr.split("_")[1]);
                            if (Number(field.val()) < num) {
                                errors.push("-Field  " + field.attr(options.fieldNameAttr) + " must be greater than " + num)
                            }
                        } else if (startWith(vldStr, "max_")) {
                            var num = Number(vldStr.split("_")[1]);
                            if (Number(field.val()) > num) {
                                errors.push("-Field  " + field.attr(options.fieldNameAttr) + " must be less than " + num)
                            }
                        } else {
                        }
                    }
                });
                console.log(errors);
                if (errors.length == 0) {
                    return true
                } else {
                    ev.preventDefault();
                    errorDiv.html(errors.join('<br>'));
                    if (options.errorPosition == "append") {
                        frm.append(errorDiv)
                    } else {
                        frm.prepend(errorDiv)
                    }

                }

            });
        })
    }
}(jQuery));