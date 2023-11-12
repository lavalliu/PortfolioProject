function hello() {
    console.log('hello world');
    console.log('hello world');
    console.log('hello world');
    console.log('hello world');
    console.log('hello world');
}

hello();


function average(num1,num2) {
    total=num1+num2;
    average=total/2;
    console.log(average);
}
average(50,100);
average(20,160);

var age=0;

function calculate_age(current_date, dob) {
    age=current_date-dob;
    console.log(age);
    return age;
}

age=calculate_age(2023, 1968) //or
another_var=calculate_age(2023, 1968)


function multiplication(num1, num2, num3){
    return num1*num2*num3
}

results=[];

results.push((multiplication(5,5,5)));
console.log(results);
result=multiplication(2,4,6);
console.log(result);


function register_person(name,father_name,mother_name,age=0){
    person={
        name:name,
        father_name:father_name,

    }
    return person;
}

person1=register_person('joe smith', 'john smith','jane smith',25)
console.log(person1);