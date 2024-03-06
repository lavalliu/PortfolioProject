number1 = input("Give me your 1st number : ")
result = number1
number2 = input("Give me your 2nd number : ")
if number2 > result:
    result = number2
number3 = input("Give me your 3rd number : ")
if number3 > result:
    result = number3

print(f"the greatest number between the 3 numbers enetered is {result}")