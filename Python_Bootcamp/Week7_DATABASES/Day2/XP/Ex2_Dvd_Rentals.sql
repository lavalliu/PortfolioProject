-- 1. select * from customer;
-- 2. select first_name,last_name as full_name from customer;
-- 3. select distinct create_date from customer;
-- 4. select * from customer order by first_name DESC;
-- 5. select film_id, title, description,release_year,rental_rate from film order by rental_rate ASC;
-- 6. select address,address2,phone from address where district='Texas';
-- 7. select * from film where film_id=15 or film_id=150;
-- 8. select  film_ID, title, description, length, rental_rate from film where lower(title) like '%top gun%';
-- 9. select film_ID, title, description, length, rental_rate from film where lower(title) like '%to%';
-- 10. select * from film order by rental_rate ASC limit 10;
-- 11. select * from (select *, row_number() over (order by rental_rate ASC) as rank from film) as subquery where rank between 11 and 20;
-- 12. select first_name, last_name, payment.amount, payment.payment_date from customer inner join payment on payment.customer_id = customer.customer_id order by customer.customer_id ASC
-- 13. select * from film where film_id not in (select film_id from inventory);
-- 14. select city,country.country from city left join country on city.country_id=country.country_id;
-- 15. select staff_id, customer.customer_id, customer.first_name, customer.last_name, amount, payment_date from payment inner join customer on customer.customer_id=payment.customer_id order by payment.staff_id ASC


