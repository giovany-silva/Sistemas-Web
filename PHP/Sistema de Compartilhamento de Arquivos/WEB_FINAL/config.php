<?php

/* BD */
$db_host        = 'localhost';      /* Padrão: localhost */
$db_user        = 'root';      /* User name */
$db_password    = '';       /* Senha */
$db_name        = 'bd_ii';   /* Nome da database */
$db_table       = 'arquivo';       /* Tabela referente a arquivos */

//Pasta de arquivos
$filepath       = "arquivos/"; 

/*
    Não mudar
*/
$db = new PDO("mysql:host=$db_host;dbname=$db_name","$db_user","$db_password");
?>
