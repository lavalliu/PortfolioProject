x = range(1,6)
counter = 1
for x in range(1,6):
    if x %2 != 0:
        print(' ' * int((6-x)/2) + '*' * x + ' ' * int((6-x)/2))

for x in range(1,6):
    print(' ' * int((6-x)) + '*' * x)

for x in range(1,11):
    y = 11 - x
    if x < 6:
        print('*' * x + ' ' * int((6-x)/2))
    else:
        print(' ' * (x-y-counter) + '*' * y )
        counter += 1
