def display_board():
    print("Welcome to TIC TAC TOE")
    print("TIC TAC TOE")
    print("*****************")
    print(f"*   {a} | {b} | {c}   *")
    print("*  ---|---|---  *")
    print(f"*   {d} | {e} | {f}   *")
    print("*  ---|---|---  *")
    print(f"*   {g} | {h} | {i}   *")
    print("*****************")

def player_input():
    global x, y, counter, player
    if (counter % 2 == 0):
        player = "O"
    else:
        player = "X"
    print(f"Player {player}'s turn ...")
    x = int(input("Enter row (1-3): "))
    y = int(input("Enter column (1-3) : "))
    
def check_win():
    global player
    print("check_win")
    if ((a == b == c != " ") or (d == e == f != " ") or (g == h == i != " ") or (a == d == g != " ") or (b == e == h != " ") or (c == f == i != " ") or (a == e == i != " ") or (g == e == c != " ")):
        print(f"Player {player} has won")
        return False

def play(player):
    global a, b, c, d, e, f, g, h, i, counter
    a = b = c = d = e = f = g = h = i = " "
    counter = 1
    while True:
        display_board()
        player_input()
        assign()
        if (check_win() == False or counter > 9):
            display_board()
            break
        
def assign():
    global a, b, c, d, e, f, g, h, i, counter
    if (x == 1):
        if (y == 1):
            if (a == "X" or a == "O"):
                print("Selection already has an input, please retry")
            else:
                a = player
                counter += 1
        if (y == 2):
            if (b == "X" or b == "O"):
                print("Selection already has an input, please retry")
            else:
                b = player
                counter += 1
        if (y == 3):
            if (c == "X" or c == "O"):
                print("Selection already has an input, please retry")
            else:
                c = player
                counter += 1
    elif (x == 2):
        if (y == 1):
            if (d == "X" or d == "O"):
                print("Selection already has an input, please retry")
            else:
                d = player
                counter += 1
        if (y == 2):
            if (e == "X" or e == "O"):
                print("Selection already has an input, please retry")
            else:
                e = player
                counter += 1
        if (y == 3):
            if (f == "X" or f == "O"):
                print("Selection already has an input, please retry")
            else:
                f = player
                counter += 1
    elif (x == 3):
        if (y == 1):
            if (g == "X" or g == "O"):
                print("Selection already has an input, please retry")
            else:
                g = player
                counter += 1
        if (y == 2):
            if (h == "X" or h == "O"):
                print("Selection already has an input, please retry")
            else:
                h = player
                counter += 1
        if (y == 3):
            if (i == "X" or i == "O"):
                print("Selection already has an input, please retry")
            else:
                i = player
                counter += 1
    else:
        print("please reenter the row")
    
global player
player = "X"
play(player)
