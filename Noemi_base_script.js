// Этот скрипт должен выполняться в браузере!
// Назначение обработчиков для Pop-up
document.addEventListener('DOMContentLoaded', function() {
    const popupContainer = document.querySelector('.popup_container');

    function openPopup() {
        popupContainer.classList.remove('popup_hidden');
    }

    function closePopup() {
        popupContainer.classList.add('popup_hidden');
    }

    // Изначально скрываем попап
    popupContainer.classList.add('popup_hidden');

    // Обработчик открытия (по клику на бургер)
    const burger = document.querySelector('.burger');
    if (burger) {
        burger.addEventListener('click', openPopup);
    }
    // Обработчик открытия по клику на меню
    const menu = document.querySelector('.menu');
    if (menu) {
        menu.addEventListener('click', openPopup);
    }
    // Обработчик закрытия по кресту и затемнению
    const closeButton = document.querySelector('.popup_close');
    if (closeButton) {
        closeButton.addEventListener('click', closePopup);
    }
    const overlay = document.querySelector('.popup_overlay');
    if (overlay) {
        overlay.addEventListener('click', closePopup);
    }


    // Обработка формы
    const form = document.getElementById('feedbackForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Форма отправлена!');
            closePopup();
        });
    }

    console.log('Скрипт успешно загружен!');
});
