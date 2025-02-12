

window.addEventListener('DOMContentLoaded',function() {

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
    }

    
    // header-bottom-menu
    document.querySelectorAll('.header-menu__btn').forEach(function (headerMenuBtn)  {
        headerMenuBtn.addEventListener('click', function(event){
            const dropDown = event.target
            const path = event.currentTarget.dataset.path 

            
            document.querySelectorAll('.header-menu__btn_active').forEach(function(headerMenuList) {
                headerMenuList.classList.remove('header-menu__btn_active')
            }),

            document.querySelectorAll('.header-menu__list').forEach(function(headerMenuList) {
                headerMenuList.classList.remove('header-menu__list_active')
            }),

            document.querySelector(`[data-target="${path}"]`).classList.add('header-menu__list_active')
             
            dropDown.classList.add('header-menu__btn_active');

            const hmList = document.querySelector('.header-menu__list_active')
                window.addEventListener('click', e => {
                    const target = e.target
                    if (!target.closest('.header-menu__btn') && !target.closest('.header-menu__item')) {
                        hmList.classList.remove('header-menu__list_active')
                        dropDown.classList.remove('header-menu__btn_active');
                    }
                });
            
        }); 
    });

  


// Header-Choices
    const element = document.querySelector('.gallery-select__content')
    const choices = new Choices(element, {
        searchEnabled: false,
        shouldSort: false,
        position: 'bottom',

    });   

// Swiper
var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        grid: {
          rows: 2,
        },      
        slidesPerGroup: 6,
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
});
      

var swiper = new Swiper(".publSwiper", {
        slidesPerView: 3,
        grid: {
          rows: 1,
        },      
        slidesPerGroup: 3,
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
});

var swiper = new Swiper(".projSwiper", {
        slidesPerView: 3,
        grid: {
          rows: 1,
        },      
        slidesPerGroup: 3,
        spaceBetween: 50,
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });


//Country-btns
    document.querySelectorAll('.tabs-country__btn').forEach(function (tabsCountryBtn) {
        tabsCountryBtn.addEventListener('click', function(event){

            document.querySelectorAll('.tabs-country__btn').forEach(function (countryBtnActive) {
                countryBtnActive.classList.remove('tabs-country__btn_active')
            });

        document.querySelectorAll('.tab__item_active').forEach(function(tabItemActive) {
            tabItemActive.classList.remove('tab__item_active')
        });

        document.querySelectorAll('.accordion__btn_default').forEach(function(accBtnDef) {
            accBtnDef.classList.add('accordion__btn_default-active')
        });
            
            event.currentTarget.classList.add('tabs-country__btn_active')

            const path = event.currentTarget.dataset.path 

            document.querySelectorAll('.tab-content__item').forEach(function(tabContentItem) {
                tabContentItem.classList.remove('tab__content_active')
            }),

            document.querySelector(`[data-target="${path}"]`).classList.add('tab__content_active')


        $( function() {
            $( '.catalogue__accordion' ).accordion("refresh");
            }); 
            
        document.querySelectorAll('.tab__item_default').forEach (function (tabItemDefault) {
                tabItemDefault.classList.add('tab__item_active')
            
            });
            
        });    
    });                    



    document.querySelectorAll('.accordion__btn').forEach(function (accordionBtn)  {
        accordionBtn.addEventListener('click', function(event){
            
            document.querySelectorAll('.accordion__btn_default').forEach(function(accBtnDefActive) {
                accBtnDefActive.classList.remove('accordion__btn_default-active')
            });
            
            const path = event.currentTarget.dataset.path 
            
            document.querySelectorAll('.tab__item').forEach(function(tabItem) {
                tabItem.classList.remove('tab__item_active')
            }),
            document.querySelector(`[data-target="${path}"]`).classList.add('tab__item_active')
            
        });
    });

    document.querySelectorAll('.accordion__btn').forEach(function (accordionBtn)  {
        accordionBtn.addEventListener('keydown', function(event){
            
            
            const path = event.currentTarget.dataset.path 
            
            document.querySelectorAll('.tab__item').forEach(function(tabItem) {
                tabItem.classList.remove('tab__item_active')
            }),
            document.querySelector(`[data-target="${path}"]`).classList.add('tab__item_active')
            
        });
    });


    $( function() {
        $( ".catalogue__accordion" ).accordion({
            collapsible: true,
        });
        
    });

    document.querySelector('.events__btn').addEventListener('click', function(){
        document.querySelector('.events__btn').classList.add('events__btn_active')
        
        document.querySelectorAll('.events__list').forEach (function(eventsItem) {
            eventsItem.classList.remove('events__list_inactive')
        });
        });

    document.querySelectorAll('.publications-categories').forEach(function(publclick){
        publclick.addEventListener('click',function(event){
            event.target.classList.toggle('publications-categories_active')   
           
        });
    });
        

    document.querySelectorAll('.publications__checkbox').forEach(function (chb)  {
        chb.addEventListener('keydown',function (event) {
           const chb = event

            if (chb.checked = true) {
             chb.checked = false;
                } else {
                    chb.checked = true;
                }
        });
    });
  

        // input mask

    var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7 (999)-999-99-99");
    
    im.mask(selector);

    new JustValidate ('.contacts__form', {

        rules: {
           name: {
               required: true,
               minLength: 2,
               maxLength: 30
           },
           tel: {
               required: true,
               function: (name, value) => {
                   const phone = selector.inputmask.unmaskedvalue ()
                   return Number (phone) && phone.length ===10
               }
           },
       },
    
        messages: {
            name: 'Укажите Ваше полное имя',
            tel: 'Недопустимый формат',
        },

   });


        //    Map

        ymaps.ready(init);

        function init() {
            
            var myMap = new ymaps.Map("contactsMap", {
            center: [55.76, 37.64],
            zoom: 14
            });
            

            var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/contacts/myPlacemark.svg',
            // Размеры метки.
            iconImageSize: [20, 20],
            
            });

        myMap.geoObjects.add(myPlacemark);
        }
})