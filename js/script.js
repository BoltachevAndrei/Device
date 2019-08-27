var writeToUs = document.querySelector(".button-write-to-us");
var feedback = document.querySelector(".modal-feedback");
var closeFeedback = document.querySelector(".modal-close");
var showMap = document.querySelector(".map");
var map = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map .modal-close");
var form = feedback.querySelector("form");
var userName = feedback.querySelector("[name=name]");
var email = feedback.querySelector("[name=email]");
var feedbackText = feedback.querySelector("[name=feedback]");

writeToUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("modal-show");
  userName.focus();
});

showMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("modal-show");
  feedback.classList.remove("modal-error");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value || !feedback.value ) {
    evt.preventDefault();
    feedback.classList.remove("modal-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedback.classList.contains("modal-show")) {
      feedback.classList.remove("modal-show");
      feedback.classList.remove("modal-error");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (map.classList.contains("modal-show")) {
      evt.preventDefault();
      map.classList.remove("modal-show");
    }
  }
});
