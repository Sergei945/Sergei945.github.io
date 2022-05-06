$(document).ready(function() {
    new WOW().init();
    // build scenes
    new ScrollMagic.Scene({ triggerElement: '#about' })
        .setClassToggle('#menu-about', 'active') // add class toggle
        .addTo(new ScrollMagic.Controller({ globalSceneOptions: { duration: $('#about').height() } }));
    new ScrollMagic.Scene({ triggerElement: '#iCanDo-Scroll' })
        .setClassToggle('#menu-iCanDo-Scroll', 'active') // add class toggle
        .addTo(new ScrollMagic.Controller({ globalSceneOptions: { duration: $('#iCanDo-Scroll').height() } }));
    new ScrollMagic.Scene({ triggerElement: '#case_scroll' })
        .setClassToggle('#menu-case_scroll', 'active') // add class toggle
        .addTo(new ScrollMagic.Controller({ globalSceneOptions: { duration: $('#case_scroll').height() / 2 } }));
    new ScrollMagic.Scene({ triggerElement: '#calculate' })
        .setClassToggle('#menu-calculate', 'active') // add class toggle
        .addTo(new ScrollMagic.Controller({ globalSceneOptions: { duration: $('#calculate').height() } }));
    new ScrollMagic.Scene({ triggerElement: '#feedback_scroll' })
        .setClassToggle('#menu-feedback_scroll', 'active') // add class toggle
        .addTo(new ScrollMagic.Controller({ globalSceneOptions: { duration: $('#feedback_scroll').height() } }));
    new ScrollMagic.Scene({ triggerElement: '#my_contacts_scroll' })
        .setClassToggle('#menu-my_contacts_scroll', 'active') // add class toggle
        .addTo(new ScrollMagic.Controller({ globalSceneOptions: { duration: $('#my_contacts_scroll').height() } }));

    let options = { threshold: [ 0.3 ] };
    let observerImg = new IntersectionObserver(onEntryImg, options);
    let elementsImg = $('img');

    elementsImg.each((i, el) => {
        if (el.dataset.src) {
            observerImg.observe(el);
        }
    });

    observerSelecor('.my_contacts', 'my_contacts_active');
    observerSelecor('.statistic', 'statistic_active');
    observerSelecor('.iCanDo', 'iCanDo_active');

    let observer = new IntersectionObserver(function(entry) {
        entry.forEach((change) => {
            if (change.isIntersecting) {
                $('.quentity_hours').spincrement({
                    thousandSeparator: '',
                    duration: 2500
                });
                $('.quentity_projects').spincrement({
                    thousandSeparator: '',
                    duration: 2500
                });
                $('.quentity_awards').spincrement({
                    thousandSeparator: '',
                    duration: 2500
                });
                $('.quentity_clietnts').spincrement({
                    thousandSeparator: '',
                    duration: 5000
                });
            }
        });
    }, options);
    let element = $('.quentity_hours');
    element.each((i, el) => {
        observer.observe(el);
    });

    addAnimationStyleAllclass('h2', 'animate__fadeInDown', '1.5s');
    addAnimationStyleAllclass('.panel', 'animate__flipInY', '1.5s');
    // addAnimationStyleClass('.my_contacts_container', 'animate__heartBeat', '2.5s');
    let objectPrices = {
        objactType: {
            card: 5000,
            lending: 7000,
            shop: 15000,
            supermarket: 100000
        },
        design: {
            figma: 10000,
            avacode: 15000,
            photoshop: 30000,
            personal: 50000
        },
        adaptive: {
            notAdaptive: 10000,
            withAdaptive: 15000
        }
    };
    let objectDays = {
        objactType: {
            card: 2,
            lending: 3,
            shop: 7,
            supermarket: 14
        },
        design: {
            figma: 3,
            avacode: 4,
            photoshop: 5,
            personal: 10
        },
        adaptive: {
            notAdaptive: 1,
            withAdaptive: 2
        }
    };
    let price = {
        clientType: 0,
        clientDesign: 0,
        clientAdaptive: 0
    };
    let days = {
        typeDays: 0,
        designDays: 0,
        adaptiveDays: 0
    };

    let finalPrice = 0;
    let finalDays = 0;
    $('#list').on('change', function() {
        price.clientType = objectPrices.objactType[$(this).val()];
        days.typeDays = objectDays.objactType[$(this).val()];
        if (
            !price.clientDesign == 0 &&
            !price.clientAdaptive == 0 &&
            !price.clientAdaptive == 0 &&
            !price.clientDesign == 0
        ) {
            finalPrice = price.clientDesign + price.clientAdaptive + price.clientType;
            finalDays = days.typeDays + days.designDays + days.adaptiveDays;
        } else {
            finalPrice = 0;
            finalDays = 0;
            finalPrice += price.clientType;
            finalDays += days.typeDays;
        }
        $('.end-price').text(finalPrice);
        $('.end-time').text(finalDays);
    });

    $('#list2').on('change', function() {
        price.clientDesign = objectPrices.design[$(this).val()];
        days.designDays = objectDays.design[$(this).val()];
        if (
            !price.clientType == 0 &&
            !price.clientAdaptive == 0 &&
            !price.clientAdaptive == 0 &&
            !price.clientType == 0
        ) {
            finalPrice = price.clientDesign + price.clientAdaptive + price.clientType;
            finalDays = days.typeDays + days.designDays + days.adaptiveDays;
        } else {
            finalPrice = price.clientType;
            finalPrice += price.clientDesign;
            finalDays = days.typeDays;
            finalDays += days.designDays;
        }
        $('.end-price').text(finalPrice);
        $('.end-time').text(finalDays);
    });
    $('#list3').on('change', function() {
        price.clientAdaptive = objectPrices.adaptive[$(this).val()];
        days.adaptiveDays = objectDays.adaptive[$(this).val()];
        if (!price.clientType == 0 && !price.clientDesign == 0 && !price.clientDesign == 0 && !price.clientType == 0) {
            finalPrice = price.clientDesign + price.clientAdaptive + price.clientType;
            finalDays = days.typeDays + days.designDays + days.adaptiveDays;
        } else {
            finalPrice = price.clientType + price.clientDesign;
            finalPrice += price.clientAdaptive;
            finalDays = days.typeDays + days.designDays;
            finalDays = days.adaptiveDays;
        }
        $('.end-price').text(finalPrice);
        $('.end-time').text(finalDays);
    });
});

// finalPrice = objactType[price.clientType] + design[price.clientDesign] + adaptive[price.clientAdaptive];
function onEntryImg(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.src = change.target.dataset.src;
        }
    });
}

function observerSelecor(selector, addClass) {
    let options = { threshold: [ 0.3 ] };
    let observer = new IntersectionObserver(function(entry) {
        entry.forEach((change) => {
            if (change.isIntersecting) {
                change.target.classList.add(addClass);
            }
        });
    }, options);
    let element = $(selector);
    element.each((i, el) => {
        observer.observe(el);
    });
}

function addAnimationStyleAllclass(selector, animation, duration) {
    let headerTwo = $(selector);
    headerTwo.each((i, el) => {
        el.classList.add('animate__animated');
        el.classList.add('wow');
        el.classList.add(animation);
        el.style.setProperty('--animate-duration', duration);
    });
}

function addAnimationStyleClass(selector, animation, duration) {
    $(selector).addClass('animate__animated');
    $(selector).addClass('wow');
    $(selector).addClass(animation);
    $(selector).style.setProperty('--animate-duration', duration);
}
