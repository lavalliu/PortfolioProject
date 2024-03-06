list1 = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
list2 = [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
list3 = [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
list4 = [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]
combine = list1+list2+list3+list4
summ = 0
i = 1
largest = 0
smallest = 0
print(combine)
for number in combine:   
    summ = summ + number
    i += 1
    if number > largest:
        largest = number
    if number < smallest:
        smallest = number
print(f"Sum : {summ}")
print(f"Average : {summ/i}")
print(f"Largest : {largest}")
print(f"Smallest : {smallest}")
j = 0
list5 = []
while j <= 2:
    num = int(input("Enter 10 number between -100 and 100 : "))
    integer = int(input("Enter 10 integer between -100 and 100 : "))
    list5.append(num)
    list5.append(integer)
print(list5)
    

