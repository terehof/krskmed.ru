var app = app || {};
app.main = {
    fixedHeader: function () {
        $('.page-header').scrollToFixed();
    },
    augmentTabs: function () {
        var $tabs = $('.breast-augment-tabs');
        if ($tabs.length) {
            $('.breast-augment-tabs-link').on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    tab = $this.attr('href');

                if (!$this.hasClass('active')) {
                    $('.breast-augment-tabs-link').removeClass('active');
                    $this.addClass('active');
                    $('.breast-augment-tabs-content').hide().removeClass('active');
                    $(tab).fadeIn().addClass('active');
                }
            })
        }
    },
    compareSlider: function () {
        var $compareSlider = $('.compare-slider');
        if ($compareSlider.length && jQuery().slick) {
            $compareSlider.slick({
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 3,
                slideToScroll: 1,
                prevArrow: '<div class="slick-prev slick-arrow"></div>',
                nextArrow: '<div class="slick-next slick-arrow"></div>'
            })
        }
    },
    smallImageSlider: function () {
        var $imageSlider = $('.small-image-slider');
        if ($imageSlider.length && jQuery().slick) {
            $imageSlider.slick({
                dots: true,
                prevArrow: '<div class="slick-prev slick-arrow"></div>',
                nextArrow: '<div class="slick-next slick-arrow"></div>'
            })
        }
    },
    reviewsSlider: function () {
        var $reviewsSlider = $('.reviews-slider');
        if ($reviewsSlider.length && jQuery().slick) {
            $reviewsSlider.slick({
                dots: true,
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 3000
            })
        }
    },
    faq: function () {
        var $faqItem = $('.faq-item');
        if ($faqItem.length) {
            $('.faq-item__quest').on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $thisItem = $this.closest('.faq-item'),
                    $answer = $thisItem.find('.faq-item__answer');


                if ($thisItem.hasClass('active')) {
                    $thisItem.removeClass('active');
                    $answer.slideUp();
                } else {
                    $faqItem.removeClass('active').find('.faq-item__answer').slideUp();
                    $thisItem.addClass('active');
                    $answer.slideDown();
                }
            })
        }
    },
    chosen: function () {
        if (jQuery().chosen) {
            $('.select').chosen({
                disable_search_threshold: 10,
                width: "100%"
            });
        }
    },
    scrollTo: function () {
        $("a.scrollto").click(function () {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
            $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
            return false;
        });
    },
    inputmask: function () {
        if (jQuery().inputmask) {
            $('input[name="phone"]').inputmask({
                mask: "+7 (999) 9999999",
                oncomplete: function(e) {
                    $(e.target).addClass('valid');
                }
            });
        }
    },
    reasonsShow: function () {
        var $reasonsWrap = $('#reasons-wrap');
        var animFlag = true,
            circleAnimFlag = false;
        function checkAnimVisibility() {
            var hT = $reasonsWrap.offset().top,
                hH = $reasonsWrap.outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT - wH)){
                showReasons();
                animFlag = false;
            }
        }
        function checkAnimVisCircles() {
            var hT = $reasonsWrap.offset().top,
                hH = $reasonsWrap.outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT - wH)){
                circleAnimation();
            }
        }
        checkAnimVisibility();
        $(window).scroll(function() {
            if (animFlag) {
                checkAnimVisibility();
            }
            if (circleAnimFlag) {
                checkAnimVisCircles();
                circleAnimFlag = false;
                setTimeout(function () {
                    circleAnimFlag = true;
                }, 3000);
            }
        });

        function showReasons() {
            var animation = 'animated fadeInUp';
            $reasonsWrap.find('.reason-item:nth-child(1)').addClass(animation);
            setTimeout(function () {
                $reasonsWrap.find('.reason-item:nth-child(2)').addClass(animation);
            }, 200);
            setTimeout(function () {
                $reasonsWrap.find('.reason-item:nth-child(3)').addClass(animation);
            }, 400);
            setTimeout(function () {
                $reasonsWrap.find('.reason-item:nth-child(4)').addClass(animation);
            }, 600);
            setTimeout(function () {
                $reasonsWrap.find('.reason-item:nth-child(5)').addClass(animation);
            }, 800);
            setTimeout(function () {
                $reasonsWrap.find('.reason-item:nth-child(6)').addClass(animation);
                circleAnimFlag = true;
            }, 1000);
        }

        function circleAnimation() {
            var $num = $reasonsWrap.find('.reason-item__num');
            var freqSecs = 0.2;
            blink();

            function blink() {
                var inout = (freqSecs*1000)/0.5;
                $($num[0]).fadeOut(inout).fadeIn(inout);
                setTimeout(function () {
                    $($num[1]).fadeOut(inout).fadeIn(inout);
                }, 200);
                setTimeout(function () {
                    $($num[2]).fadeOut(inout).fadeIn(inout);
                }, 400);
                setTimeout(function () {
                    $($num[3]).fadeOut(inout).fadeIn(inout);
                }, 600);
                setTimeout(function () {
                    $($num[4]).fadeOut(inout).fadeIn(inout);
                }, 800);
                setTimeout(function () {
                    $($num[5]).fadeOut(inout).fadeIn(inout);
                }, 1000);
            }
        }
    },
    benefitsShow: function () {
        var $benefitsWrap = $('#benefits-wrap');
        var animFlag = true;
        function checkAnimVisibility() {
            var hT = $benefitsWrap.offset().top,
                hH = $benefitsWrap.outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT - wH)){
                showBenefits();
                animFlag = false;
            }
        }
        checkAnimVisibility();
        $(window).scroll(function() {
            if (animFlag) {
                checkAnimVisibility();
            }
        });
        function showBenefits() {
            var animation = 'animated fadeInUp';
            $benefitsWrap.find('.benefit:nth-child(1)').addClass(animation);
            setTimeout(function () {
                $benefitsWrap.find('.benefit:nth-child(2)').addClass(animation);
            }, 200);
            setTimeout(function () {
                $benefitsWrap.find('.benefit:nth-child(3)').addClass(animation);
            }, 400);
            setTimeout(function () {
                $benefitsWrap.find('.benefit:nth-child(4)').addClass(animation);
            }, 600);
            setTimeout(function () {
                $benefitsWrap.find('.benefit:nth-child(5)').addClass(animation);
            }, 800);
        }
    }
};
app.popups = {
    flags: {
        sliderMember1: true,
        sliderMember2: true,
        sliderMember3: true
    },
    init: function () {
        var self = this;

        $('.jsPopupMember').on('click', function (e) {
            e.preventDefault();
            var $this = $(this),
                src = $this.attr('data-src');
            $.fancybox.open({
                src: src,
                type: 'inline',
                opts: {
                    afterShow : function(instance, current) {
                        self.scrollBar();
                        self.certSlider(current.src);
                        setTimeout(function () {
                            $(current.src).addClass('visible');
                        }, 100);
                    }
                }
            });
        });
        $('.jsPopupPolicy').on('click', function (e) {
            e.preventDefault();
            var $this = $(this),
                src = $this.attr('data-src');
            $.fancybox.open({
                src: src,
                type: 'inline',
                opts: {
                    afterShow : function(instance, current) {
                        // self.scrollBar();
                        // setTimeout(function () {
                        //     $(current.src).addClass('visible');
                        // }, 100);
                    }
                }
            });
        });
        $('.jsPopupCallback').on('click', function (e) {
            e.preventDefault();
            var $this = $(this),
                src = $this.attr('data-src');
            $.fancybox.open({
                src: src,
                type: 'inline',
                opts: {
                    afterClose: function (instanse, current) {
                        var $form = $(current.src).find('form');
                        if ($form.length) {
                            $form[0].reset();
                            $form.find('input, textarea').removeClass('error');
                            $form.find('label.error').remove();
                            var $select = $form.find('select');
                            if ($select.length) {
                                $select.val('').trigger("chosen:updated");
                            }
                            $form.find('.dispatch-message').removeClass('success error').html('').hide();

                        }

                    }
                }
            });
        });
        $('.jsPopupText').on('click', function (e) {
            e.preventDefault();
            var $this = $(this),
                src = $this.attr('data-src');
            $.fancybox.open({
                src: src,
                type: 'inline',
                opts: {
                    afterShow : function(instance, current) {
                        self.scrollBar();
                        self.certSlider(current.src);
                        setTimeout(function () {
                            $(current.src).addClass('visible');
                        }, 100);
                    }
                }
            });
        });



        $('[data-fancybox]').fancybox({
            buttons : [
                'fullScreen',
                'close'
            ]
        });
    },
    scrollBar: function () {
        var $container = $('.jsScrollContainer');
        if ( $container.length) {
            var container = document.getElementById('container');
            for (var i = 0; i < $container.length; i++) {
                Ps.initialize($container[i]);
            }
        }
    },
    certSlider: function (src) {
        var self = this;
        var num = src.substring(src.length - 1);
        var $certSlider = $(src).find('.certificates-slider');
        if (self.flags['sliderMember' + num]) {
            $certSlider.slick({
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 6,
                slidesToScroll: 1,
                prevArrow: '<div class="slick-prev slick-arrow"></div>',
                nextArrow: '<div class="slick-next slick-arrow"></div>'
            });
            self.flags['sliderMember' + num] = false;
        }
    }
};
app.forms = {
    init: function () {
        var self = this;
        if (jQuery().validate) {
            jQuery.extend(jQuery.validator.messages, {
                required: "Заполните это поле",
                remote: "Заполнено некорректно",
                email: "Укажите верный email",
                url: "Укажите верный url",
                number: "Укажите правильный номер",
                digits: "Введите только цифры",
                accept: "Please enter a value with a valid extension.",
                maxlength: jQuery.validator.format("Не больше {0} символов"),
                minlength: jQuery.validator.format("Не меньше {0} символов"),
                rangelength: jQuery.validator.format("Не меньше {0} и не больше {1} символов")
            });

            self.formCallback();
            self.formCallbackBig();
            self.formFeedback();
            self.formCallToAction();
            self.formMemberPopups();
            self.formTextPopups();
        }
    },
    formCallback: function () {
        $('#form-callback').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                phone: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'Укажите ваше имя'
                },
                phone: {
                    required: 'Укажите ваш телефон'
                }
            },
            submitHandler: function(form) {
                var $form = $(form);
                $.ajax({
                    type: "POST",
                    url: "mail-callback.php",
                    data: $form.serialize()
                }).done(function(e) {
                    $form.find('.dispatch-message').removeClass('error').addClass('success').html('Спасибо! Мы свяжемся с вами').slideDown();
                    $form.trigger('reset');
                }).fail(function (e) {
                    $form.find('.dispatch-message').removeClass('success').addClass('error').html('Произошла ошибка. Попробуйте еще раз').slideDown();
                    $form.trigger('reset');
                    setTimeout(function () {
                        $form.find('.dispatch-message').slideUp();
                    }, 5000);
                })
            }
        });
    },
    formCallbackBig: function () {
        $('#form-callback-big').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                phone: {
                    required: true
                },
                question: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                name: {
                    required: 'Укажите ваше имя'
                },
                phone: {
                    required: 'Укажите ваш телефон'
                },
                question: {
                    required: 'Укажите ваш вопрос'
                }
            },
            submitHandler: function(form) {
                var $form = $(form);
                $.ajax({
                    type: "POST",
                    url: "mail-callback-big.php",
                    data: $form.serialize()
                }).done(function(e) {
                    $form.find('.dispatch-message').removeClass('error').addClass('success').html('Спасибо! Мы свяжемся с вами').slideDown();
                    $form.trigger('reset');
                    var $select = $form.find('select');
                    if ($select.length) {
                        $select.val('').trigger("chosen:updated");
                    }
                }).fail(function (e) {
                    $form.find('.dispatch-message').removeClass('success').addClass('error').html('Произошла ошибка. Попробуйте еще раз').slideDown();
                    $form.trigger('reset');
                    var $select = $form.find('select');
                    if ($select.length) {
                        $select.val('').trigger("chosen:updated");
                    }
                    setTimeout(function () {
                        $form.find('.dispatch-message').slideUp();
                    }, 5000);
                })
            }
        });
    },
    formFeedback: function () {
        $('#form-feedback').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                age_city: {
                    required: true,
                    minlength: 2
                },
                feedback: {
                    required: true,
                    minlength: 10
                }
                // email: {
                //     required: true,
                //     email: true
                // }
            },
            messages: {
                name: {
                    required: 'Укажите ваше имя'
                },
                age_city: {
                    required: 'Укажите ваш возраст, город'
                },
                feedback: {
                    required: 'Напиште отзыв'
                }
            },
            submitHandler: function(form) {
                var $form = $(form);
                $.ajax({
                    type: "POST",
                    url: "mail-feedback.php",
                    data: $form.serialize()
                }).done(function(e) {
                    $form.find('.dispatch-message').removeClass('error').addClass('success').html('Спасибо! Мы свяжемся с вами').slideDown();
                    $form.trigger('reset');
                }).fail(function (e) {
                    $form.find('.dispatch-message').removeClass('success').addClass('error').html('Произошла ошибка. Попробуйте еще раз').slideDown();
                    $form.trigger('reset');
                    setTimeout(function () {
                        $form.find('.dispatch-message').slideUp();
                    }, 5000);
                })
            }
        });
    },
    formCallToAction: function () {
        if ($('.call-to-action-form').length) {
            $('.call-to-action-form').each(function (i, form) {
                $(form).validate({
                    rules: {
                        name: {
                            required: true,
                            minlength: 3
                        },
                        phone: {
                            required: true
                        },
                        question: {
                            required: true,
                            minlength: 5
                        }
                    },
                    messages: {
                        name: {
                            required: 'Укажите ваше имя'
                        },
                        phone: {
                            required: 'Укажите ваш телефон'
                        },
                        question: {
                            required: 'Укажите ваш вопрос'
                        }
                    },
                    submitHandler: function(form) {
                        var $form = $(form);
                        $.ajax({
                            type: "POST",
                            url: "mail-callback-big.php",
                            data: $form.serialize()
                        }).done(function(e) {
                            $form.find('.dispatch-message').removeClass('error').addClass('success').html('Спасибо! Мы свяжемся с вами').slideDown();
                            $form.trigger('reset');
                            var $select = $form.find('select');
                            if ($select.length) {
                                $select.val('').trigger("chosen:updated");
                            }
                        }).fail(function (e) {
                            $form.find('.dispatch-message').removeClass('success').addClass('error').html('Произошла ошибка. Попробуйте еще раз').slideDown();
                            $form.trigger('reset');
                            var $select = $form.find('select');
                            if ($select.length) {
                                $select.val('').trigger("chosen:updated");
                            }
                            setTimeout(function () {
                                $form.find('.dispatch-message').slideUp();
                            }, 5000);
                        })
                    }
                });
            });
        }
    },
    formMemberPopups: function () {
        if ($('.form-popup-member').length) {
            $('.form-popup-member').each(function (i, form) {
                $(form).validate({
                    rules: {
                        name: {
                            required: true,
                            minlength: 3
                        },
                        phone: {
                            required: true
                        }
                    },
                    messages: {
                        name: {
                            required: 'Укажите ваше имя'
                        },
                        phone: {
                            required: 'Укажите ваш телефон'
                        }
                    },
                    submitHandler: function(form) {
                        var $form = $(form);
                        $.ajax({
                            type: "POST",
                            url: "mail-popup-member.php",
                            data: $form.serialize()
                        }).done(function(e) {
                            $form.find('.dispatch-message').removeClass('error').addClass('success').html('Спасибо! Мы свяжемся с вами').slideDown();
                            $form.trigger('reset');
                            var $select = $form.find('select');
                            if ($select.length) {
                                $select.val('').trigger("chosen:updated");
                            }
                        }).fail(function (e) {
                            $form.find('.dispatch-message').removeClass('success').addClass('error').html('Произошла ошибка. Попробуйте еще раз').slideDown();
                            $form.trigger('reset');
                            var $select = $form.find('select');
                            if ($select.length) {
                                $select.val('').trigger("chosen:updated");
                            }
                            setTimeout(function () {
                                $form.find('.dispatch-message').slideUp();
                            }, 5000);
                        })
                    }
                });
            });
        }
    },
    formTextPopups: function () {
        if ($('.form-popup-text').length) {
            $('.form-popup-text').each(function (i, form) {
                $(form).validate({
                    rules: {
                        name: {
                            required: true,
                            minlength: 3
                        },
                        phone: {
                            required: true
                        }
                    },
                    messages: {
                        name: {
                            required: 'Укажите ваше имя'
                        },
                        phone: {
                            required: 'Укажите ваш телефон'
                        }
                    },
                    submitHandler: function(form) {
                        var $form = $(form);
                        $.ajax({
                            type: "POST",
                            url: "mail-popup-text.php",
                            data: $form.serialize()
                        }).done(function(e) {
                            $form.find('.dispatch-message').removeClass('error').addClass('success').html('Спасибо! Мы свяжемся с вами').slideDown();
                            $form.trigger('reset');
                            var $select = $form.find('select');
                            if ($select.length) {
                                $select.val('').trigger("chosen:updated");
                            }
                        }).fail(function (e) {
                            $form.find('.dispatch-message').removeClass('success').addClass('error').html('Произошла ошибка. Попробуйте еще раз').slideDown();
                            $form.trigger('reset');
                            var $select = $form.find('select');
                            if ($select.length) {
                                $select.val('').trigger("chosen:updated");
                            }
                            setTimeout(function () {
                                $form.find('.dispatch-message').slideUp();
                            }, 5000);
                        })
                    }
                });
            });
        }
    }

};
app.map = {
    init: function () {
        var self = this;

        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 56.010563, lng: 92.852580},
            scrollwheel: false,
            styles: self.styleArray,
            disableDefaultUI: true,
            zoomControl: true,
            zoom: 17
        });


        /* TODO: change marker url */
        var marker = new google.maps.Marker({
            position: {lat: 56.010474, lng: 92.854859},
            icon: 'http://htmldev.pro/krskmed/img/map-marker.png'
        });
        marker.setMap(map);
    },
    styleArray: [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#e50303"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#eaeaea"
                },
                {
                    "weight": "0.01"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "hue": "#00b3ff"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#cb1e1e"
                }
            ]
        },
        {
            "featureType": "landscape.natural.landcover",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#c92020"
                }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#851f1f"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#ff0000"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#9e1919"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#a13131"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.place_of_worship",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#c82121"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#8ad1ee"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ]
};
app.video = {
    init: function () {
        var self = this;

        var animFlag = true;
        function checkAnimVisibility() {
            var hT = $('#team-members-wrap').offset().top,
                hH = $('#team-members-wrap').outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT - wH)){
                self.playAppear();
                canHover();
                animFlag = false;
            }
        }
        checkAnimVisibility();
        $(window).scroll(function() {
            if (animFlag) {
                checkAnimVisibility();
            }
        });
        function canHover() {
            setTimeout(function () {
                $('.video-wrapper video').on('mouseenter', function () {
                    var $this = $(this),
                        member = parseFloat($this.parent('.video-wrapper').attr('data-member'));

                    switch (member) {
                        case 1:
                            self.firstHover();
                            // второй смотрит влево
                            break;
                        case 2:
                            self.secondHover();
                            // первый смотри вправо, третий - влево
                            break;
                        case 3:
                            self.thirdHover();
                            // второй смотрит - вправо
                            break;
                    }

                });
            }, 8000)
        }
    },
    playAppear: function () {
        var vidAppear = document.getElementsByClassName('video-appear');
        for (var i = 0; i < vidAppear.length; i++) {
            vidAppear[i].play();
        }

    },
    firstHover: function () {
        var $wrap2 = $('#member-2'),
            videos2 = $wrap2.find('.video'),
            video2L = $wrap2.find('.video-l');

        video2L[0].pause();
        video2L[0].currentTime = 0;
        videos2.removeClass('active');
        video2L.addClass('active');
        video2L[0].play();

        var $wrap1 = $('#member-1'),
            videos1 = $wrap1.find('.video'),
            video1A = $wrap1.find('.video-a');

        video1A[0].pause();
        video1A[0].currentTime = 0;
        videos1.removeClass('active');
        video1A.addClass('active');
        video1A[0].play();
    },
    secondHover: function () {
        var $wrap1 = $('#member-1'),
            videos1 = $wrap1.find('.video'),
            video1R = $wrap1.find('.video-r');
        video1R[0].pause();
        video1R[0].currentTime = 0;
        videos1.removeClass('active');
        video1R.addClass('active');
        video1R[0].play();

        var $wrap3 = $('#member-3'),
            videos3 = $wrap3.find('.video'),
            video3L = $wrap3.find('.video-l');

        video3L[0].pause();
        video3L[0].currentTime = 0;
        videos3.removeClass('active');
        video3L.addClass('active');
        video3L[0].play();


        var $wrap2 = $('#member-2'),
            videos2 = $wrap2.find('.video'),
            video2A = $wrap2.find('.video-a');

        video2A[0].pause();
        video2A[0].currentTime = 0;
        videos2.removeClass('active');
        video2A.addClass('active');
        video2A[0].play();
    },
    thirdHover: function () {
        var $wrap2 = $('#member-2'),
            videos2 = $wrap2.find('.video'),
            video2R = $wrap2.find('.video-r');

        video2R[0].pause();
        video2R[0].currentTime = 0;
        videos2.removeClass('active');
        video2R.addClass('active');
        video2R[0].play();

        var $wrap3 = $('#member-3'),
            videos3 = $wrap3.find('.video'),
            video3A = $wrap3.find('.video-a');

        video3A[0].pause();
        video3A[0].currentTime = 0;
        videos3.removeClass('active');
        video3A.addClass('active');
        video3A[0].play();
    }
};

app.init = function () {
    app.main.fixedHeader();
    app.main.augmentTabs();
    app.main.compareSlider();
    app.main.smallImageSlider();
    app.main.reviewsSlider();
    app.main.faq();
    app.main.chosen();
    app.main.inputmask();
    app.main.scrollTo();
    app.main.reasonsShow();
    app.main.benefitsShow();
    app.video.init();
    app.popups.init();
    app.forms.init();
};

$(document).ready(function () {
    app.init();
});
function initMap() {
    app.map.init();
}