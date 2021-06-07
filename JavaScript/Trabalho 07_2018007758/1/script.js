$(document).ready(function() {
	$("button").click(function(){
		$("input").each(function(index, element){// Alterando a cor para branco// de cada elemento
			var value = element.value;
			if(value != ""){
				$("#lista").append("<li>" + value + "</li>");			
			}
		});

		$("input").each(function(index, element){// Alterando a cor para branco// de cada elemento
			element.value = "";

		});

	});
});