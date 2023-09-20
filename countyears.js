const dayEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYearData = new Date("Jan 1, 2024,00:00:00").getTime();

function updateYears() {
  const now = new Date().getTime();
  const gap = newYearData - now;
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const day = hours * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hours);
  const m = Math.floor((gap % hours) / minutes);
  const s = Math.floor((gap % minutes) / seconds);

  dayEl.innerText = d;
  hoursEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;

  setTimeout(() => {
    updateYears();
  }, 1000);
}
updateYears();
