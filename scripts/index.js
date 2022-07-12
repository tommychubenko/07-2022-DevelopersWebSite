const burgerBtn = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");
const mobileLink = document.querySelectorAll(".mobile-menu_link");

const servicesLink = document.querySelectorAll(".services_link");
const stepsLeftBtn = document.querySelector(".steps_controls--left");
const stepsRightBtn = document.querySelector(".steps_controls--right");
const samplesLeftBtn = document.querySelector(".samples_controls--left");
const samplesRightBtn = document.querySelector(".samples_controls--right");

const controlBtn = document.querySelectorAll(".controlBtn");

const ulWithCards = document.querySelector(".steps_list");
const saplesUlCards = document.querySelector(".samples_list");

let animationIterationNumber = 1;
let iterationPosition = 0;
let stepsCardWidth = 371;
let display = window.innerWidth;

if (display >= 1200) {
  stepsCardWidth = 600;
}

let samplesIterationNumber = 1;
let samplesIterationPosition = 0;
const samplesCardWidth = 345;

function openInfo(e) {
  e.currentTarget.children[0].classList.toggle("is-hidden");
  e.currentTarget.children[1].classList.toggle("visible");
}

servicesLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    openInfo(e);
  });
});

// ----- Steps btns functionality

function slideRight() {
  ulWithCards;
  ulWithCards.classList.add("slide-right");

  if (animationIterationNumber < 5 && display < 768) {
    ulWithCards.style.transform = `translateX(${
      iterationPosition - stepsCardWidth
    }px)`;
    animationIterationNumber += 1;
    iterationPosition -= stepsCardWidth;
  } else if (animationIterationNumber < 4 && display >= 768) {
    ulWithCards.style.transform = `translateX(${
      iterationPosition - stepsCardWidth
    }px)`;
    animationIterationNumber += 1;
    iterationPosition -= stepsCardWidth;
  } else if (animationIterationNumber < 5 && display >= 1200) {
    ulWithCards.style.transform = `translateX(${
      iterationPosition - stepsCardWidth
    }px)`;
    animationIterationNumber += 1;
    iterationPosition -= stepsCardWidth;
  }
}

function slideLeft() {
  ulWithCards.classList.add("slide-left");
  if (animationIterationNumber > 1) {
    ulWithCards.style.transform = `translateX(${
      iterationPosition + stepsCardWidth
    }px)`;

    animationIterationNumber -= 1;
    iterationPosition += stepsCardWidth;
  }
}

// --------- Samples btns functionality

function samplesSlideRight() {
  if (samplesIterationNumber < 2) {
    saplesUlCards.style.transform = `translateX(${
      samplesIterationPosition - samplesCardWidth
    }px)`;

    samplesIterationNumber += 1;
    samplesIterationPosition -= samplesCardWidth;
  }
}

function samplesSlideLeft() {
  if (samplesIterationNumber > 1) {
    saplesUlCards.style.transform = `translateX(${
      samplesIterationPosition + samplesCardWidth
    }px)`;

    samplesIterationNumber -= 1;
    samplesIterationPosition += samplesCardWidth;
  }
}

function burgerMenuFunctionality() {
  mobileMenu.classList.toggle("translateY0");
  body.classList.toggle("noScroll");
}
function changeBtnColor() {}

//------- Steps section controls
stepsRightBtn.addEventListener("click", () => {
  slideRight();
});

stepsLeftBtn.addEventListener("click", () => {
  slideLeft();
});

//------- Sample section controls

samplesRightBtn.addEventListener("click", () => {
  samplesSlideRight();
});

samplesLeftBtn.addEventListener("click", () => {
  samplesSlideLeft();
});

burgerBtn.addEventListener("click", burgerMenuFunctionality);

mobileLink.forEach((link) => {
  link.addEventListener("click", burgerMenuFunctionality);
});

controlBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.children[0].children[1].attributes[1].value = "white";
    setTimeout(() => {
      btn.children[0].children[1].attributes[1].value = "black";
    }, 250);
    btn.children[0].attributes[3].value = "#67AEFC";
    setTimeout(() => {
      btn.children[0].attributes[3].value = "none";
    }, 250);
  });
});
