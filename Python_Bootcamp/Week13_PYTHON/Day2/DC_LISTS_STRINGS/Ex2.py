word = list(input("Please enter a word with the characters repeating themselves consecutively : "))
print(word)
previous = " "
i = 0
while i < len(word):
    char = word[i]
    if char == previous:
        word.remove(word[i])
    else:
        previous = char
        i += 1
print("".join(word))