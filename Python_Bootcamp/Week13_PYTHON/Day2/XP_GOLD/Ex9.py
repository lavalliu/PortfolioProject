import random
win = 0
lost = 0
while True:
    guess = int(input("Give any interger from 1 to 9 (0 to exit) : "))
    if guess == 0:
        False
        break
    rand = (random.randint(1, 9))
    print(guess)
    print(rand)
    print(f"Guessed number is : {guess} - Random number is : {rand}")
    if guess == rand:
        print("Winner")
        win += 1
    else:
        print("Better Luck next time")
        lost += 1

print(f"Summary -  Won : {win} Lost : {lost}")