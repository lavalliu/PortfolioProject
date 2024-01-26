-- 1. CREATE TABLE customer (id serial PRIMARY KEY, first_name varchar(50) NOT NULL, last_name varchar(50) NOT NULL);
-- 1. CREATE TABLE customer_profile (id serial PRIMARY KEY, isLoggedIn boolean DEFAULT false, customer_id integer REFERENCES customer(id));

-- 2. INSERT INTO customer (first_name, last_name) VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

-- 3. INSERT INTO customer_profile (customer_id) SELECT customer.id FROM customer WHERE first_name LIKE 'J%';

-- 4.1 SELECT first_name FROM customer_profile JOIN customer ON customer.id=customer_profile.customer_id WHERE isLoggedin IS true;
-- 4.2 SELECT first_name, isloggedin FROM customer_profile RIGHT JOIN customer ON customer.id=customer_profile.customer_id;
-- 4.3 SELECT COUNT(id) FROM customer_profile WHERE isLoggedin IS true;
