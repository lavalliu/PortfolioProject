names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

name = input("Give me your name : ")
i = 0
if name in names:
    while i < len(names):
        if name == names[i]:
            print(f"index : {i}")
            break
        i += 1
else:
    print("Name is not in the list")