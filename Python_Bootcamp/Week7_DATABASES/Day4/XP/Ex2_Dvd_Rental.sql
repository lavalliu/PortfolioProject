-- 1. UPDATE film SET language_id=3 WHERE (film_id=15 or film_id=120 or film_id=37);

-- 2. incomplete

-- 3. DROP TABLE customer_review;

-- 4. SELECT * FROM inventory 
-- 		JOIN rental ON rental.inventory_id=inventory.inventory_id
-- 		WHERE return_date IS NULL;

-- 5. SELECT * FROM inventory 
-- 		JOIN rental ON rental.inventory_id=inventory.inventory_id
-- 		JOIN film ON film.film_id=inventory.film_id
-- 		WHERE rental.return_date IS NULL ORDER BY film.rental_rate DESC LIMIT 30;

-- 5.1 SELECT * FROM film
-- 	JOIN film_actor ON film_actor.film_id=film.film_id
-- 	JOIN actor ON actor.actor_id=film_actor.actor_id
-- 	WHERE (actor.first_name='Penelope' AND actor.last_name='Monroe') AND LOWER(description) LIKE '%sumo wrestler%';

-- 5.2 SELECT * FROM film
-- 	WHERE length<60 AND rating='R' AND LOWER(description) LIKE '%documentary%';

-- 5.3 SELECT DISTINCT title FROM film
-- 	JOIN inventory ON inventory.film_id=film.film_id
-- 	JOIN rental ON rental.inventory_id=inventory.inventory_id
-- 	JOIN customer ON customer.customer_id=rental.customer_id
-- 	JOIN payment ON payment.customer_id=customer.customer_id
-- 	WHERE customer.first_name='Matthew' AND customer.last_name='Mahan' AND payment.amount>4
-- 	AND (rental.return_date>'2005-07-28' AND rental.return_date<'2005-08-01'); 

-- 5.4
SELECT * FROM inventory
	INNER JOIN film ON film.film_id=inventory.film_id
	INNER JOIN rental ON rental.inventory_id=inventory.inventory_id
	INNER JOIN customer ON customer.customer_id=rental.customer_id
	WHERE customer.first_name='Matthew' AND customer.last_name='Mahan'
	AND (film.description ILIKE '%boat%' OR film.title ILIKE'%boat%') 
	ORDER BY film.replacement_cost DESC LIMIT 1; 