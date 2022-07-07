const servicesLink = document.querySelectorAll(".services_link");
const stepsLeftBtn = document.querySelector(".steps_controls--left");
const stepsRightBtn = document.querySelector(".steps_controls--right");
const samplesLeftBtn = document.querySelector(".samples_controls--left");
const samplesRightBtn = document.querySelector(".samples_controls--right");

const ulWithCards = document.querySelector(".steps_list");
const saplesUlCards = document.querySelector(".samples_list");

let animationIterationNumber = 1;
let iterationPosition = 0;
const stepsCardWidth = 371;

let samplesIterationNumber = 1;
let samplesIterationPosition = 0;
const samplesCardWidth = 826;

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
  if (animationIterationNumber < ulWithCards.children.length) {
    ulWithCards.animate(
      [
        // keyframes
        { transform: `translateX(${iterationPosition - stepsCardWidth}px)` },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
        fill: "forwards",
      }
    );
    animationIterationNumber += 1;
    iterationPosition -= stepsCardWidth;
  }
  console.log(iterationPosition);
}

function slideLeft() {
  if (animationIterationNumber > 1) {
    ulWithCards.animate(
      [
        // keyframes
        { transform: `translateX(${iterationPosition + stepsCardWidth}px)` },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
        fill: "forwards",
      }
    );
    animationIterationNumber -= 1;
    iterationPosition += stepsCardWidth;
  }
  console.log(iterationPosition);
}

// --------- Samples btns functionality

function samplesSlideRight() {
  if (samplesIterationNumber < 2) {
    saplesUlCards.animate(
      [
        // keyframes
        {
          transform: `translateY(${
            samplesIterationPosition - samplesCardWidth
          }px)`,
        },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
        fill: "forwards",
      }
    );
    samplesIterationNumber += 1;
    samplesIterationPosition -= samplesCardWidth;
  }
  console.log(samplesIterationPosition);
}

function samplesSlideLeft() {
  if (samplesIterationNumber > 1) {
    saplesUlCards.animate(
      [
        // keyframes
        {
          transform: `translateY(${
            samplesIterationPosition + samplesCardWidth
          }px)`,
        },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
        fill: "forwards",
      }
    );
    samplesIterationNumber -= 1;
    samplesIterationPosition += samplesCardWidth;
  }
  console.log(samplesIterationPosition);
}

//------- Steps section controls
stepsRightBtn.addEventListener("click", () => {
  slideRight();
  console.log(animationIterationNumber);
});

stepsLeftBtn.addEventListener("click", () => {
  slideLeft();
  console.log(animationIterationNumber);
});

//------- Sample section controls

samplesRightBtn.addEventListener("click", () => {
  samplesSlideRight();
});

samplesLeftBtn.addEventListener("click", () => {
  samplesSlideLeft();
});
