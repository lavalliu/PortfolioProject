-- 1. SELECT DISTINCT ON (film.film_id) * FROM film 
-- 1.	LEFT JOIN inventory ON inventory.film_id=film.film_id
-- 1.	LEFT JOIN rental ON rental.inventory_id=inventory.inventory_id
-- 1.	WHERE (rating='G' OR rating='PG') AND (rental.return_date is NULL OR rental.return_date<=CURRENT_DATE);

-- 2. CREATE TABLE children_wait (child_id SERIAL PRIMARY KEY NOT NULL, first_name VARCHAR(50), last_name VARCHAR(50), contact_details VARCHAR(50), film_id INTEGER);
-- 2.  INSERT INTO children_wait (child_id, first_name, last_name, contact_details, film_id)
-- 2.  VALUES (4,'Charlie', 'St Cloud','Tel : 2121256',18), (5,'Michael','Jordan','Email : jj@nike.com',18),(6,'Lucas', 'Barton','Email : lb.kk.com',135)

-- 3. SELECT COUNT(child_id) FROM children_wait GROUP BY film_id;
