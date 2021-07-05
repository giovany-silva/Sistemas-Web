<?php
	
	include("db.php");
        global $email;        
        $nome_dispositivo=getenv("USERNAME");
		$data = date("Y/m/d");
	if (isset($_POST['entrar'])) {
		$email = $_POST['email'];
		$pass = $_POST['pass'];
		$verifica = mysqli_query($connect,"SELECT * FROM usuario WHERE email = '$email' AND senha='$pass'");
		if (mysqli_num_rows($verifica)<=0) {
			echo "<h3>Palavra-passe ou e-mail errados!</h3>";
		}else{
			setcookie("login",$email);
			$id= mysqli_query($connect,"select u.id from usuario u where  u.email='$email' ");
			$idf=$id->fetch_array();
			$idf2=$idf["id"];
			mysqli_query($connect,"insert into login(id_usuario,nome_dispositivo,data) values('$idf2','$nome_dispositivo','$data')"); 
			header("location: index.php?id=".$idf2);
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
	form{text-align: center; margin-top: 20px;}
	input[type="email"]{border: 1px solid #CCC; width: 250px; height: 25px; padding-left: 10px; border-radius: 3px;}
	input[type="password"]{border: 1px solid #CCC; width: 250px; height: 25px; padding-left: 10px; margin-top: 10px; border-radius: 3px;}
	input[type="submit"]{border: none; width: 80px; height: 30px; margin-top: 20px; border-radius: 3px;}
	input[type="submit"]:hover{background-color: #1E90FF; color: #FFF; cursor: pointer;}
	h2{text-align: center; margin-top: 20px;}
	h3{text-align: center; color: #1E90FF; margin-top: 15px;}
	a{text-decoration: none; color: #333;}
	</style>
</head>
<body>
	<img src="logo.png"><br />
	<h2>Entra na tua conta</h2>
	<form method="POST">
		<input type="email" placeholder="Endereço de email" name="email"><br />
		<input type="password" placeholder="Palavra-passe" name="pass"><br />
		<input type="submit" value="Entrar" name="entrar">
	</form>
	<h3>Ainda não tem conta? <a href="registrar.php">Cadastre-se!</a></h3>
</body>
</html>