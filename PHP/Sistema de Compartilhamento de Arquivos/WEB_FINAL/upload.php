<?php
	$id=$_GET['id'];
	$nome_arquivo=$_GET['nome_arquivo'];
	include("db.php");
	if (isset($_POST['enviar'])) {

		$categoria = $_POST['inputState'];	
		$disciplina = $_POST['disciplina'];
		$descricao = $_POST['descricao'];
		$query = "INSERT INTO arquivo (`id_usuario`,`nome`,`categoria`,`disciplina`,`descricao`) VALUES ('$id','$nome_arquivo','$categoria','$disciplina','$descricao')";
		$data = mysqli_query($connect,$query) or die(mysqli_error($connect));
		header("Location: ./download.php?pesquisa=".$disciplina."&sessao=".$id);

	}	

?>
<!doctype html>
<html>
<head>
	<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
	<style type="text/css">
	*{font-family: 'Montserrat', cursive;}
	img{display: block; margin: auto; margin-top: 20px; width: 200px;}
	form{text-align: center; margin-top: 20px;}
	h2{text-align: center; margin-top: 20px;}
	h3{text-align: center; color: #1E90FF; margin-top: 15px;}
	a{text-decoration: none; color: #333;}
	</style>
</head>

<body>
	<div class="wrap">
		<form method="POST">
   			<div>
    				<label for="disciplina" class="mat-label">Disciplina</label>
    				<input type="disciplina" class="mat-input" name="disciplina">
   			</div>
   			<div>	
    				<label for="descricao" class="mat-label">Descricao</label>
    				<input type="descricao" class="mat-input" name="descricao">
   			</div>
   			<div>
      				<label for="inputState">Categoria</label>
      				<select name="inputState">
        				<option selected>Escolher...</option>
        				<option value="slide">Slide</option> 
        				<option value="exercicio" >Exercício</option>
        				<option value="prova">Prova</option>
        				<option value=trabalho>Trabalho</option>
       				</select>
       				<input type="submit" value="Enviar" name="enviar">
   			</div>

		</form>
	</div>
</body>
</html>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>