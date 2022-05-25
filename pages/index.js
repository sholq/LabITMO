/*import Popup from "../components/Popup";*/

class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    document.addEventListener("keydown", this._handleEscClose);
    this._popup.classList.add("popup__opened");
  }

  close() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._popup.classList.remove("popup__opened");
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("closeButton")) {
        this.close();
      }
      if (evt.target.classList.contains("popup__opened")) {
        this.close();
      }
    });
  }
}

const burgerButton = document.querySelector(".header__burger-button");
const socialDataAnalyseButton = document.querySelector("#socialDataAnalyseButton");

//создание экземпляра класса и установка слушателей на закрытие
const socialDataAnalyse = new Popup(".popup_type_laboratory");
socialDataAnalyse.setEventListeners();
socialDataAnalyseButton.addEventListener("click", () => {
  socialDataAnalyse.open();
})

const burgerPopup = new Popup(".menu");
burgerPopup.setEventListeners();
burgerButton.addEventListener("click", () => {
  burgerPopup.open();
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    padding: "1.5rem",
    wheel: true,
  });
  splide.mount();
});
