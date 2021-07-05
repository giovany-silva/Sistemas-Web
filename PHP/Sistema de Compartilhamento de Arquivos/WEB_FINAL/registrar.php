<?php
	$nome_dispositivo=getenv("USERNAME");
	include("db.php");
	$arrCombo = array(
		"prof" => "Professor",
    	"alun" => "Aluno",
	);
	
	if (isset($_POST['criar'])) {
		$nome = $_POST['nome'];
		$email = $_POST['email'];
		$matricula=$_POST['matricula'];
		$pass = $_POST['pass'];
		$curso = $_POST['curso'];
		$date = date("Y/m/d");
        $nome_dispositivo=getenv("USERNAME");

		$email_check = mysqli_query($connect,"SELECT email FROM usuario WHERE email='$email'");
		$do_email_check = mysqli_num_rows($email_check);
		if ($do_email_check >= 1) {
			echo '<h3>Este email já está registado, faça o login <a href="login.php">aqui</a></h3>';
		}elseif ($nome == '' OR strlen($nome)<3) {
			echo '<h3>Escreva o seu nome corretamente!</h3>';
		}elseif ($email == '' OR strlen($email)<10) {
			echo '<h3>Escreva o seu email corretamente!</h3>';
		}elseif ($matricula == '' OR strlen($matricula)!=10) {
			echo '<h3>Escreva a sua matr&iacute;cula corretamente; deve ter 10 caracteres!</h3>';
		}elseif ($pass == '' OR strlen($pass)<8) {
			echo '<h3>Escreva a sua palavra-passe corretamente; deve ter mais que 8 caracteres!</h3>';
		}elseif ($curso == '' OR strlen($curso)!=3) {
			echo '<h3>Escreva a sigla do curso corretamente; deve ter 3 caracteres!</h3>';
		}else{
			
			$query = "INSERT INTO usuario (`nome`,`email`,`matricula`,`senha`,`data`) VALUES ('$nome','$email','$matricula','$pass','$date')";
			$data = mysqli_query($connect,$query) or die(mysqli_error($connect));
			
		if ($_POST['tipo']=="prof") {
    		$query = "INSERT INTO professor (`matricula`,`instituto`) VALUES ('$matricula','$curso')";
			$data = mysqli_query($connect,$query) or die(mysqli_error($connect));
		} else {
    		$query = "INSERT INTO aluno (`matricula`,`curso`) VALUES ('$matricula','$curso')";
			$data = mysqli_query($connect,$query) or die(mysqli_error($connect));
		}


			if ($data) {
				setcookie("login",$email);
				$id= mysqli_query($connect,"select u.id from usuario u where  u.email='$email' ");
				$idf=$id->fetch_array();
				$idf2=$idf["id"];
				$verifica = mysqli_query($connect,"insert into login(id_usuario,nome_dispositivo,data) values('$idf2','$nome_dispositivo','$date')");
			    header("location: index.php?id=".$idf2);
			}else{
				echo "<h3>Desculpa, houve um erro ao registar-te...</h3>";
			}
		}
	}
?>
<!DOCTYPE html>
<html>
<head>
	<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
	<style type="text/css">
	*{font-family: 'Montserrat', cursive;}
	img{display: block; margin: auto; margin-top: 20px; width: 200px;}
	form{text-align: center; margin-top: 10px;}
	input[type="text"]{border: 1px solid #CCC; width: 420px; height: 42px; padding-left: 10px; border-radius: 3px; margin-top: 10px;}
	input[type="email"]{border: 1px solid #CCC; width: 420px; height: 42px; padding-left: 10px; border-radius: 3px; margin-top: 10px;}
	input[type="matricula"]{border: 1px solid #CCC; width: 420px; height: 42px; padding-left: 10px; border-radius: 3px; margin-top: 10px;}
	input[type="password"]{border: 1px solid #CCC; width: 420px; height: 42px; padding-left: 10px; margin-top: 10px; border-radius: 3px;}
	input[type="curso"]{border: 1px solid #CCC; width: 420px; height: 42px; padding-left: 10px; border-radius: 3px; margin-top: 10px;}
	input[type="submit"]{border: none; width: 120px; height: 42px; margin-top: 20px; border-radius: 3px;}
	input[type="submit"]:hover{background-color: #1E90FF; color: #FFF; cursor: pointer;}
	h2{text-align: center; margin-top: 20px;}
	h3{text-align: center; color: #1E90FF; margin-top: 15px;}
	a{text-decoration: none; color: #423;}
	</style>
</head>
<body>
	<img src="logo.png"><br />
	<h2>Cria a tua conta</h2>

		<form method="post">
		<fieldset>	
				<input type="text" placeholder="Nome Completo" name="nome"><br />
				<input type="email" placeholder="Endereço email" name="email"><br />
				<input type="matricula" placeholder="Matrícula" name="matricula"><br />
				<input type="password" placeholder="Senha" name="pass"><br />
				<input type="curso" placeholder="Curso (Discente) ou Instituto (Docente)" name="curso"><br />

       	    	 	 <p>
				<select name="tipo" style="width:300px">
               	        		<option value=""></option>
								<option value="prof">Professor</option>
                    			<option value="alun">Aluno</option>

                		</select>
            		 </p>
	
		
		  </fieldset>
			<input type="submit" value="Criar conta" name="criar"/>
		</form>


	<h3>Já possui uma conta? <a href="login.php">Faça login!</a></h3>
</body>
</html>