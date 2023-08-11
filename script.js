const popup = document.querySelector('.popup');// общий класс попап
const popupProfileForms = document.querySelectorAll('.popup__edit-form');// форма общая для редактирования
const elementsGrid = document.querySelector('.elements-grid');// общий контейнер для будущих карточек
const editProfileForm = document.querySelector('#editProfileForm'); // форма для редактирования профиля
const addCardForm = document.querySelector('#addCardForm'); // форма для добавления картинки
const insertedName = document.querySelector('.popup__input_text_person-name'); // имя в попапе(текст)
const insertedDescription = document.querySelector('.popup__input_text_description'); // описание в попапе(текст)
const profileName = document.querySelector('.profile__name-text'); // имя в профиле(текст)
const profileDescription = document.querySelector('.profile__description-text'); // описание в профиле(текст)
const nameOfImgText = document.querySelector('.new-place-popup_text_place-name'); // поле ввода имени
const urlOfCardText = document.querySelector('.new-place-popup_text_place-img-url'); // поле ввода URL изображения
const profileEditButton = document.querySelector('.profile__change-button'); // кнопка изменения Профиля
const popupCloseButtons = document.querySelectorAll('.popup__close-button'); // кнопка Close
const popupSaveButton = document.querySelector('.popup__save-button'); // кнопка сохранить(Изменение профиля)
const addCardButton = document.querySelector('.profile__add-button'); // открыть добавление карточек
const addNewCardButton = document.querySelector('.new-place-popup__add-button'); // подтвердить добавление карточки
const addPhotoPopup = document.querySelector('.popup_type-new-place');// создание новой карточки
const bigImgPopup = document.querySelector('.popup_type-big');// режим BigPicture
const editProfilePopup = document.querySelector('.popup_type-edit');// редактирование ProfileName


const initialCards = [
  {
    name: 'Passat B1',
    link: 'https://images.honestjohn.co.uk/imagecache/file/crop/1200x800/media/5642574/Volkswagen~Passat~B1~(1).jpg'
  },
  {
    name: 'Passat B2',
    link: 'https://cdn.matador.tech/source/gallery/6093/4254/original.jpg'
  },
  {
    name: 'Passat B3',
    link: 'https://drive.place/images/volkswagen/volkswagen_passat_b3_wagon_5_1.jpg'
  },
  {
    name: 'Passat B4',
    link: 'https://a.d-cd.net/b02cf1s-960.jpg'
  },
  {
    name: 'Passat B5',
    link: 'https://nalogauto.ru/images/photos/4760865.jpg'
  },
  {
    name: 'Passat B6',
    link: 'https://cool-shina.ru/wp-content/uploads/9/9/3/993c8c8ad58086fb4f8eaa837b85e026.jpeg'
  },
  {
    name: 'Passat B7',
    link: 'https://carsweek.ru/upload/iblock/572/5725f0f6387a65892def7ed017e8ad7a.jpg'
  },
  {
    name: 'Passat B8',
    link: 'https://drive.place/images/volkswagen/volkswagen_passat_b8_wagon_5_17.jpg'
  }
  ];;

function transferTextFromPopup() {
  profileName.textContent = insertedName.value;
  profileDescription.textContent = insertedDescription.value;
  closePopup(editProfilePopup);
}

function transferTextFromHeader() {
    insertedName.value = (profileName.textContent)
    insertedDescription.value = (profileDescription.textContent);
}

function closePopup(anyPopup) {
    anyPopup.classList.add('popup_transition');
    anyPopup.classList.toggle('popup_opened');
}

function openPopup(whatToOpen) {
    whatToOpen.classList.toggle('popup_opened');
}

popupCloseButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

editProfileForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    transferTextFromPopup();
    evt.target.reset();
});

addCardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const cardName = nameOfImgText.value;
    const imageUrl = urlOfCardText.value;
    addCard(cardName, imageUrl);
    evt.target.reset();
});

addCardButton.addEventListener('click', function () {
    openPopup(addPhotoPopup);
});

profileEditButton.addEventListener('click', function () {
    openPopup(editProfilePopup), transferTextFromHeader();
});

function addCard(nameFromPopup, urlFromPopup) {
    const cardTemplate = document.querySelector('#card-template').content;
    const card = cardTemplate.querySelector('.card-grid').cloneNode(true);
    card.querySelector('.card-grid__desctiption-text').textContent = nameFromPopup;
    card.querySelector('.card-grid__image').src = urlFromPopup;

    card.querySelector('.card-grid__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('card-grid__like-button_active');
    });

    card.querySelector('.card-grid__trash-button').addEventListener('click', function (evt) {
        const eventTarget = evt.target;
        const parentElement = eventTarget.parentElement
        parentElement.remove();
    });

    card.querySelector('.card-grid__image').addEventListener('click', function (evt) {
        const imgUrl = evt.target.src;
        bigImgPopup.classList.toggle('popup_opened');
        const mainImg = document.querySelector('.big-popup__main-image');
        mainImg.src = imgUrl;
        document.querySelector('.big-popup__text').textContent = card.querySelector('.card-grid__desctiption-text').textContent;
    });

    elementsGrid.prepend(card);
    closePopup(addPhotoPopup);
    return card;
}


document.addEventListener('DOMContentLoaded', () => {
    for (let i = initialCards.length - 1; i >= 0; i--) {
        addCard(initialCards[i].name, initialCards[i].link);
    }
});
