const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');


// Клик по кнопкам с подсказками
for (let btn of infoBtns) {
    btn.addEventListener('click', showHint);
}

function showHint(e) {
    e.stopPropagation();

    // Скрыть все
    for (let hint of infoHints) {
        hint.classList.add('none')
    }

    // Показать текущую
    this.parentNode.querySelector('.info-hint').classList.toggle('none')
}

// Закрываем подсказки при клику по всей документу
document.addEventListener('click', closeHints);

function closeHints() {
    for (let hint of infoHints) {
        hint.classList.add('none')
    }
}

// Запрещаем всплытие события клика наверх при клике на подсказки 
for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation());
}

const swiper = new Swiper('.swiper', {

    loop: true,
    freeMode: true,

    slidesPerView: 1,
    spaceBetween: 42,
  
    breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1230: {
          slidesPerView: 4,
          spaceBetween: 42,
        },
      },


    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },

  });


// Tabs 
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

console.log(tabsBtns);
console.log(tabsProducts);

for(let btn of tabsBtns) {


    btn.addEventListener('click', function() {

        // Убираем активные классы у всех кнопок 
        for(let btn of tabsBtns) {
            btn.classList.remove('tab-conrols__btn--active');
        }
        // Добавялем активный класс к текущей кнопке
        this.classList.add('tab-conrols__btn--active');

        // Отобразить нужные товары и Скрыть не нужные 

        for (let product of tabsProducts) {

            // ПРоерка на отоброажение всех слайдов
            if (this.dataset.tab === 'all') {
                product.classList.remove('none');
            } else {

                if(product.dataset.tabValue === this.dataset.tab) {
                    product.classList.remove('none');
                } else {
                    product.classList.add('none')
                }
            }

        }
        // Update Swiper
        swiper.update()

    })
}

// Mobile Nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function () {
    mobileNav.classList.add('mobile-nav-wraper--open')
}

mobileNavCloseBtn.onclick = function () {
    mobileNav.classList.remove('mobile-nav-wraper--open')
}
