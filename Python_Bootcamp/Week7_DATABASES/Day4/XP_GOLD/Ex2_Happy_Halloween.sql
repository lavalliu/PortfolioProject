-- 1. SELECT * FROM store JOIN address ON store.address_id=address.address_id;

-- 2. SELECT (SUM(length))/60 FROM film JOIN inventory ON film.film_id=inventory.film_id WHERE store_id=1;
-- 2. SELECT (SUM(length))/60 FROM film JOIN inventory ON film.film_id=inventory.film_id WHERE store_id=2;

-- 3. SELECT (SUM(film.length))/60 FROM inventory 
-- 3.	JOIN rental ON inventory.inventory_id=rental.inventory_id 
-- 3.	JOIN film ON inventory.film_id=film.film_id
-- 3.	WHERE store_id=1 AND return_date is NULL;
	
-- 3. SELECT (SUM(film.length))/60 FROM inventory 
-- 3.	JOIN rental ON inventory.inventory_id=rental.inventory_id 
-- 3.	JOIN film ON inventory.film_id=film.film_id
-- 3.	WHERE store_id=2 AND return_date is NULL;

-- 4. SELECT city.city, first_name, last_name, email from customer
-- 4.	JOIN address ON customer.address_id=address.address_id
-- 4.	JOIN city ON address.city_id=city.city_id
-- 4.	ORDER BY city.city ASC;

-- 5. SELECT country.country, first_name, last_name, email from customer
-- 5.	JOIN address ON customer.address_id=address.address_id
-- 5.	JOIN city ON address.city_id=city.city_id
-- 5.	JOIN country ON city.country_id=country.country_id 
-- 5.	ORDER BY country.country ASC;

CREATE VIEW horror_movie AS
	SELECT * FROM film
	INNER JOIN film_category ON film.film_id=film_category.film_id;
	
-- 	INNER JOIN category ON film_category.category_id=category.category_id
-- 	WHERE category.name='Horror';

		   

	

	