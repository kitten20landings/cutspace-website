const menu = document.querySelector('.menu'),
  menuStripes = document.querySelector('.menu__stripes'),
  menuStripesActive = document.querySelector('.menu__stripes_active'),
  menuMobilleContent = document.querySelector('.menu-mobile__content'),

  body = document.querySelector('body'),

  windowWidth = window.innerWidth,

  serveBlocks = document.querySelector('.serve__blocks'),
  serveBlock = document.querySelectorAll('.serve__block'),

  chooseBlock = document.querySelectorAll('.choose__block');

if (windowWidth <= 980) {
  menu.classList.add('mobile-menu');

  const mobileMenu = document.querySelector('.mobile-menu');

  menuStripes.addEventListener('click', function () {
    menuStripes.classList.toggle('menu__stripes_active');
    mobileMenu.classList.toggle('mobile-menu_active');
    menuMobilleContent.classList.toggle('menu-mobile__content_active');
  })
}

function hoverEffect(hoverItem, srcWay, fstItem, scndItem, thrdItem, frthItem) {
  let activeIco = function (srcItem) {
      let srcItemIco = document.querySelector(`.${srcItem}-${srcWay}__ico`);
      srcItemIco.setAttribute('src', `img/${srcWay}/${srcItem}__ico_active.png`);
    },

    defaultIco = function (srcItem) {
      let srcItemIco = document.querySelector(`.${srcItem}-${srcWay}__ico`);
      srcItemIco.setAttribute('src', `img/${srcWay}/${srcItem}__ico.png`);
    }

  hoverItem.forEach(function (item) {
    let mouseOverIco = function (itemBlockIco) {
      if (item == document.querySelector(`.${srcWay}__${itemBlockIco}-block`)) {
        activeIco(itemBlockIco);
      }
    }

    let mouseOutIco = function (itemBlockIco) {
      if (item == document.querySelector(`.${srcWay}__${itemBlockIco}-block`)) {
        defaultIco(itemBlockIco);
      }
    }

    item.addEventListener('mouseover', function () {
      item.classList.add(`${srcWay}__block_active`)

      mouseOverIco(fstItem);
      mouseOverIco(scndItem);
      mouseOverIco(thrdItem);
      mouseOverIco(frthItem);
    })

    item.addEventListener('mouseout', function () {
      item.classList.remove(`${srcWay}__block_active`);

      mouseOutIco(fstItem);
      mouseOutIco(scndItem);
      mouseOutIco(thrdItem);
      mouseOutIco(frthItem);
    })
  })
}

hoverEffect(serveBlock, 'serve', 'buyers', 'seller');
hoverEffect(chooseBlock, 'choose', 'performance', 'entrepreneurship', 'authenticity', 'kindness');

// swiper
let companiesSwiper = new Swiper(".companies-swiper", {
  centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});
// -----------
let spaceSwiper = new Swiper(".space-swiper", {
  loop: true,
  simulateTouch: false,
  allowTouchMove: false
});

anime({
  targets: ".space-swiper-wrapper",
  translateX: -200 + "%",
  duration: 25000,
  easing: "linear",
  loop: true
});
// swiper