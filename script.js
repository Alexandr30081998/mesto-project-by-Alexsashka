const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupEditButton = document.querySelector('.profile__change-button');
const addPhotoPopup = document.querySelector('.new-place-popup');
const popupImagecloseButton = addPhotoPopup.querySelector('.new-place-popup__close-button');
const imageEditButton = document.querySelector('.profile__add-button');
const addNewCardButton = document.querySelector('.new-place-popup__add-button');
const popupSaveButton = document.querySelector('.popup__save-button');
const profileName = document.querySelector('.profile__name-text');
const profileDescriptionText = document.querySelector('.profile__description-text');
const insertedName = document.querySelector('.popup__input_text_person-name');
const insertedDescription = document.querySelector('.popup__input_text_description');
const likeButtton = document.querySelector('.card-grid__like-button');

function closePopup() {
  popup.classList.toggle('popup_opened');
  transferTextFromHeader();
}

function openPopup() {
  popup.classList.toggle('popup_opened');
}

function openAddPhotoPopup() {
  addPhotoPopup.classList.toggle('popup_opened');
}

function closeAddPhotoPopup() {
  addPhotoPopup.classList.toggle('popup_opened');
}


//Текст из профиля в попап
function transferTextFromHeader() {
  insertedName.value = (profileName.textContent)
  insertedDescription.value = (profileDescriptionText.textContent)
}
transferTextFromHeader();

//Текст из попапа в профиль
function transferTextFromPopup(event) {
  profileName.textContent = insertedName.value
  profileDescriptionText.textContent = insertedDescription.value
  closePopup()
  event.preventDefault()
}


//Закрыть попап
popupEditButton.addEventListener('click', closePopup);

//Открыть попап
popupCloseButton.addEventListener('click', openPopup);

//Закрыть попап добавления картинки
popupImagecloseButton.addEventListener('click', closeAddPhotoPopup);

//Открыть попап добавления картинки
imageEditButton.addEventListener('click', openAddPhotoPopup);

//Сохранить в попапе
popupSaveButton.addEventListener('click', transferTextFromPopup);

//Лайк
likeButtton.addEventListener('click', like);
