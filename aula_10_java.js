const elementosP = document.querySelectorAll('p');

//mudança de nome ao clicar
elementosP[0].addEventListener('click', nome)
function nome(){
  let nome = prompt('Digite novo nome: ');
  elementosP[0].textContent = 'Nome da Pessoa: ' + nome;
};
//mudança de cor ao clicar
elementosP[1].addEventListener('click', clickCor) 
function clickCor(){
  elementosP[1].style.backgroundColor = "#FA7419",
  elementosP[1].style.color="#FFFFFF";
};
//mudanca de cor ao passar o mouse por cima
elementosP[2].addEventListener('mouseover',  fundo1);
function fundo1(){
  elementosP[2].style.backgroundColor = "#FA7419";
  elementosP[2].style.color = "#FFFFFF";
};

elementosP[2].addEventListener('mouseout', fundo2)
function fundo2(){
  elementosP[2].style.backgroundColor = "#F85E00";
  elementosP[2].style.color = "#FFB563";
};
/*
var contador = 0;

const elem_imagem = document.querySelector(".img_mudar");

elem_imagem.addEventListener("click", trocarImagem);
function trocarImagem() {
    if(contador ==1){
      elem_imagem.src = "lambor.png"; 
    }
    else if(contador == 2){
      elem_imagem.src = "sub.png";
    }
    else if(contador == 3){
      elem_imagem.src = "ferr.jpg";
    }
    else if(contador == 4){
      elem_imagem.src = "lamboVen.jpg";
    }
    else if(contador == 5){
      elem_imagem.src = "lamboHur.jpg";
    }
    else if(contador == 6){
      elem_imagem.src = "medu.png";
    }
    else if(contador == 7){
      contador=0;
    }
    ++contador;
};
*/
/*
const myimg = document.getElementById('carrocel');

const outra_imagem = "ferr.jpg";

let id = 0;
const todas = ["lamboVen.jpg", "lambor.png","medu.png","sub.png"];

myimg.addEventListener('click', troca_imagem);
function troca_imagem() {
    id = (id + 1) % todas.length;
    let nome = todas[id];
    myimg.src=nome;
}
//const imgsrc = myimg.getAttribute('src');
const botao = document.querySelector('button');
botao.addEventListener('click', add_imagem);
function add_imagem() {
  todas.push("ferr.jpg");

}
*/
//Aula 29/09/2023
/*##########################################################################*/

class ImageCarousel {
  constructor(elementId, initialImages) {
    this.myimg = document.getElementById(elementId);
    this.images = initialImages;
    this.id = 0;

    this.myimg.addEventListener('click', () => this.changeImage());
    const addButton = document.querySelector('button');
    addButton.addEventListener('click', () => this.addImage());
  }

  changeImage() {
    this.id = (this.id + 1) % this.images.length;
    const imageName = this.images[this.id];
    this.myimg.src = imageName;
  }
  addImageToCarousel(carouselId, imageName) {
    const carousel = carousel.find((c) => c.elementId === carouselId);
    if (carousel && imageName) {
      carousel.addImage(imageName);
    }
  }
  
}

// Crie três instâncias independentes de carrosséis de imagens
const carousel1 = new ImageCarousel('carrocel1', ["lamboVen.jpg", "lambor.png"]);
const carousel2 = new ImageCarousel('carrocel2', ["medu.png", "morte.jpg", "olho.jpg"]);
const carousel3 = new ImageCarousel('carrocel3', ["st.jpg", "pl.png", "sub.png"]);

