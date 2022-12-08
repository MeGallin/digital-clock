const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const amPmEl = document.getElementById('am-pm');

const digitalClock = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  hoursEl.innerText = hours;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;

  hours = hours <= 12 ? (hoursEl.innerText = '0' + hours) : hours;
  seconds = seconds <= 9 ? (secondsEl.innerText = '0' + seconds) : seconds;
  minutes = minutes <= 9 ? (minutesEl.innerText = '0' + minutes) : minutes;

  if (hours >= 12) {
    amPmEl.innerText = 'PM';
  } else {
    amPmEl.innerText = 'AM';
  }

  setTimeout(() => {
    digitalClock();
  }, 1000);
};

digitalClock();
