const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupEditButton = document.querySelector('.profile__change-button');

function closePopup() {
  popup.classList.toggle('popup_opened');
  transferTextFromHeader();
}

function openPopup() {
  popup.classList.toggle('popup_opened');
}


//Закрыть попап
popupEditButton.addEventListener('click', closePopup);

//Открыть попап
popupCloseButton.addEventListener('click', openPopup);

