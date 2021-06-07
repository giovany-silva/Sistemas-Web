$(document).ready(function() {
 var objetoJson ="";
 var nome="",temp="",temp_min="",temp_max="",clima="";
   function QuandoVoltarComACidadePromise(info){    		
   return new Promise(function(solve,reject){

  	try{ 
	if(info.count == 0){
		reject(e);
	}
        else{
	nome = info.list[0].name;
  	temp = info.list[0].main.temp;
  	temp_min = info.list[0].main.temp_min;
  	temp_max = info.list[0].main.temp_max;
  	clima = info.list[0].weather[0].description;
  	var text = "";
  	text+="Nome da Cidade :"+nome;
  	text+="\n";
  	text+="Temperatura :"+temp;
  	text+="\n";
  	text+="Temperatura mínima do dia :"+temp_min;
  	text+="\n";
  	text+="Temperatura máxima do dia :"+temp_max;
  	text+="\n";
  	text+="Clima :"+clima;
  	text+="\n";
  	alert(text);
	}
	}
	catch(e){
		reject(e);
	}
  });
}
 
 function busca(nomeCidade){
	
  	 return new Promise(function(solve,reject){
		try{

	  	 	$.getJSON("http://api.openweathermap.org/data/2.5/find?q="+nomeCidade+"&units=metric&&appid=b8f1fb15530baaf39bd15d8b6872b772",solve,reject);
	
		}

		catch(e){
			reject(e);
		}

	 });
 }

 function buscaCidade(nomeCidade){

 nomeCidade = $("input").val();
	
 busca(nomeCidade)
	.then(QuandoVoltarComACidadePromise)
	.catch(e => {
   		 alert("Cidade não encontrada!");
	});


 }

  $("button").click(buscaCidade);

});