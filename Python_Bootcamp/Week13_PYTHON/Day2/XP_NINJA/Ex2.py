import statistics

list1 = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
list2 = [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
list3 = [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
list4 = [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]
combine = list1+list2+list3+list4
print(combine)
combine.sort(reverse = True)
print(combine)
print(f"Sum : {sum(combine)}")
first = combine[0]
last = combine[-1]
combine2 = []
combine2.append(first)
combine2.append(last)
print(f"First & Last number : {combine2}")
list50 = []
for number in combine:   
    if number > 50:
        list50.append(number)
print(f"List more than 50 : {list50}")
list10 = []
for number in combine:   
    if number < 10:
        list10.append(number)
print(f"List less than 10 : {list10}")
square = []
for number in combine:   
    square.append(number*number)
print(square)
unique = set(combine)
print(unique)
print(f"number of numbers in the original combined list : {len(combine)}")
print(f"number of numbers in the new unique list : {len(unique)}")
print(f"Average : {statistics.mean(unique)}")
print(f"Largest number : {max(unique)}")
print(f"Smallest number : {min(unique)}")