const showInputError = (inputEl, formEl, errorMsg) => {
  const errorMsgEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorMsgEl.textContent = errorMsg;
  inputEl.classList.add("modal__input_type_error");
};

const hideInputError = (inputEl, formEl) => {
  const errorMsgEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorMsgEl.textContent = "";
  inputEl.classList.remove("modal__input_type_error");
};

const checkInputValidity = (formEl, inputEl) => {
  if(!inputEl.validity.valid) {
    showInputError(inputEl, formEl, inputEl.validationMessage);
  } else {
    hideInputError(inputEl, formEl);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

const toggleButtonState = (inputList, btnEl) => {
  if (hasInvalidInput(inputList)) {
    disableBtn(btnEl);
  } else {
    btnEl.disabled = false;
    // Remove the disabled class from the btnEl
     }
   };

const disableBtn = (btnEl) => {
  btnEl.disabled = true
    // Add a modifie class to the btnEl to make it grey
   // Don't forget the CSS
}

const resetValidation = (formEl, inputList) => {
  inputList.forEach((input) => {
    hideInputError(inputEl, formEl);
  });
};

const setEventListeners = (formEl) => {
 const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
 const btnEl = formEl.querySelector(".modal__submit-btn");
//Handle Initial State
 toggleButtonState(inputList, btnEl);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", function () => {
      checkInputValidity(formEl, inputEl);
      toggleButtonState(inputList, btnEl);
    });
  });
};

const enableValidation= () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formEl) => {
    setEventListeners(formEl);
});
};

enableValidation();
