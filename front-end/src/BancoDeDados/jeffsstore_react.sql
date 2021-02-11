CREATE DATABASE jeffsstore_react;

USE jeffsstore_react;

/*TABELA DE CONTATOS */

-- SELECT * FROM contatos;
-- DROP TABLE contatos;
-- DELETE FROM contatos;

CREATE TABLE IF NOT EXISTS contatos(
 idcontato INT AUTO_INCREMENT NOT NULL,
 nome VARCHAR(50) NOT NULL,
 email VARCHAR(100) NOT NULL,
 mensagem VARCHAR(250) NOT NULL,
 datacontato TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
 PRIMARY KEY (idcontato)
);

/*-------------------------------------------------------------------------------------*/

/*TABELA DE Pedidos */

-- SELECT * FROM pedidos;
-- DROP TABLE pedidos;
-- DELETE FROM pedidos;

CREATE TABLE IF NOT EXISTS pedidos (
    idpedido INT AUTO_INCREMENT NOT NULL,
    nome_cliente VARCHAR(50) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    nome_produto VARCHAR(150) NOT NULL,
	valor_unitario DECIMAL(8,2) NOT NULL,
    quantidade INT NOT NULL,
    valor_total DECIMAL(8,2) NOT NULL,
    PRIMARY KEY (idpedido)
);

/*-------------------------------------------------------------------------------------*/

/*TABELA DE PRODUTOS */

-- SELECT * FROM produtos;
-- DROP TABLE produtos;
-- DELETE FROM produtos;

CREATE TABLE IF NOT EXISTS produtos (
	idproduto int NOT NULL AUTO_INCREMENT,
	descricao varchar(150) NOT NULL,
	preco decimal(8,2) NOT NULL,
	precofinal decimal(8,2) NOT NULL,
	imagem varchar(255) DEFAULT NULL,
	PRIMARY KEY (idproduto),
	UNIQUE KEY imagem_unique (imagem)
);

INSERT INTO produtos VALUES (1,'Notebook Dell Pentium Gold 4GB 500GB Windows 10 Inspiron',3499.00,3099.00,'notebook_dell.png'),
(2,'Notebook Positivo Quad Core 2GB 32GB SSD Windows 10 Motion Gray',2399.00,1999.00,'notebook_positivo.png'),
(3,'Notebook Samsung Intel Dual Core 4GB 16BG Google Chrome OS Chromebook',2399.00,1999.00,'notebook_samsung.png'),
(4,'Teclado Gamer Multilaser TC243 Multimidia Slim Preto Verde',59.90,44.90,'teclado_multilaser.png'),
(5,'Teclado Gamer ELG Enemy Membrana Tripla Preto',149.90,129.90,'teclado_elg.png'),
(6,'Multifuncional Tanque de Tinta Canon Mega Tank G3110 Wireless',1299.00,999.00,'impressora_canon.png'),
(7,'Multifuncional Tanque de Tinta Epson EcoTank L3110',1199.00,1099.00,'impressora_epson.png'),
(8,'Impressora Multifuncional HP 2776 DeskJet Ink Advantage',538.00,499.00,'impressora_hp.png'),
(9,'iPad 7 Apple 32GB Wi Fi 4G Bluetooth Camera de 8 MP e Processador A10 Fusion',4299.00,3999.00,'tablet_apple.png'),
(10,'Tablet Samsung Galaxy Tab S6 64GB 4GB RAM 4G e Android 10',2999.00,2599.00,'tablet_samsung.png'),
(11,'Mouse Optico WM126 Sem Fio Preto  Dell',119.00,109.00,'mouse_dell.png'),
(12,'Mouse Optico Multilaser Classic MO179 Preto',14.90,10.90,'mouse_multilaser.png');

/*-------------------------------------------------------------------------------------*/

/*TABELA DE CATEGORIA */

-- SELECT * FROM categoria;
-- DROP TABLE categoria;
-- DELETE FROM categoria;

CREATE TABLE IF NOT EXISTS categoria(
	idcategoria INT AUTO_INCREMENT NOT NULL,
    categoria VARCHAR(45) NOT NULL,
    PRIMARY KEY (idcategoria)
);

INSERT INTO categoria VALUES(default, 'notebook'),
(default, 'teclado'),
(default, 'impressora'),
(default, 'tablet'),
(default, 'mouse');


/*-----------------------------------------------------------------------------------------*/

/*TABELA DE categoria_produto  - Tabela Associativa*/

-- SELECT * FROM categoria_produto;
-- DROP TABLE categoria_produto;
-- DELETE FROM categoria_produto;

CREATE TABLE IF NOT EXISTS categoria_produto(
	id_categoria_produto INT AUTO_INCREMENT NOT NULL,
    idproduto INT,
    idcategoria INT,
    PRIMARY KEY (id_categoria_produto, idproduto, idcategoria),
    FOREIGN KEY (idproduto) REFERENCES produtos(idproduto),
    FOREIGN KEY (idcategoria) REFERENCES categoria(idcategoria)
);

INSERT INTO categoria_produto VALUES
(default, 1, 1),
(default, 2, 1),
(default, 3, 1),
(default, 4, 2),
(default, 5, 2),
(default, 6, 3),
(default, 7, 3),
(default, 8, 3),
(default, 9, 4),
(default, 10, 4),
(default, 11, 5),
(default, 12, 5);

SELECT * FROM produtos
	inner join categoria_produto
		on produtos.idproduto = categoria_produto.idproduto
	inner join categoria
		on categoria_produto.idcategoria = categoria.idcategoria;
