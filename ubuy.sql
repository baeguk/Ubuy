create database ubuy
use ubuy

create table usuario(
	usuarioId int primary key IDENTITY(1,1),
	nome varchar(100),
	email varchar(100),
	senha varchar(100),
	celular varchar(100),
	endereco varchar(100),
	dataCadastro datetime
);

create table Categoria(
	categoriaId int primary key IDENTITY(1,1),
	nome varchar(100), 
	descrição varchar(500)
);

create table Subcategoria(
	subCatId int primary key IDENTITY(1,1),
	categoriaId int,
	nome varchar(100),
	descricao text,
	FOREIGN KEY (categoriaId) REFERENCES Categoria(categoriaId)
);

create table Anuncio(
	produtoId int primary key IDENTITY(1,1),
	usuarioId int,
	categoriaId int,
	subCatId int,
	nome varchar(100),
	descricao text,
	preco decimal (10, 2),
	localizacao varchar(100),
	dataPublicacao datetime,
	status varchar(100),
	FOREIGN KEY (usuarioId) REFERENCES Usuario(usuarioId),
    	FOREIGN KEY (categoriaId) REFERENCES Categoria(categoriaId),
    	FOREIGN KEY (subCatId) REFERENCES Subcategoria(subCatId),
		CHECK (status IN ('ativo', 'vendido', 'expirado'))
 
);

create table Mensagens(
	mensagemId int primary key IDENTITY(1,1),
	produtoId int,
	usuarioRemetenteId int,
	usuarioDestinatarioId int,
	conteudo text,
	dataEnvio datetime,
	statusLida bit,
	FOREIGN KEY (produtoId) REFERENCES Anuncio(produtoId),
    	FOREIGN KEY (usuarioRemetenteId) REFERENCES Usuario(usuarioId),
    	FOREIGN KEY (usuarioDestinatarioId) REFERENCES Usuario(usuarioId)
);

create table Avaliacoes(
    	avaliacaoId int primary key IDENTITY(1,1),
    	produtoId int,
    	usuarioId int,
    	nota int check (Nota BETWEEN 1 AND 5),
    	comentario varchar(800),
    	dataAvaliacao datetime,
    	FOREIGN KEY (produtoId) REFERENCES Anuncio(produtoId),
    	FOREIGN KEY (usuarioId) REFERENCES Usuario(usuarioId),
);
