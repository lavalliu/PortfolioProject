def fibonacci(my_range):
    counter = start = prev_num = last =0
        
    while counter < my_range:
        if counter == 0:
            start = 1
            last = 0
            print(last)
        else:
            start = prev_num
        prev_num = last
        last = prev_num + start
        print(last)
        counter += 1

fibonacci(50)