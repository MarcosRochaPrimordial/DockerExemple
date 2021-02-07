DROP DATABASE IF EXISTS conne_base;
CREATE DATABASE conne_base;

USE conne_base;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id int(11) PRIMARY KEY AUTO_INCREMENT,
    name varchar(255),
    price decimal(10, 2)
);

INSERT INTO products VALUES (null, 'Leite', 6.45), (null, 'Nescau', 8.8);