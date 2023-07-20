const input = document.querySelector('.date__input-field');
const button = document.querySelector('.date__input-button');
const timer = document.querySelector('.timer');

function CountDown(date) {
  this.now = new Date();
  this.end = new Date(date);
  this.distance = this.end - this.now;
  this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
  this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
  this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
  this.format = (value) => {
    if (value.toString().length < 2) {
      return `0${value}`;
    };
    return value;
  }
};

let initialCountdown = setInterval(() => {
  let start = new CountDown('07-10-2030');
  showTimer(start);
}, 1000);

function changeTargetDate() {
  let value = input.value;
  if (value) {
    clearInterval(initialCountdown);
    initialCountdown = setInterval(() => {
      let start = new CountDown(value);
      showTimer(start);
    }, 1000);
  }
};

button.addEventListener('click', changeTargetDate);

function showTimer(start) {
  timer.children[0].innerHTML = `${start.days}<p>days</p>`;
  timer.children[1].innerHTML = `${start.format(start.hours)}<p>hours</p>`;
  timer.children[2].innerHTML = `${start.format(start.minutes)}<p>minutes</p>`;
  timer.children[3].innerHTML = `${start.format(start.seconds)}<p>seconds</p>`;
  timer.children[4].innerHTML = `${
    start.end.toLocaleDateString(
      undefined, 
      {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }
    )
  }<p>target</p>`;
};
