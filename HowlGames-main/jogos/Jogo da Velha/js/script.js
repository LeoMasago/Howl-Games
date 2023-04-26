const casas = document.getElementsByClassName('botao')
const botaoR = document.getElementById('botaoR')
const tela_jogador = document.getElementById('jogador') //nome do jog. na tela
var jogador = '' //jogador X ou O
var vencedor = ''

var sortJogador = function () {
  if (Math.floor(Math.random() * 2) == 0) {
    jogador = 'X'
    tela_jogador.innerText = 'Vez do jogador X'
    tela_jogador.style.color = '#D9D8D7'
  } else {
    jogador = 'O'
    tela_jogador.innerText = 'Vez do jogador O'
    tela_jogador.style.color = '#D9D8D7'
  }
}

sortJogador()

for (var i = 0; i < 9; i++) {
  casas[i].addEventListener('click', event => {
    if (event.target.value == '' && vencedor == '') {
      event.target.value = jogador
      event.target.style.color = '#fff'

      trocarJogador()
      vencedor = win()
    }
  })
}
botaoR.addEventListener('click', event => {
  for (var i = 0; i < 9; i++) {
    casas[i].value = ''
    casas[i].style.color = '#fff'
    casas[i].style.backgroundColor = '#810e0e'
  }
  vencedor = ''
  sortJogador()
})

var trocarJogador = function () {
  if (jogador == 'X') {
    jogador = 'O'
    tela_jogador.innerText = 'Vez do jogador O'
    tela_jogador.style.color = '#D9D8D7'
  } else {
    jogador = 'X'
    tela_jogador.innerText = 'Vez do jogador X'
    tela_jogador.style.color = '#D9D8D7'
  }
}

function win() {
  if (
    casas[0].value == casas[1].value &&
    casas[1].value == casas[2].value &&
    casas[0].value != ''
  ) {
    casas[0].style.backgroundColor = '#0F0'
    casas[1].style.backgroundColor = '#0F0'
    casas[2].style.backgroundColor = '#0F0'
    tela_jogador.innerHTML = 'O Jogador venceu!'
    return casas[0].value
  } else if (
    casas[3].value == casas[4].value &&
    casas[4].value == casas[5].value &&
    casas[3].value != ''
  ) {
    casas[3].style.backgroundColor = '#0F0'
    casas[4].style.backgroundColor = '#0F0'
    casas[5].style.backgroundColor = '#0F0'
    tela_jogador.innerHTML = 'O Jogador venceu!'
    return casas[3].value
  } else if (
    casas[6].value == casas[7].value &&
    casas[7].value == casas[8].value &&
    casas[6].value != ''
  ) {
    casas[6].style.backgroundColor = '#0F0'
    casas[7].style.backgroundColor = '#0F0'
    casas[8].style.backgroundColor = '#0F0'
    tela_jogador.innerHTML = 'O Jogador venceu!'
    return casas[6].value
  } else if (
    casas[0].value == casas[3].value &&
    casas[3].value == casas[6].value &&
    casas[0].value != ''
  ) {
    casas[0].style.backgroundColor = '#0F0'
    casas[3].style.backgroundColor = '#0F0'
    casas[6].style.backgroundColor = '#0F0'
    tela_jogador.innerHTML = 'O Jogador venceu!'
    return casas[0].value
  } else if (
    casas[1].value == casas[4].value &&
    casas[4].value == casas[7].value &&
    casas[1].value != ''
  ) {
    casas[1].style.backgroundColor = '#0F0'
    casas[4].style.backgroundColor = '#0F0'
    casas[7].style.backgroundColor = '#0F0'
    tela_jogador.innerHTML = 'O Jogador venceu!'
    return casas[1].value
  } else if (
    casas[2].value == casas[5].value &&
    casas[5].value == casas[8].value &&
    casas[2].value != ''
  ) {
    casas[2].style.backgroundColor = '#0F0'
    casas[5].style.backgroundColor = '#0F0'
    casas[8].style.backgroundColor = '#0F0'
    tela_jogador.innerHTML = 'O Jogador venceu!'
    return casas[2].value
  } else if (
    casas[0].value == casas[4].value &&
    casas[4].value == casas[8].value &&
    casas[0].value != ''
  ) {
    casas[0].style.backgroundColor = '#0F0'
    casas[4].style.backgroundColor = '#0F0'
    casas[8].style.backgroundColor = '#0F0'
    tela_jogador.innerHTML = 'O Jogador venceu!'
    return casas[0].value
  } else if (
    casas[2].value == casas[4].value &&
    casas[4].value == casas[6].value &&
    casas[2].value != ''
  ) {
    casas[2].style.backgroundColor = '#0F0'
    casas[4].style.backgroundColor = '#0F0'
    casas[6].style.backgroundColor = '#0F0'
    tela_jogador.innerHTML = 'O Jogador venceu!'
    return casas[2].value
  }
  return ''
}
