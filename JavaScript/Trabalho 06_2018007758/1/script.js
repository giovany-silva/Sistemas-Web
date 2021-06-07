function onClickEsquerdo(){
 
  var livro = document.getElementsByClassName("livro");
  var paginas = document.getElementsByClassName("paginas");
  for( i=0;i<livro.length;i++){
  livro[i].style.backgroundColor='blue';
  paginas[i].style.backgroundColor='white';  
  }
}
function onClickDireito(){
  var livro = document.getElementsByClassName("livro");
  var paginas = document.getElementsByClassName("paginas");
  for( i=0;i<paginas.length;i++){
  paginas[i].style.backgroundColor='green';
  livro[i].style.backgroundColor='white';
  
  }
   
}

  var cabecalho = document.getElementsByTagName("th");
  var colunas = document.getElementsByTagName("td");

  for(let i = 0;i<colunas.length;i++){
    if(colunas[i].classList[0]=="livro"){
    colunas[i].addEventListener('click',onClickEsquerdo);
    }else 
     colunas[i].addEventListener('click',onClickDireito);
   
  } 
 cabecalho[0].addEventListener('click',onClickEsquerdo);
 cabecalho[1].addEventListener('click',onClickDireito);

