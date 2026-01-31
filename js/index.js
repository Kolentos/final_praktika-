/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

console.log('Works!');
document.addEventListener('DOMContentLoaded', function () {
  if (window.matchMedia("(orientation: landscape) and (min-width: 440px)").matches) {
    console.log('Ширина > 440, выходим, Swiper не запускаем'); // экран шире 768px — слайдер не нужен, просто выходим

    return;
  } //else 


  console.log('Ширина <= 440, создаём Swiper');
  var brend__lineSwiper = new Swiper('.brend__line', {
    // сколько слайдов видно одновременно
    slidesPerView: 1.25,
    // расстояние между слайдами в пикселях
    spaceBetween: 16,
    // по желанию: листать по кругу или нет
    loop: false,
    pagination: {
      el: '.brend__line .swiper-pagination'
    }
  });
  var big__swiper = new Swiper('.service__swiper', {
    // сколько слайдов видно одновременно
    slidesPerView: 1.23,
    // расстояние между слайдами в пикселях
    spaceBetween: 16,
    // по желанию: листать по кругу или нет
    loop: false,
    pagination: {
      el: '.service__swiper .swiper-pagination'
    }
  });
  var price__swiper = new Swiper('.price__swiper', {
    // сколько слайдов видно одновременно
    slidesPerView: 1.23,
    // расстояние между слайдами в пикселях
    spaceBetween: 16,
    // по желанию: листать по кругу или нет
    loop: false,
    pagination: {
      el: '.price__swiper .swiper-pagination'
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var showAll = document.querySelector('.show_all');
  if (!showAll) return;
  var showAllText = showAll.querySelector('p');
  var hiddenSlides = document.querySelectorAll('.brend__line__block.hidden');
  showAll.addEventListener('click', function () {
    if (!hiddenSlides.length) return;
    var isOpening = hiddenSlides[0].classList.contains('hidden');
    hiddenSlides.forEach(function (slide) {
      slide.classList.toggle('hidden', !isOpening);
    });
    showAllText.textContent = isOpening ? 'Скрыть' : 'Показать все';
  });
}); // вот это нормально, но тогда сверху должна быть открывающая скобка 

/*document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.querySelector('.header__icon_burger_menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtns = document.querySelectorAll('.header__icon__close__button'); / убрана запятая!

  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
       mobileMenu.style.display = 'grid';
      console.log('скрипт открытия работает')
    });
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mobileMenu.style.display = 'none';;
      document.body.style.overflow = '';
    });
  });

}); // ← убедитесь что эта скобка есть!  */
// вторая версия 

document.addEventListener('DOMContentLoaded', function () {
  var menu = document.getElementById('mobileMenu'); // добавь id в HTML

  var overlay = document.getElementById('modalOverlay');
  var openBtn = document.getElementById('burgerOpen'); // добавь кнопку открытия

  var closeBtn = menu === null || menu === void 0 ? void 0 : menu.querySelector('.mobile_menu_button_close_dekstop');

  function openMenu() {
    menu.classList.add('mobile-menu--open');
    overlay === null || overlay === void 0 || overlay.classList.add('modal-overlay--open');
  }

  function closeMenu() {
    menu.classList.remove('mobile-menu--open');
    overlay === null || overlay === void 0 || overlay.classList.remove('modal-overlay--open');
  }

  openBtn === null || openBtn === void 0 || openBtn.addEventListener('click', openMenu);
  closeBtn === null || closeBtn === void 0 || closeBtn.addEventListener('click', closeMenu);
  overlay === null || overlay === void 0 || overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) {
    999;
    if (e.key === 'Escape') closeMenu;
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('feedbackForm');
  var submitBtn = form.querySelector('.price__swiper__slide__button');
  var successMsg = document.getElementById('successMsg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.style.opacity = '0.7';
    submitBtn.disabled = true;
    setTimeout(function () {
      successMsg.style.display = 'block';
      form.reset();
      submitBtn.style.opacity = '1';
      submitBtn.disabled = false;
    }, 1500);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // 🎯 СОЗДАЕМ ОБРАБОТЧИКИ ДЛЯ КАЖДОЙ МОДАЛКИ
  setupModal('.header__icon_remont', 'feedbackModal');
  setupModal('.header__icon_search', 'feedbackModal__search');
  setupModal('.qq', 'feedbackModal');
  setupModal('.qv', 'feedbackModal__search');
  setupModal('.wer', 'feedbackModal__search');

  function setupModal(openSelector, modalId) {
    var openIcon = document.querySelector(openSelector);
    var modal = document.getElementById(modalId);
    var overlay = document.getElementById('modalOverlay');
    var form = modal === null || modal === void 0 ? void 0 : modal.querySelector('.feedback-form');
    var submitBtn = form === null || form === void 0 ? void 0 : form.querySelector('.feedback-form__submit, .price__swiper__slide__button');
    var successMsg = modal === null || modal === void 0 ? void 0 : modal.querySelector('.feedback-block__success');
    var closeIcon = modal === null || modal === void 0 ? void 0 : modal.querySelector('.modal_button_close'); // ← КНОПКА В ЭТОЙ МОДАЛКЕ!
    // ✅ Функция закрытия для ЭТОЙ модалки

    function closeThisModal() {
      modal.classList.remove('feedback-modal--open');
      if (overlay) overlay.classList.remove('modal-overlay--open');
      if (successMsg) successMsg.style.display = 'none';

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
      }
    } // ✅ ОТКРЫТИЕ


    if (openIcon) {
      openIcon.addEventListener('click', function () {
        modal.classList.add('feedback-modal--open');
        if (overlay) overlay.classList.add('modal-overlay--open');
        console.log('Работает клик');
      });
    } // ✅ ЗАКРЫТИЕ — ТОЛЬКО ЭТА КНОПКА!


    if (closeIcon) {
      closeIcon.addEventListener('click', closeThisModal);
    } // ✅ ОТПРАВКА ФОРМЫ


    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.style.opacity = '0.7';
        }

        setTimeout(function () {
          form.reset();
          if (successMsg) successMsg.style.display = 'block';

          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
          }

          setTimeout(function () {
            closeThisModal();
          }, 3000);
        }, 1500);
      });
    } // Overlay и ESC для этой модалки


    if (overlay) {
      overlay.addEventListener('click', closeThisModal);
    }
  } // ✅ ГЛОБАЛЬНЫЙ ESC


  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.feedback-modal--open').forEach(function (modal) {
        modal.classList.remove('feedback-modal--open');
        var overlay = document.getElementById('modalOverlay');
        if (overlay) overlay.classList.remove('modal-overlay--open');
      });
    }
  });
});

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map