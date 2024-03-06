def multiple():
    num = input("Enter an integer : ")
    if num.isnumeric() == False:
        print("The input is not an integer, please retry")
    elif int(num) > 0 or int(num) < 0:
        if int(num) % 3 == 0 and int(num) % 5 == 0:
            print("FizzBuzz")
        elif int(num) % 3 ==0:
            print("Fizz")
        elif int(num) % 5 == 0:
            print("Buzz")
        
    
multiple()
    