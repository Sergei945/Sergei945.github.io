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

    let objactType = {
        card: 5000,
        lending: 7000,
        shop: 15000,
        supermarket: 100000
    };
    let design = {
        figma: 10000,
        avacode: 15000,
        photoshop: 30000,
        personal: 50000
    };
    let adaptive = {
        notAdaptive: 10000,
        withAdaptive: 15000
    };

    let price = {
        clientType: 0,
        clientDesign: 0,
        clientAdaptive: 0
    };
    let finalPrice = 0;
    $('#list').on('change', function() {
        price.clientType = objactType[$(this).val()];

        if (
            !price.clientDesign == 0 &&
            !price.clientAdaptive == 0 &&
            !price.clientAdaptive == 0 &&
            !price.clientDesign == 0
        ) {
            finalPrice = price.clientDesign + price.clientAdaptive + price.clientType;
            console.log(finalPrice);
        } else {
            finalPrice = 0;
            finalPrice += price.clientType;
        }
        $('.end-price').text(finalPrice);
    });

    $('#list2').on('change', function() {
        price.clientDesign = design[$(this).val()];
        if (
            !price.clientType == 0 &&
            !price.clientAdaptive == 0 &&
            !price.clientAdaptive == 0 &&
            !price.clientType == 0
        ) {
            finalPrice = price.clientDesign + price.clientAdaptive + price.clientType;
        } else {
            finalPrice = price.clientType;
            finalPrice += price.clientDesign;
        }
        $('.end-price').text(finalPrice);
    });
    $('#list3').on('change', function() {
        price.clientAdaptive = adaptive[$(this).val()];
        if (!price.clientType == 0 && !price.clientDesign == 0 && !price.clientDesign == 0 && !price.clientType == 0) {
            finalPrice = price.clientDesign + price.clientAdaptive + price.clientType;
        } else {
            finalPrice = price.clientType + price.clientDesign;
            finalPrice += price.clientAdaptive;
        }
        $('.end-price').text(finalPrice);
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
