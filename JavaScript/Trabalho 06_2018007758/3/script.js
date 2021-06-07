function aumenta(event) {
  const galeria = document.querySelector('main');
  if(galeria.className == "little"){
   galeria.className = "middle";
  }
  else if(galeria.className == "middle"){
    galeria.className = "big";
  }

}
function diminui(event) {
  const galeria = document.querySelector('main');
  if(galeria.className == "big"){
   galeria.className = "middle";
  }
  else if(galeria.className == "middle"){
    galeria.className = "little";
  }
}

const image = document.querySelectorAll('img');
const title = document.querySelector('text');
title.classList.add("title")
image[0].classList.add("lupa");
image[1].classList.add("lupa");
image[0].addEventListener('click', aumenta);
image[1].addEventListener('click', diminui);