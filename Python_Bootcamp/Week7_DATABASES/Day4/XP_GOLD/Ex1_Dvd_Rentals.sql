-- 1. SELECT * FROM rental WHERE return_date IS NULL;
-- 2. SELECT DISTINCT ON (customer.customer_id) * FROM customer LEFT JOIN rental ON rental.customer_id=customer.customer_id WHERE return_date IS NULL order by customer.customer_id ASC;

-- 3. SELECT film.film_id, title, description, actor.first_name, actor.last_name FROM film
-- 3.	INNER JOIN film_actor ON film.film_id=film_actor.film_id 
-- 3.	INNER JOIN actor ON actor.actor_id=film_actor.actor_id 
-- 3.	WHERE first_name='Joe' AND last_name='Swank';

-- Exercise 3 using views
-- 3. CREATE VIEW film_info AS
-- 3.	SELECT film.film_id, title, description, film_actor.actor_id FROM film
-- 3.	INNER JOIN film_actor ON film.film_id=film_actor.film_id;
-- 3. SELECT film_info.film_id, title, description, actor_info.first_name, actor_info.last_name FROM film_info
-- 3.	INNER JOIN actor_info ON film_info.actor_id=actor_info.actor_id
-- 3. 	WHERE first_name='Joe' AND last_name='Swank';