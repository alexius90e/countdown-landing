const deadlineDate = new Date('2024-07-21');

function updateCounter() {
  const t = Date.parse(deadlineDate) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  const daysStr = days < 10 ? `0${days}` : `${days}`;
  const result = [daysStr, hoursStr, minutesStr, secondsStr].join(':');
  const counterTimeElem = document.querySelector('.counter__time');
  if (counterTimeElem) counterTimeElem.innerText = result;
}

updateCounter();

setInterval(updateCounter, 1000);
