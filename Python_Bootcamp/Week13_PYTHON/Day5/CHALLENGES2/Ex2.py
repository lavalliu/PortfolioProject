my_list = [2, 24, 12, 354, 233, 4, 1] # A list of integers
for i in range(len(my_list) - 1): # A for loop on the number of integers in the list
    minimum = i # A counter setup
    for j in range( i + 1, len(my_list)): # A for loop on the remaining numbers in the list
        if(my_list[j] < my_list[minimum]): # condition if the number is less than the previous number in the list
            minimum = j # counter changed
            if(minimum != i): # condition if the number selected in 2nd loop is not equal to number selected in 1st loop
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i] # interchange the position of the integers in the list

print(my_list) # print amended list
