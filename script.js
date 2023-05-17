// variáveis 
const elementoRespostas = document.querySelector('#message');
const open = document.querySelector("#open");
const again = document.querySelector("#again");
const first1 = document.querySelector(".first1");
const first2 = document.querySelector(".first2");
var respostas = [
  'A vida trará coisas boas se tiver paciência.',
  'Não compense na ira o que lhe falta na razão.', 
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'Não há que ser forte. Há que ser flexível.',
  'A juventude não é uma época da vida, é um estado de espírito.'
]

//eventos
open.addEventListener('click', toggleFirst1);
again.addEventListener('click', toggleFirst2);

function toggleFirst1() {
    numeroAleatorio = Math.floor(Math.random() * respostas.length)
    handleAnswer()
    toggleFirst2()
}

function handleAnswer() {
    elementoRespostas.innerHTML = respostas[numeroAleatorio]
}


function toggleFirst2() {
    toggleFirst()
}


function toggleFirst() {
    first1.classList.toggle("hide");
    first2.classList.toggle("hide");


}
