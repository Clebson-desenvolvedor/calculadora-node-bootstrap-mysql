# calculadora-node-bootstrap-mysql
Calculadora usando Node, Bootstrap, e Mysql.

Neste projeto temos uma calculadora onde ela faz a operação e manda pra uma tabela a esquerda, onde ela mostra o Id da operação, a operação propriamente dita e o horário 
da operação.

## Instalação do Projeto

Para baixar e instalar a calculadora:
- clique em code na cor verde, opção download.zip (você deve ter um programa de descompactação como winrar por exemplo)
- localize o arquivo compactado e extraia os arquivos
- escolha um editor de texto da sua preferência (VS Code, Sublime, Atom são alguns exemplos)
- com o editor de texto aberto, procure a pasta do projeto baixado e clique em abrir
- abra o terminal integrado do editor ou ate mesmo pelo cmd (você precisa acessar o diretório do projeto se for pelo cmd ou por outro terminal)
- dentro do terminal dê o comando "npm install" será baixado todas as dependências deste projeto
- dê o comando "nodemon" este comando irá iniciar o projeto chamando o arquivo principal
- no navegador acesse "http://localhost:3003" é lá onde a calculadora será renderizada.

## Preparação para o Banco de Dados

Você precisa baixar e instalar o MySQL na sua máquina. Vou dar as instruções a partir do MySql WorkBench

- abra uma query no WorkBench
- coloque os comandos:

create database calculadora;
use calculadora;
create table dadoscalc(
	id int primary key auto_increment,
    op varchar(50) not null,
    dt_registro varchar(30) not null
);

observação: no arquivo db.js tem as configurações do banco de dados. O usuário lá é o user, você deve criar um usuário com o mesmo nome, o mesmo seve para a senha.
