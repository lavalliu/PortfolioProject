-- 1. CREATE TABLE book (book_id SERIAL PRIMARY KEY, title VARCHAR(50) NOT NULL, author VARCHAR(50) NOT NULL)
-- 2. INSERT INTO book (title, author) VALUES ('Alice In Wonderland', 'Lewis Carroll'), ('Harry Potter', 'J.K Rowling'), ('To kill a mockingbird', 'Harper Lee');
-- 3. CREATE TABLE student (student_id serial PRIMARY KEY, name VARCHAR(50) NOT null UNIQUE, age smallint CHECK (age<=15));
-- 4. INSERT INTO student (name, age) VALUES ('John', 12), ('Lera', 11), ('Patrick', 10), ('Bob', 14);

-- 5. CREATE TABLE library (
-- 5.	book_fk_id integer REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE, 
-- 5.	student_id integer REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE, 
-- 5.	borrowed_date date);

-- 6. INSERT INTO library (student_id, book_fk_id, borrowed_date) VALUES 
-- 6.	((SELECT student_id FROM student WHERE name='John' LIMIT 1), (SELECT book_id FROM book WHERE title='Alice In Wonderland' LIMIT 1), '15/02/2022'),
-- 6.	((SELECT student_id FROM student WHERE name='Bob' LIMIT 1), (SELECT book_id FROM book WHERE title='To kill a mockingbird' LIMIT 1), '03/03/2021'),
-- 6.	((SELECT student_id FROM student WHERE name='Lera' LIMIT 1), (SELECT book_id FROM book WHERE title='Alice In Wonderland' LIMIT 1), '23/05/2021'),
-- 6.	((SELECT student_id FROM student WHERE name='Bob' LIMIT 1), (SELECT book_id FROM book WHERE title='Harry Potter' LIMIT 1), '12/08/2021');

-- 7.1 SELECT * FROM library;

-- 7.2 SELECT name, title FROM library
-- 7.2	JOIN student ON student.student_id=library.student_id 
-- 7.2	JOIN book ON book.book_id=library.book_fk_id

-- 7.3 SELECT AVG(age) FROM library
-- 7.3 	JOIN student ON student.student_id=library.student_id 

DELETE FROM student WHERE name='John'
-- the record in the junction table concerning the student ('John') has also been deleted.
