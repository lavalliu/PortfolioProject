list1 = [1,2,3,4]
list2 = [5,6,7,8]
result = list1
num = 0
while num < len(list2):
    result.append(list2[num])
    num += 1
print(result)