-- 1. select count(film_id), rating from film group by rating;
-- 2. select * from film where rating='G' or rating='PG-13';
-- 2.1 select * from film where (rating='G' or rating='PG-13') and length<120 and rental_rate<3 order by title ASC;
-- 3. update customer set first_name='Laval', last_name='Liu', email='laval.liu@rogershospitality.com' where customer_id=524;
-- 4. update address set address='125 Clairefontaine Street', address2='Juliette Dodu', district='', city_id='400', postal_code='1234' from customer where customer.address_id=address.address_id and customer_id=524;

