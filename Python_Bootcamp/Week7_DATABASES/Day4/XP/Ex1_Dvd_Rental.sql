-- 1. SELECT * FROM language;
-- 2. SELECT title, description, language.name FROM film JOIN language ON film.language_id=language.language_id;
-- 3. SELECT * FROM language LEFT JOIN film ON language.language_id=film.language_id;
-- 4.1 CREATE TABLE new_film (id SERIAL PRIMARY KEY NOT NULL,name VARCHAR(100));
-- 4.2 INSERT INTO new_film (name) VALUES ('Top Gun - Maverick'),('Passengers'),('Avengers - Endgame');

-- 5. CREATE TABLE customer_review (
-- 5. 	review_id SERIAL PRIMARY KEY NOT NULL, film_id INT NOT NULL, language_id SMALLINT NOT NULL, title VARCHAR(100) NOT NULL, score smallint NOT NULL, review_text TEXT, last_update TIMESTAMP WITHOUT TIME ZONE,
-- 5.	CONSTRAINT fk_film_id FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
-- 5.	CONSTRAINT fk_language_id FOREIGN KEY (language_id) REFERENCES language(language_id),
-- 5.	CONSTRAINT score_value CHECK (score>0 AND score<=10)
-- 5.	);

-- 6. INSERT INTO customer_review(film_id, language_id, title, score, review_text) VALUES 
-- 6. (1,1,'Amazing',8,'I really like the first Top Gun AND seeing the suite after so many years of wating was really worth it. As usual Tom Cruise up to his usual stANDards and the adrenaline was wow during the mission. Thumps up'),
-- 6. (2,1,'Gorgeous',9,'I really like these types of movies, science fiction where you have adventure, action, romance AND with good actors with Pratt and Lawrence');

-- 7. DELETE FROM new_film WHERE id=1;





