// Этот скрипт должен выполняться в браузере!
document.addEventListener('DOMContentLoaded', function() {
    // Функция закрытия попапа
    function closePopup() {
        document.querySelector('.popup').style.display = 'none';
        document.querySelector('.popup-overlay').style.display = 'none';
    }

    // Назначение обработчиков
    const closeButton = document.getElementById('closePopup');
    if (closeButton) {
        closeButton.addEventListener('click', closePopup);
    }

    const overlay = document.querySelector('.popup-overlay');
    if (overlay) {
        overlay.addEventListener('click', closePopup);
    }

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