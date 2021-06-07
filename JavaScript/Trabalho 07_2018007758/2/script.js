$(document).ready(function() {

	$("button").click(function(){
		var tr = $("<tr>");
		$("input").each(function(index, element){  
			var td = $('<td>');
			td.append(element.value);
			tr.append(td);
		});
		$("#tabela").append(tr);
	});
});