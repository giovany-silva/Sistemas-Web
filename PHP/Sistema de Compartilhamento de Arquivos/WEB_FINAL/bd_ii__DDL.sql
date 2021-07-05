CREATE DATABASE bd_ii;
USE bd_ii;

-- --------------------------------------------------------
--
-- Estrutura da tabela `acesso`
--
CREATE TABLE acesso (
  id_acesso int(11) PRIMARY KEY AUTO_INCREMENT,
  data date NOT NULL,
  id_arquivo int(11),
  FOREIGN KEY (id_arquivo) REFERENCES arquivo(id_arquivo)
);


-- --------------------------------------------------------
--
-- Estrutura da tabela `usuario`
--
CREATE TABLE usuario (
  id int(11) PRIMARY KEY AUTO_INCREMENT,
  nome varchar(100) NOT NULL,
  email varchar(50) NOT NULL,
  matricula varchar(10),
  senha varchar(20) NOT NULL,
  pontos int(11),
  data date
);

--
-- Estrutura da tabela `aluno`
--
CREATE TABLE aluno (
  matricula int(11) PRIMARY KEY,
  curso varchar(3) NOT NULL
);

--
-- Estrutura da tabela `professor`
--
CREATE TABLE professor (
  matricula int(11) PRIMARY KEY,
  instituto varchar(3)
);



-- --------------------------------------------------------
--
-- Estrutura da tabela `arquivo`
--
CREATE TABLE arquivo (
  id_arquivo int(11) PRIMARY KEY AUTO_INCREMENT,
  nome varchar(50),
  categoria varchar(10),
  disciplina varchar(30),
  descricao varchar(200) DEFAULT NULL,
  avaliacao int(11) DEFAULT NULL,
  id_usuario int(11),
  FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);


-- --------------------------------------------------------
--
-- Estrutura da tabela `login`
--
CREATE TABLE login (
  id_login int(11) PRIMARY KEY AUTO_INCREMENT,
  data date NOT NULL,
  nome_dispositivo varchar(20) NOT NULL,
  id_usuario int(11),
  FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);