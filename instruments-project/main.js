// setupCounter(document.querySelector('#counter'))
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavHidden = document.querySelector(".primary-navigation-hidden");
const playBtn = document.querySelector(".play-btn");
const videoOne = document.querySelector(".video-one");
const videoWrapper = document.querySelector(".video-wrapper");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

playBtn.addEventListener("click", function () {
  if (videoOne.paused) videoOne.play();
  else videoOne.pause();
});

//open modal
// const openModal = function () {
//   modal.classList.remove("hide");
//   overlay.classList.remove("hide");
// };

const showCloseModal = function () {
  modal.classList.toggle("hide");
  overlay.classList.toggle("hide");
};

//close modal
const closeModal = function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
};

navToggle.addEventListener("click", showCloseModal);
overlay.addEventListener("click", closeModal);
