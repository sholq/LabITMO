export default class Popup {
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
      //будет работать с попапами ниже,для закрытия попапа по оверлею
      /*if (evt.target.classList.contains('popup__opened')) {
                this.close();
            }*/
      if (evt.target.classList.contains("popup__closer")) {
        this.close();
      }
    });
  }
}
