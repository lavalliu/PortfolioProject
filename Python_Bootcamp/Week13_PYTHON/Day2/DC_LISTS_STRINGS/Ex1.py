number = int(input("Please enter a number : "))
length = int(input("Enter a lenght : "))
i = 0
list = []
while i < length:
    list.append(number*(i+1))
    i += 1
print(list)