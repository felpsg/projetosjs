const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOf');
const lamp = document.getElementById('lamp');

function lampQuebrada() {
  return lamp.src.indexOf('quebrada') > 1;
}

function lampOn() {
  if (!lampQuebrada()) {
    lamp.src = '/lamp/img/ligada.jpg';
  }
}

function lampOf() {
  if (!lampQuebrada()) {
    lamp.src = '/lamp/img/desligada.jpg';
  }
}

function lampBroken() {
  lamp.src = '/lamp/img/quebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOf);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOf);
lamp.addEventListener('dblclick', lampBroken);