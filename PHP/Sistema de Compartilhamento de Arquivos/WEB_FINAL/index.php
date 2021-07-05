<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Sistema de Compartilhamento de Arquivos</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  </head>
  <body>


   <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <a class="navbar-brand" href="#">Sistema de Compartilhamento de Arquivos</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
   </button>

   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <form action="" enctype="multipart/form-data" method="post" >
    	<div id="nome_arquivo">
		<input type="file" name="fileUploaded"/>
    		<input type="submit" name="Upload" value="Upload"/>
        </div>
      </form>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Nome da disciplina" aria-label="Search" name="pesquisar">
      <button class="btn btn-outline-success my-2 my-sm-0" onclick name ="search">Buscar</button>	
      <div class="form-inline my-2 my-lg-0">
		<a href="logout.php">SAIR</a>
      </div>		
    </form>
   </div>
   </nav>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  
  <table class="table table-bordered">
	<tr><th colspan=2>&Uacute;ltimos acessos</th></tr>
	<tr><th>Dispositivo</th><th>Data</th></tr>
	<?php
	include "config.php";
	if(isset($_GET['id'])){
		$id = $_GET['id'];
		
		$banco=$db->prepare("select * from login l where l.id_usuario='$id' order by id_login desc");
		$banco->execute();
		$k=0;
		while(($row = $banco->fetch()) && (++$k <15)){
			      echo "<tr><td>".$row['nome_dispositivo']."</td><td>".$row['data']."</td></tr>";
		}
	}
	?>
  </table>
  
  </body>
</html>

<?php
	$id=$_GET['id'];
	        if(is_null($_GET['id'])) header("Location: ./login.php");
			if(isset($_GET['search'])){
		 		$pesquisa=$_GET['pesquisar'];
				header("Location: ./download.php?pesquisa=".$pesquisa."&sessao=".$id);
		
			}
			if(isset($_POST['Upload'])){
	
				$arq=$_FILES['fileUploaded']['name'];
				echo $arq;
				$arq=str_replace(" ","_",$arq);
				$arq=str_replace("ç","c",$arq);
				if(file_exists("arquivos/$arq")){
	  				$a =1;
  	   				while(file_exists("arquivos/[$a]$arq")){
					
						$a++;
	   				}
	   				$arq="[".$a."]".$arq;
		        	}
	   	       		if(move_uploaded_file($_FILES['fileUploaded']['tmp_name'],"arquivos/".$arq)){
		
					header("Location: upload.php?id=".$id."&nome_arquivo=".$arq);
	   	       		}
			}
?>