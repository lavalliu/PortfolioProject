-- 1. SELECT * FROM customer;
-- 2. SELECT first_name,last_name AS full_name FROM customer;
-- 3. SELECT DISTINCT create_date FROM customer;
-- 4. SELECT * FROM customer ORDER BY first_name DESC;
-- 5. SELECT film_id, title, description,release_year,rental_rate FROM film ORDER BY rental_rate ASC;
-- 6. SELECT address,address2,phone FROM address WHERE district='Texas';
-- 7. SELECT * FROM film WHERE film_id=15 OR film_id=150;
-- 8. SELECT  film_ID, title, description, length, rental_rate FROM film WHERE lower(title) like '%top gun%';
-- 9. SELECT film_ID, title, description, length, rental_rate FROM film WHERE lower(title) like '%to%';
-- 10. SELECT * FROM film ORDER BY rental_rate ASC limit 10;
-- 11. SELECT * FROM (SELECT *, row_number() over (ORDER BY rental_rate ASC) as rank FROM film) as subquery WHERE rank between 11 AND 20;
-- 12. SELECT first_name, last_name, payment.amount, payment.payment_date FROM customer INNER JOIN payment on payment.customer_id = customer.customer_id ORDER BY customer.customer_id ASC
-- 13. SELECT * FROM film WHERE film_id NOT IN (SELECT film_id FROM inventORy);
-- 14. SELECT city,country.country FROM city LEFT JOIN country ON city.country_id=country.country_id;
-- 15. SELECT staff_id, customer.customer_id, customer.first_name, customer.last_name, amount, payment_date FROM payment INNER JOIN customer on customer.customer_id=payment.customer_id ORDER BY payment.staff_id ASC


