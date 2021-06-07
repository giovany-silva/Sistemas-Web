function onClick(){
 
  var campos = document.getElementsByTagName("input");
  var novaLinha = document.createElement("text");  
  var tabela = document.getElementById("lista");      

  for (i=0; i<campos.length; i++){
    
    if(campos[i].value!=""){
      var novoDado = document.createElement("li");
      novoDado.innerHTML = campos[i].value;  
      tabela.appendChild(novoDado);
      campos[i].value ="";
    }

  }
}
const button = document.querySelector('button');
button.addEventListener('click', onClick);