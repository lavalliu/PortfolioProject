select first_name,last_name,birth_date 
from students 
where birth_date =(
	select max(birth_date)
	from students);

