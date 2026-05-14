// script.js

const slides = [

  {
    title: "Feminicídio no Brasil",

    text:
    "O feminicídio é o assassinato de mulheres motivado pela violência de gênero. Esse crime geralmente acontece em ambientes domésticos e familiares.",

    extra:
    "O Brasil está entre os países com maiores índices de violência contra mulheres no mundo."
  },

  {
    title: "Dados Alarmantes",

    text:
    "Milhares de mulheres sofrem violência todos os anos. Muitos casos acontecem dentro da própria casa da vítima.",

    extra:
    "Grande parte dos crimes é cometida por parceiros ou ex-parceiros."
  },

  {
    title: "Violência Psicológica",

    text:
    "A violência não começa apenas com agressões físicas. Manipulação, ameaças, humilhações e controle excessivo também são formas de violência.",

    extra:
    "Reconhecer os sinais cedo pode ajudar a salvar vidas."
  },

  {
    title: "Lei Maria da Penha",

    text:
    "A Lei Maria da Penha foi criada para proteger mulheres vítimas de violência doméstica e garantir punições mais severas.",

    extra:
    "A lei também oferece medidas protetivas para afastar o agressor."
  },

  {
    title: "Importância da Denúncia",

    text:
    "Denunciar casos de violência ajuda a proteger vítimas e impedir novos crimes.",

    extra:
    "No Brasil, denúncias podem ser feitas pelo telefone 180 de forma gratuita e confidencial."
  },

  {
    title: "Conscientização",

    text:
    "Combater o feminicídio depende da educação, do respeito e da conscientização da sociedade.",

    extra:
    "Todos têm responsabilidade no combate à violência contra a mulher."
  }

];

let currentSlide = 0;

const title = document.getElementById("title");
const text = document.getElementById("text");
const extra = document.getElementById("extra");
const counter = document.getElementById("counter");

function loadSlide(){

  title.innerText = slides[currentSlide].title;

  text.innerText = slides[currentSlide].text;

  extra.innerText = slides[currentSlide].extra;

  counter.innerText =
  `${currentSlide + 1} / ${slides.length}`;

}

function nextSlide(){

  if(currentSlide < slides.length - 1){

    currentSlide++;

    loadSlide();

  }

}

function prevSlide(){

  if(currentSlide > 0){

    currentSlide--;

    loadSlide();

  }

}

loadSlide();