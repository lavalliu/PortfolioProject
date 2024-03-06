import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728
counter = 0

for number in list_of_numbers:
    second_num = target_number - number
    if second_num in list_of_numbers:
        counter += 1

print(f"There are {counter} couples of numbers which can sum to {target_number} in this random list")