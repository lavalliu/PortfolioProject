# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
family = {}
name = ""
while (True):
    name = input("Please enter the name (X when done): ")
    if name == "X":
        break
    age = int(input("Now enter the age : "))
    family[name] = age

print(family)
total = 0

for name, age in family.items():
    match (age):
        case age if (age < 3):
            price = 0
        case age if (age >= 3 and age <= 12):
            price = 10
        case age if (age > 12):
            price = 15
        case _:
            pass
    print(f"{name} will be charged , {price}")
    total = total + price

print(f"The total price is : {total}")

