// selecionando os elementos que vamos manipular
let digitalElement = document.querySelector('.digital');
let clockHourElement = document.querySelector('.p_h');
let clockMinuteElement = document.querySelector('.p_m');
let clockSecondElement = document.querySelector('.p_s');


// função para ir atualizando os ponteiros do relogio
function updateClock() {
  let now = new Date();
  
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;


  let secondsDeg = ((360 / 60) * second) - 90;
  let minuteDeg = ((360 / 60) * minute) - 90;
  let hourDeg = ((360 / 12 ) * hour) - 90;

  clockSecondElement.style.transform = `rotate(${secondsDeg}deg)`;
  clockMinuteElement.style.transform = `rotate(${minuteDeg}deg)`;
  clockHourElement.style.transform = `rotate(${hourDeg}deg)`;
}

// função para formatar horas, minutos e segundos com um zero a esquerda quando necessário
function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();