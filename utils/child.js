function getRandomIntRange() {
  return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
}

function obtenerNumAleatorios(cant) {
  let numeros = [];
  for (let i = 1; i < cant; i++) {
    const num = getRandomIntRange();
    numeros.push(num);
  }
  return numeros;
}

setTimeout(() => {
  process.send(obtenerNumAleatorios(cant));
}, 5000);
