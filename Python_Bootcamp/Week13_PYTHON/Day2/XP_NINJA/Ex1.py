import math
C = 50
H = 30
d = [100,150,180]
output = []
for D in d:
    Q = int(math.sqrt((2 * C * D)/H))
    output.append(Q)
print(output)