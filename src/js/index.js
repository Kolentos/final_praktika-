


console.log('Works!')



document.addEventListener('DOMContentLoaded', function () {
    if (window.matchMedia("(orientation: landscape) and (min-width: 440px)").matches) {
        console.log('Ширина > 440, выходим, Swiper не запускаем');
    // экран шире 768px — слайдер не нужен, просто выходим
    return;
  }
  //else 
console.log('Ширина <= 440, создаём Swiper');
    const brend__lineSwiper = new Swiper('.brend__line', {
    // сколько слайдов видно одновременно
    slidesPerView: 1.25,

    // расстояние между слайдами в пикселях
    spaceBetween: 16,

    // по желанию: листать по кругу или нет
    loop: false,

    pagination: {
    el: '.brend__line .swiper-pagination',
  },
  });

   const big__swiper = new Swiper('.service__swiper', {
    // сколько слайдов видно одновременно
    slidesPerView: 1.23,

    // расстояние между слайдами в пикселях
    spaceBetween: 16,

    // по желанию: листать по кругу или нет
    loop: false,

    pagination: {
    el: '.service__swiper .swiper-pagination',
  },
  });
  const price__swiper = new Swiper('.price__swiper', {
    // сколько слайдов видно одновременно
    slidesPerView: 1.23,

    // расстояние между слайдами в пикселях
    spaceBetween: 16,

    // по желанию: листать по кругу или нет
    loop: false,

    pagination: {
    el: '.price__swiper .swiper-pagination',
  },
  });

});
document.addEventListener('DOMContentLoaded', () => {
  const showAll = document.querySelector('.show_all');
  if (!showAll) return;

  const showAllText = showAll.querySelector('p');
  const hiddenSlides = document.querySelectorAll('.brend__line__block.hidden');

  showAll.addEventListener('click', () => {
    if (!hiddenSlides.length) return;

    const isOpening = hiddenSlides[0].classList.contains('hidden');

    hiddenSlides.forEach(slide => {
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
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('mobileMenu');      // добавь id в HTML
  const overlay = document.getElementById('modalOverlay');

  const openBtn = document.getElementById('burgerOpen');   // добавь кнопку открытия
  const closeBtn = menu?.querySelector('.mobile_menu_button_close_dekstop');

  function openMenu() {
    menu.classList.add('mobile-menu--open');
    overlay?.classList.add('modal-overlay--open');
  }

  function closeMenu() {
    menu.classList.remove('mobile-menu--open');
    overlay?.classList.remove('modal-overlay--open');
  }

  openBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {999
    if (e.key === 'Escape') closeMenu;
  });
});












document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('feedbackForm');
  const submitBtn = form.querySelector('.price__swiper__slide__button');
  const successMsg = document.getElementById('successMsg');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    submitBtn.style.opacity = '0.7';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      successMsg.style.display = 'block';
      form.reset();
      submitBtn.style.opacity = '1';
      submitBtn.disabled = false;
    }, 1500);
  });
});





document.addEventListener('DOMContentLoaded', function() {
  // 🎯 СОЗДАЕМ ОБРАБОТЧИКИ ДЛЯ КАЖДОЙ МОДАЛКИ
  setupModal('.header__icon_remont', 'feedbackModal');
  setupModal('.header__icon_search', 'feedbackModal__search');
  setupModal('.qq', 'feedbackModal');
  setupModal('.qv', 'feedbackModal__search');
  setupModal('.wer', 'feedbackModal__search');
  
  function setupModal(openSelector, modalId) {
    const openIcon = document.querySelector(openSelector);
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById('modalOverlay');
    const form = modal?.querySelector('.feedback-form');
    const submitBtn = form?.querySelector('.feedback-form__submit, .price__swiper__slide__button');
    const successMsg = modal?.querySelector('.feedback-block__success');
    const closeIcon = modal?.querySelector('.modal_button_close'); // ← КНОПКА В ЭТОЙ МОДАЛКЕ!

    // ✅ Функция закрытия для ЭТОЙ модалки
    function closeThisModal() {
      modal.classList.remove('feedback-modal--open');
      if (overlay) overlay.classList.remove('modal-overlay--open');
      if (successMsg) successMsg.style.display = 'none';
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
      }
    }

    // ✅ ОТКРЫТИЕ
    if (openIcon) {
      openIcon.addEventListener('click', () => {
        modal.classList.add('feedback-modal--open');
        if (overlay) overlay.classList.add('modal-overlay--open');
        console.log('Работает клик');
      });
    }

    // ✅ ЗАКРЫТИЕ — ТОЛЬКО ЭТА КНОПКА!
    if (closeIcon) {
      closeIcon.addEventListener('click', closeThisModal);
    }

    // ✅ ОТПРАВКА ФОРМЫ
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.style.opacity = '0.7';
        }
        
        setTimeout(() => {
          form.reset();
          if (successMsg) successMsg.style.display = 'block';
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
          }
          
          setTimeout(() => {
            closeThisModal();
          }, 3000);
        }, 1500);
      });
    }

    // Overlay и ESC для этой модалки
    if (overlay) {
      overlay.addEventListener('click', closeThisModal);
    }
  }

  // ✅ ГЛОБАЛЬНЫЙ ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.feedback-modal--open').forEach(modal => {
        modal.classList.remove('feedback-modal--open');
        const overlay = document.getElementById('modalOverlay');
        if (overlay) overlay.classList.remove('modal-overlay--open');
      });
    }
  });
});
