DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
	item_id INTEGER(100) AUTO_INCREMENT NOT NULL, --(unique id for each product)
	product_name VARCHAR(10), --(name of product)
	department_name VARCHAR(10), 
	price DECIMAL(5,2), --(price to customer)
	stock_quantity INTEGER(100), --(how much of the product is available in stores)
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("coffee", "consumables", 3.10, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("tea", "consumables", 4.10, 99);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("avocados", "consumables", 5.10, 98);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("garlic", "consumables", 3.10, 97);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("spinal tap", "movies", 8.10, 96);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("inflatable turkey", "holiday", 50.60, 95);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("backpacks", "sporting goods", 79.99, 94);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("hat", "sporting goods", 10.10, 93);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("10 pack space diapers", "sporting goods", 50.00, 92);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("go girl", "sporting goods", 8.99, 91);

SELECT * FROM bamazon_db;



