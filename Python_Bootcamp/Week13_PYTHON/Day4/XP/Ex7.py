import os

def initialise():
    global correct, incorrect, wrong_answers, data
    data = [
        {
            "question": "What is Baby Yoda's real name?",
            "answer": "Grogu"
        },
        {
            "question": "Where did Obi-Wan take Luke after his birth?",
            "answer": "Tatooine"
        },
        {
            "question": "What year did the first Star Wars movie come out?",
            "answer": "1977"
        },
        {
            "question": "Who built C-3PO?",
            "answer": "Anakin Skywalker"
        },
        {
            "question": "Anakin Skywalker grew up to be who?",
            "answer": "Darth Vader"
        },
        {
            "question": "What species is Chewbacca?",
            "answer": "Wookiee"
        }
    ]
    wrong_answers = []
    correct = 0
    incorrect = 0

def star_wars():
    global correct, incorrect, wrong_answers, data
    i = 0
    for question in data:
        print(f"{data[i]['question']}")
        my_answer = input("Type your answer : ")
        if my_answer == data[i]['answer']:
            correct += 1
        else:
            incorrect += 1
            wrong_answers.append({'wrong': my_answer , 'Q' : i})
        i += 1
    answers()

def answers():
        os.system('cls')
        print(wrong_answers)
        print(f"You got {correct} answer(s) right")
        print(f"Unfortunately you also got {incorrect} wrong answer(s)")
        print("Details of your wrong answers below : ")   
        i = 0
        while (i < len(wrong_answers)):
            x = (wrong_answers[i]['Q'])
            print(f"Question {x+1} : {data[x]['question']}")
            print(f"Your answer : {wrong_answers[i]['wrong']}")
            print(f"The correct answer is : {data[x]['answer']}")
            i += 1

# initialise()
# star_wars()
# answers()
# print(len(wrong_answers))
x = 3
while True:
    if x < 3:
        break
    else:
        print("Start playing")
    initialise()
    star_wars()
    answers()
    x = len(wrong_answers)


