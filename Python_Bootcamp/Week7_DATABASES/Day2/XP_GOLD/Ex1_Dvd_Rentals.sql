-- 1. SELECT count(film_id), rating FROM film GROUP BY rating;
-- 2. SELECT * FROM film WHERE rating='G' OR rating='PG-13';
-- 2.1 SELECT * FROM film WHERE (rating='G' OR rating='PG-13') and length<120 and rental_rate<3 ORder by title ASC;
-- 3. UPDATE customer SET first_name='Laval', last_name='Liu', email='laval.liu@rogershospitality.com' WHERE customer_id=524;
-- 4. UPDATE address SET address='125 Clairefontaine Street', address2='Juliette Dodu', district='', city_id='400', postal_code='1234' FROM customer WHERE customer.address_id=address.address_id and customer_id=524;

