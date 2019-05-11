DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT(4) NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL (10,2) NOT NULL,
  stock_quantity INT(100) NOT NULL,
  PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Wilson Evolution Basketball", "Basketball", 59.99, 100),
(10, "Nike Football", "Football", 39.99, 80),
(100, "Speedo Swimming Goggles", "Swimming", 9.99, 47),
(1000, "Wrestling Shorts", "Wrestling", 29.99, 65),
(9, "MacBook Pro 13in", "Electronics", 1899.99, 15),
(99, "Xbox One X", "Electronics", 499.99, 30),
(999, "Apple Watch", "Electronics", 199.99, 50),
(9999, "Playstation 4", "Electronics", 399.99, 61),
(500, "Microsoft Surface Laptop", "Electronics", 999.99, 10)
