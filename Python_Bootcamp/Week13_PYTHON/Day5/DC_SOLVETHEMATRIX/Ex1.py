import string

range = string.ascii_letters
input1 = ""
matrix = [
    ['7','i','i'],
    ['T','s','x'],
    ['h','%','?'],
    ['i',' ','#'],
    ['s','M',' '],
    ['$','a',' '],
    ['#','t','%'],
    ['^','r','!']
]
prev_char = " "
output1 = []
i = j = 0

while j < len(matrix[j]):
    while i < len(matrix):
        input1 = str(input1) + str(matrix[i][j])
        i += 1
    i = 0
    j += 1

for char in input1:
    if char in range:
        output1.append(char)
    elif prev_char in range:
        output1.append(" ")
    prev_char = char

output1.pop(len(output1)-1)
print("".join(output1))



