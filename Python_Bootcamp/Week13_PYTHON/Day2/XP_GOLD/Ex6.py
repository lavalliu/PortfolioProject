i = 0
words = []
while i < 7:
    if i == 0:
        th = "st"
    elif i == 1:
        th = "nd"
    elif i == 2:
        th = "rd"
    else:
        th = "th"
    word = input(f"Please enter the {i+1}{th} word : ")
    words.append(word)
    i += 1
character = input("Please enter a character : ")
print(f"the list of words : {words}")
print(f"the character is : {character}")
j = 0
for word in words:
    index = word.find(character)
    if index != -1:
        print(f"the character {character} exists in the word '{word}' index {j}")
    else:
        print(f"the character {character} does not exist in the word '{word}'")
    j += 1


