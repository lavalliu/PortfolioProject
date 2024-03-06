import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 

#displays the secret word
print(f"Secret word : {word}") 
i = 0 
#counter if the player wins
winner = False 
#the lenght of word
length = len(word) 
#string containing all incorrect entered letters 
incorrectlist = ""
#string containing all correct entered letters
correctlist = ""
#counter for tries player 2 is allowed - 6 in all
# numofguess = 0 
#spaces displayed ongoing while player 2 guesses 
display_list = ""
#counter to display the number of underscore for the secret word
y = 0 
for char in word: 
    guessword = ("_ " * len(word)) 
print(guessword)

# print(display_list)   #display _ _ _ _

def hangman():
    numofguess = 0 
    while True:
        letter = input(f"You have try(ies) left - enter a letter : ") 
        position = word.find(letter) 
        match (position):
            case position if (position == -1):
                if (incorrectlist.find(letter) != -1):
                    print("Letter has already been inputted previously") 
                else:
                    print("Letter entered is not one of missing letters") 
                    incorrectlist.replace(letter) 
                    print(display_list) 
                    numofguess += 1
                break 
            case _:
                if (correctlist.find(letter) != -1):
                    print("Letter has already been inputted previously") 
                else:
                    print("Well done. Letter entered appears once or more in the secret word, please continnue") 
                    correctlist.replace(letter) 
                    # display_list.pop(word.find(letter)) 
                    display_list.replace(word.find(letter),letter) 
                    # swlist.pop(word.find(letter)) 
                    # swlist.insert(word.find(letter),"_") 
                    if (word.find(letter) >= 0):
                        display_list.pop(word.find(letter)) 
                        display_list.insert(word.find(letter),letter) 
                        # swlist.pop(word.find(letter)) 
                        # swlist.insert(word.find(letter),"_") 
                        # correctlist.append(letter) 
                        # display_list.pop(word.find(letter)) 
                        # display_list.insert(word.find(letter),letter) 
                    print(word) 
                    print(display_list) 
                if (display_list.index("_") == -1):
                    # winner = True 
                    print("CONGRATULATIONS WE HAVE A WINNER")
                break

hangman()