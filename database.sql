-- Buggy sql... 

DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
DROP TABLE IF EXISTS products;
CREATE TABLE products (
	item_id AUTO INTEGER(100) INCREMENT NOT NULL,
	product_name VARCHAR(100),
	department_name VARCHAR(100),
	price DECIMAL(5,2),
	stock_quantity INTEGER(100),
	PRIMARY KEY (item_id)
);
SELECT DATABASE bamazonDB;
INSERT INTO products VALUES (
	1, 'coffee', 'dailies', 12.50, '50'
);

