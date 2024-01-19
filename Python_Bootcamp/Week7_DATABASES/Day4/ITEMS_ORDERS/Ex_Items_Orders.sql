-- 1. CREATE TABLE product_orders (order_no INT NOT NULL, product_id INT NOT NULL, product_name VARCHAR(50) NOT NULL, supplier_id INT NOT NULL, quantity DECIMAL(10,2), unit VARCHAR(10), price DECIMAL(10,2));
-- 1. CREATE TABLE items (item_id SERIAL PRIMARY KEY NOT NULL, name VARCHAR(50) NOT NULL, price DECIMAL(10,2));

-- 2. ALTER TABLE product_orders ADD CONSTRAINT fk_item_id FOREIGN KEY (product_id) REFERENCES items (item_id);

-- INSERT INTO items (item_id,name) VALUES (1, 'Sugar', 70), (2, 'Salt', 68.00), (3, 'Milk', 120);
-- INSERT INTO product_orders (order_no, product_id, product_name, supplier_id, quantity, unit, price) VALUES 
-- 	(1, 1, 'Sugar', 1, 50, 'Kg', 70.00),
-- 	(1, 2, 'Salt', 1, 25, 'Kg', 78.50),
-- 	(1, 3, 'Milk', 1, 50, 'Lt', 130.00),
-- 	(2, 1, 'Sugar', 2, 10, 'Kg', 75.00),
-- 	(3, 2, 'Salt', 3, 15, 'Kg', 68.00),
-- 	(3, 3, 'Milk', 3, 30, 'Lt', 120.00);

-- 3. SELECT SUM(quantity*price), order_no FROM product_orders GROUP BY order_no ORDER BY order_no ASC;

-- 4.1 CREATE TABLE users (user_id SERIAL NOT NULL, user_name VARCHAR(50) NOT NULL);

-- ALTER TABLE product_orders ADD user_id integer;
-- INSERT INTO users (user_id, user_name) VALUES (1, 'Laval Liu'), (2, 'MIchael Jordan'), (3, 'Larissa Norman');

-- 4.2 (NOT WORKING) ALTER TABLE users ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES product_orders (user_id);

-- UPDATE product_orders SET user_id=1 WHERE order_no=1;
-- UPDATE product_orders SET user_id=2 WHERE order_no=2;
-- UPDATE product_orders SET user_id=1 WHERE order_no=3;

-- 4.3 SELECT SUM(quantity*price), users.user_name FROM product_orders	JOIN users ON users.user_id=product_orders.user_id GROUP BY users.user_name;
	



	