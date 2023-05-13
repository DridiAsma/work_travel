$("#owl-carousel").owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        767:{
            items:2,
            nav:false
        },
        991:{
            items:3,
            nav:true,
            loop:false
        }
    }
});


$("#owl-carousel-1").owlCarousel({
    loop:true,
    margin: 0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        767:{
            items:1,
           
        },
        991:{
            items:1,
           
        }
    }
});

