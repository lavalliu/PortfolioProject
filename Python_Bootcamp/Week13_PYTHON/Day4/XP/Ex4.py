users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# Analyse these results :

#1/
# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
print('A')
i = 0
disney_users_A = {}
for name in users:
    disney_users_A[name] = i
    i += 1

print(disney_users_A)

#2/
# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
print('B')
i = 0
disney_users_B = {}
for name in users:
    disney_users_B[i] = name
    i += 1

print(disney_users_B)

#3/ 
# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
print('C')
i = 0
disney_users_C = {}
for name in sorted(users):
    disney_users_C[name] = i
    i += 1

print(disney_users_C)

#4.1/
print('4.1')
j = 0
disney_users_A = {}
for name in users:
    if 'i' in name:
        disney_users_A[name] = j
        j += 1

print(disney_users_A)

#4.2/
print('4.2')
j = 0
disney_users_A = {}
for name in users:
    if ('M' in name and name.index('M') == 0) or ('P' in name and name.index('P') == 0):
        disney_users_A[name] = j
        j += 1

print(disney_users_A)
