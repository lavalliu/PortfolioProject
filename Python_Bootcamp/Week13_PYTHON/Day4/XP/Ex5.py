import random

# random_num = 0
while True:
    my_number = int(input("Enter your number between 1 to 100 or 999 to exit) : "))
    if my_number == 999:
        break
    random_num = random.randint(1,100)
    if my_number == random_num:
        print(f"Sucess - your number is same as the random number {my_number}")
    else:
        print(f"the number don't match - Your Number : {my_number} Random Number : {random_num}")

